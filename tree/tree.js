// https://github.com/KModestas/algos/blob/master/completed_exercises/tree/index.js

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data
    })
  }
}

// Unlike a binary tree, Each parent node can have more than 2 children
class Tree {
  constructor() {
    this.root = null
  }

  traverseBF() {
    const arr = [this.root]
    while (arr.length) {
      const node = arr.shift()

      arr.push(...node.children)
    }

    return arr
  }

  traverseDF() {
    const arr = [this.root]
    while (arr.length) {
      const node = arr.shift()

      arr.unshift(...node.children)
    }

    return arr
  }
}

// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
function levelWidth(root) {
  const arr = [root, 's']
  const counters = [0]

  while (arr.length > 1) {
    const node = arr.shift()

    if (node === 's') {
      counters.push(0)
      arr.push('s')
    } else {
      arr.push(...node.children)
      counters[counters.length - 1]++
    }
  }

  return counters
}

module.exports = { Tree, Node }
