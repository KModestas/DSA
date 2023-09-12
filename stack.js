class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// stacks are simple LIFO structures with push, pop methods
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

// *** Stack implemented using an array ***
class Stack_Arr {
  constructor() {
    this.stackList = []
  }

  getStackList() {
    return this.stackList
  }

  printStack() {
    for (let i = this.stackList.length - 1; i >= 0; i--) {
      console.log(this.stackList[i])
    }
  }

  isEmpty() {
    return this.stackList.length === 0
  }

  peek() {
    if (this.isEmpty()) {
      return null
    } else {
      return this.stackList[this.stackList.length - 1]
    }
  }

  size() {
    return this.stackList.length
  }

  push(value) {
    this.stackList.push(value)
  }

  pop() {
    if (this.isEmpty()) return null
    return this.stackList.pop()
  }
}

// Use stack to reverse a string:
function reverseString(str) {
  const stack = new Stack_Arr() // Create a new stack instance
  let reversedString = '' // Initialize an empty reversed string

  // Iterate through each character in the input string
  for (const c of str) {
    stack.push(c) // Push each character onto the stack
  }

  // Continue until the stack is empty
  while (!stack.isEmpty()) {
    // Pop characters from the stack and append them to the reversed string
    reversedString += stack.pop()
  }

  return reversedString // Return the reversed string
}

function test() {
  let myStack = new Stack(2)
  myStack.push(1)

  // (2) Items - Returns 1 Node
  if (myStack.length !== 0) {
    console.log(myStack.pop().value)
  } else {
    console.log('undefined')
  }

  // (1) Item - Returns 2 Node
  if (myStack.length !== 0) {
    console.log(myStack.pop().value)
  } else {
    console.log('undefined')
  }

  // (0) Items - Returns undefined
  if (myStack.length !== 0) {
    console.log(myStack.pop().value)
  } else {
    console.log('undefined')
  }
}

test()
