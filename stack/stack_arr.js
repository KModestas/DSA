// *** Stack implemented using an array ***
class Stack {
  constructor() {
    this.stack = []
  }

  getstack() {
    return this.stack
  }

  printStack() {
    for (let i = this.stack.length - 1; i >= 0; i--) {
      console.log(this.stack[i])
    }
  }

  isEmpty() {
    return this.stack.length === 0
  }

  peek() {
    if (this.isEmpty()) {
      return null
    } else {
      return this.stack[this.stack.length - 1]
    }
  }

  size() {
    return this.stack.length
  }

  push(value) {
    this.stack.push(value)
  }

  pop() {
    if (this.isEmpty()) return null
    return this.stack.pop()
  }
}

// Use stack to reverse a string:
function reverseString(str) {
  const stack = new Stack() // Create a new stack instance
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

module.exports = Stack
