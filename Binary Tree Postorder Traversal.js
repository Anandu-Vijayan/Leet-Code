// 145. Binary Tree Postorder Traversal
// Solved
// Easy
// Topics
// Companies
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

// Example 1:

// Input: root = [1,null,2,3]

// Output: [3,2,1]

// Explanation:



// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [4,6,7,5,2,9,8,3,1]

// Explanation:



// Example 3:

// Input: root = []

// Output: []

// Example 4:

// Input: root = [1]

// Output: [1]

 

// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

// Follow up: Recursive solution is trivial, could you do it iteratively?

var postorderTraversal = function(root) {
    //create a array to store the values
    let  arr = []

    function postOrderTraversal(root,arr){
        //if the root is empty  after somany recurtion calls we return arr
         if(!root){
        return arr
    }
    //after that we call the left and right arr values
    postOrderTraversal(root.left,arr)
    postOrderTraversal(root.right,arr)
    arr.push(root.val)

    }
   postOrderTraversal(root,arr)
    return arr
};