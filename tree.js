(function() {
	'use strict';

	function Tree() {
		this.root = null;
	};

	function _findeMin(tree) {

		var currentTree = tree || this.root;

		if (!currentTree) {
			return;
		}

		if (currentTree.left != null) {
			return _findeMin(currentTree.left);
		} else {
			return currentTree;
		}
	};

	function _findeMax(tree) {

		var currentTree = tree || this.root;

		if (!currentTree) {
			return;
		}

		if (currentTree.right != null) {
			return _findeMax(currentTree.right);
		} else {
			return currentTree;
		}
	};

	Tree.prototype.findeMin = function() {
		return _findeMin(this.root);
	};

	Tree.prototype.findeMax = function() {
		return _findeMax(this.root);
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

})();