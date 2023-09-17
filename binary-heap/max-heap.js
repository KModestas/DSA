class MaxBinaryHeap {
  // initialize an empty array to store heap values
  constructor() {
    this.values = []
  }

  // Method to insert a new value into the heap
  insert(element) {
    // Add the new element to the end of the array
    this.values.push(element)
    // Ensure the max binary heap property is maintained after insertion
    this.bubbleUp()
  }

  // Helper method to ensure that the inserted value is in the correct spot
  bubbleUp() {
    // Start at the last inserted value's index
    let idx = this.values.length - 1
    const element = this.values[idx]

    // Continue until we reach the root of the heap or until the element is in the correct position
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]

      // If the inserted element is less than or equal to its parent, we're done
      if (element <= parent) break

      // Otherwise, swap the inserted element with its parent
      this.values[parentIdx] = element
      this.values[idx] = parent

      // Move to the parent index for the next iteration
      idx = parentIdx
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
