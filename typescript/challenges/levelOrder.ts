/*
Problem: Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

Function signature: function levelOrder(root: TreeNode | null): number[][]

Example:
const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);
levelOrder(tree); // [[3],[9,20],[15,7]]

Explanation:

In the example, the tree has the following structure:
     3
    / \
   9   20
       / \
      15  7

      The level order traversal of the tree is [[3],[9,20],[15,7]], which represents the values of the nodes from left to right, level by level.
*/