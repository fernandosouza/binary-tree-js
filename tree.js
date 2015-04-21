(function() {
	'use strict';

	function Tree() {
		this.root = null;
	};

	Tree.prototype.insertNode = function(value, tree) {
		var currentTree,
			directionKey;

		if (this.root == null) {
			this.root = new Node(value);

			return;
		};

		currentTree = tree || this.root;

		if (value < currentTree.value) {
			directionKey = 'left';
		} else {
			directionKey = 'right';
		}

		if (!currentTree[directionKey]) {
			currentTree[directionKey] = new Node(value, null, null, currentTree);
		} else {
			this.insertNode(value, currentTree[directionKey]);
		}
	};

	window.Tree = Tree;

})()