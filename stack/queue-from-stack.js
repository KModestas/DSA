const Stack = require('./stack-arr')

// Using two stacks to implement the functionality of a queue (interview question)
// The goal is to make sure items are added and removed in FIFO order
class QueueFromStack {
  constructor() {
    // first stack will be used to queue (add) items:
    this.first = new Stack()
    // second stack will be used to dequeue (remove) items:
    this.second = new Stack()
  }

  // add items to the first stack:
  // Remember: currently, items added first will be at the bottom of the stack and oldest items will be at the top (so we can only remove the oldest items first - not what we want)
  enqueue(item) {
    this.first.push(item)
  }

  // We need to make sure that the first item we added is the first item that gets dequeued:
  dequeue() {
    // while first stack has items:
    while (this.first.peek()) {
      // - remove all items from the first stack (starting with oldest items)
      // - push oldest items to the start of the second stack (Now oldest items will be at the bottom and newest items at the top)
      this.second.push(this.first.pop())
    }

    // simply remove the newest item from the stack
    const item = this.second.pop()

    // add all items back to the first stack
    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }

    return item
  }

  // retrieve the newest item from the stack
  // We must use the second stack to rearrange the order again since the newest item is at the bottom
  peek() {
    while (this.first.peek()) {
      // same again: transfer items from first stack to second stack so that newest items are at the top of the second stack:
      this.second.push(this.first.pop())
    }

    // peek the item at the top:
    const item = this.second.peek()

    // restore items from second stack to first stack
    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }

    return item
  }
}
