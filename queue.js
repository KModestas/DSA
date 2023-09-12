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

// *** Queue implemented using an array ***
class Queue_Arr {
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

// Given 2 seperate queue's, add items from each queue into a new queue
// NOTE: items have to be weaven together - 1 item from one queue followed by 1 item from the other queue
function weave(q1, q2) {
  const q = new Queue_Arr()

  // While either q has items:
  while (q1.peek() || q2.peek()) {
    // add item from q1 to q
    if (q1.peek()) {
      q.enqueue(q1.dequeue())
    }

    // add item from q2 to q
    if (q2.peek()) {
      q.enqueue(q2.dequeue())
    }
  }

  return q
}

function test() {
  let q = new Queue(2)
  q.enqueue(1)

  // (2) Items - Returns 2 Node
  if (q.length !== 0) {
    console.log(q.dequeue().value)
  } else {
    console.log('undefined')
  }

  // (1) Item - Returns 1 Node
  if (q.length !== 0) {
    console.log(q.dequeue().value)
  } else {
    console.log('undefined')
  }

  // (0) Items - Returns undefined
  if (q.length !== 0) {
    console.log(q.dequeue().value)
  } else {
    console.log('undefined')
  }
}

test()
