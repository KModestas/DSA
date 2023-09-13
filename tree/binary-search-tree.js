class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  // TOO: add recursive version?
  // https://github.com/KModestas/algos/blob/master/completed_exercises/bst/index.js
  insert(value) {
    const newNode = new Node(value)

    // we are inserting the first item:
    if (this.root === null) {
      this.root = newNode
      return this
    }

    let currentNode = this.root

    while (true) {
      // NOTE: In our case we do not allow duplicates but if you wanted to, you can simply add a count property to each node and increment it when duplicate values are inserted:
      if (newNode.value === currentNode.value) return undefined

      // if new node is less than current node:
      if (newNode.value < currentNode.value) {
        // insert new node as left child of current node if space is not already filled:
        if (currentNode.left === null) {
          currentNode.left = newNode
          return this
        }
        // left child already exists, move down to existing left child and re-run this same logic:
        currentNode = currentNode.left
      }
      // if new node is greater than current node:
      else {
        // insert new node as right child if it's not already filled.
        if (currentNode.right === null) {
          currentNode.right = newNode
          return this
        }
        // right child already exists, move down to it and re-run loop:
        currentNode = currentNode.right
      }
    }
  }

  contains(value) {
    if (this.root === null) return false
    let temp = this.root
    while (temp) {
      if (value < temp.value) {
        temp = temp.left
      } else if (value > temp.value) {
        temp = temp.right
      } else {
        return true
      }
    }
    return false
  }

  minValueNode(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left
    }
    return currentNode
  }

  BFS() {
    let currentNode = this.root
    let results = []
    let queue = []
    queue.push(currentNode)

    while (queue.length) {
      currentNode = queue.shift()
      results.push(currentNode.value)
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }
    return results
  }

  DFSPreOrder() {
    let results = []
    function traverse(currentNode) {
      results.push(currentNode.value)
      if (currentNode.left) traverse(currentNode.left)
      if (currentNode.right) traverse(currentNode.right)
    }
    traverse(this.root)
    return results
  }

  DFSPostOrder() {
    let results = []
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left)
      if (currentNode.right) traverse(currentNode.right)
      results.push(currentNode.value)
    }
    traverse(this.root)
    return results
  }

  DFSInOrder() {
    let results = []
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left)
      results.push(currentNode.value)
      if (currentNode.right) traverse(currentNode.right)
    }
    traverse(this.root)
    return results
  }
}

function test() {
  let tree = new BST()

  tree.insert(47)
  tree.insert(21)
  tree.insert(76)
  tree.insert(18)
  tree.insert(27)
  tree.insert(52)
  tree.insert(82)

  console.log(tree.DFSInOrder())
}

test()

/*
    EXPECTED OUTPUT:
    ----------------
    [ 18, 21, 27, 47, 52, 76, 82 ]

*/
