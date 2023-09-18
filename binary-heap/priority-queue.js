class Node {
  constructor(value, priority) {
    this.value = value // Value of the element
    this.priority = priority // Priority of the element (lower values indicate higher priority)
  }
}

// This priority Queue is implemented as a minheap (lower number = higher priority and therefore loweest number starts at the top)
class PriorityQueue {
  constructor() {
    // Initialize an empty array to store the elements with their priorities
    this.values = []
  }

  // Method to add an element with a specified priority to the queue
  enqueue(value, priority) {
    // Create a new Node instance with the provided value and priority
    const newNode = new Node(value, priority)
    // Add the new node to the end of the values array
    this.values.push(newNode)
    // Perform the 'bubble up' operation to maintain the min-heap property
    this.bubbleUp()
  }

  // Helper method to move an element up the heap to its correct position
  // Essentially all elements are initially added to the bottom. Their value is then checked with each parent, if it satisied the "heap condition" e.g. the element is bigger than the parent (in min heap) then it stays there. Otherwise, it swaps positions with the parent, and keeps doing this until it is inserted in a valid place.
  bubbleUp() {
    // Get the index of the newly added element
    let idx = this.values.length - 1
    // Get the element at the newly added index
    const element = this.values[idx]
    // Continue until the element is in its correct position
    while (idx > 0) {
      // Calculate the index of the parent element
      let parentIdx = Math.floor((idx - 1) / 2)
      // Get the parent element
      let parent = this.values[parentIdx]
      // If the element's priority is greater than or equal to its parent's priority, stop (bigger numbers are at the bottom)
      if (element.priority >= parent.priority) break
      // Swap the element and its parent (smaller priority bubbles up to the top)
      this.values[parentIdx] = element
      this.values[idx] = parent
      // Update the index to the parent's index
      idx = parentIdx
    }
  }

  // Method to remove and return the element with the highest priority (the root of the heap)
  // also makes sure that the next element with highest priority is added to the top
  dequeue() {
    // Get the element with the highest priority (the minimum) from the start of the array
    const min = this.values[0]
    // Get the element at the end of the array
    const end = this.values.pop()
    // if the heap has elements other than the root:
    if (this.values.length > 0) {
      // override the first element with the last element (if we used shift to remove the element then the whole array would have to be re-indexed)
      this.values[0] = end
      // sink the element down until it reaches a valid position (must be bigger than its parent)
      this.sinkDown()
    }
    // Return the element with the highest priority
    return min
  }

  // Helper method to move an element down the heap to its correct position
  sinkDown() {
    // Start from the root (index 0)
    let idx = 0
    // Get the total number of elements in the heap
    const length = this.values.length
    // Get the element at the root
    const element = this.values[0]
    // Continue until the element is in its correct position
    while (true) {
      // Calculate the indices of the left and right children
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      // Initialize variables to store the left and right children
      let leftChild, rightChild
      // Variable to track the index to swap with
      let swap = null

      // Check if the left child is within the bounds of the array
      if (leftChildIdx < length) {
        // Get the left child element
        leftChild = this.values[leftChildIdx]
        // If the left child has a lower priority than the element, mark it for swapping
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx
        }
      }

      // Check if the right child is within the bounds of the array
      if (rightChildIdx < length) {
        // Get the right child element
        rightChild = this.values[rightChildIdx]
        // If the right child has a lower priority than the left child or the element itself,
        // mark it for swapping (if it's lower priority than left child or swap is currently null)
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx
        }
      }

      // If no swap is needed, the element is in its correct position, so break the loop
      if (swap === null) break

      // Swap the element with the selected child
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      // Update the index to the swapped child's index
      idx = swap
    }
  }
}
