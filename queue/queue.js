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
  let q = new Queue(2)
  q.enqueue(1)
}

test()
