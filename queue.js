class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value)
    this.first = newNode
    this.last = newNode
    this.length = 1
  }

  printQueue() {
    let node = this.first
    while (node !== null) {
      console.log(node.value)
      node = node.next
    }
  }

  getFirst() {
    if (this.first === null) {
      console.log('First: null')
    } else {
      console.log('First: ' + this.first.value)
    }
  }

  getLast() {
    if (this.last === null) {
      console.log('Last: null')
    } else {
      console.log('Last: ' + this.last.value)
    }
  }

  getLength() {
    console.log('Length: ' + this.length)
  }

  makeEmpty() {
    this.first = null
    this.last = null
    this.length = 0
  }

  // add Node to end of queue
  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
  }

  // remove Node from the beginning of queue
  dequeue() {
    if (this.length === 0) return undefined
    let node = this.first
    if (this.length === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
      node.next = null
    }
    this.length--
    return node
  }
}

function test() {
  let myQueue = new Queue(2)
  myQueue.enqueue(1)

  // (2) Items - Returns 2 Node
  if (myQueue.length !== 0) {
    console.log(myQueue.dequeue().value)
  } else {
    console.log('undefined')
  }

  // (1) Item - Returns 1 Node
  if (myQueue.length !== 0) {
    console.log(myQueue.dequeue().value)
  } else {
    console.log('undefined')
  }

  // (0) Items - Returns undefined
  if (myQueue.length !== 0) {
    console.log(myQueue.dequeue().value)
  } else {
    console.log('undefined')
  }
}

test()

// Here is a simple implemetation of a queue using an array:
class QueueArray {
  constructor() {
    this.data = []
  }

  enqueue(record) {
    this.data.unshift(record)
  }

  dequeue() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}
