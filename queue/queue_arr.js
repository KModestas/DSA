// *** Queue implemented using an array ***
class Queue {
  constructor() {
    this.data = []
  }

  enqueue(item) {
    this.data.unshift(item)
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
