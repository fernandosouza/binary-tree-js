(function() {
	'use strict';

	function node(value, left, right, parent) {
		this.value = value;
		this.left = left;
		this.right = right;
		this.parent = parent;
	};

	window.Node = node;
})();