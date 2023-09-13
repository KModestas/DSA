class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value)
    this.top = newNode
    this.length = 1
  }

  printStack() {
    let node = this.top
    while (node !== null) {
      console.log(node.value)
      node = node.next
    }
  }

  getTop() {
    if (this.top === null) {
      console.log('Top: null')
    } else {
      console.log('Top: ' + this.top.value)
    }
  }

  getLength() {
    console.log('Length: ' + this.length)
  }

  makeEmpty() {
    this.top = null
    this.height = 0
  }

  // Push item to the top:
  push(value) {
    const newNode = new Node(value)
    // pushing to an empty stack:
    if (this.length === 0) {
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
    this.length++
  }

  // Remove item from the top:
  pop() {
    if (this.length === 0) return undefined

    let node = this.top
    this.top = this.top.next
    node.next = null

    this.length--
    return node
  }
}

function test() {
  let stack = new Stack(2)
  stack.push(1)
}

test()
