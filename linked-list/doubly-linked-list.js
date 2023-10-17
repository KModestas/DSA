class Node {
  constructor(value) {
    this.value = value
    this.next = null
    // each Node now has a pointer to the previous node:
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
  }

  printList() {
    let node = this.head
    while (node !== null) {
      console.log(node.value)
      node = node.next
    }
  }

  getHead() {
    if (this.head === null) {
      console.log('Head: null')
    } else {
      console.log('Head: ' + this.head.value)
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log('Tail: null')
    } else {
      console.log('Tail: ' + this.tail.value)
    }
  }

  getLength() {
    console.log('Length: ' + this.length)
  }

  makeEmpty() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (this.length === 0) return undefined
    // store node we want to remove so we can return it later
    let node = this.tail
    // if you remove the last node in the list:
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      // current tail becomes the previous node
      this.tail = this.tail.prev
      this.tail.next = null
      node.prev = null
    }
    this.length--
    // return removed node:
    return node
  }

  unshift(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return this
  }

  shift() {
    if (this.length === 0) return undefined
    let node = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
      node.next = null
    }
    this.length--
    return node
  }

  // We can either traverse the list by starting at the head or tail. This makes it retrieving items more efficient than a singly linked list if the item is nearer the end of the list
  get(index) {
    if (index < 0 || index >= this.length) return undefined
    let node = this.head
    // if index is in the first half of the list, start from head:
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        node = node.next
      }
      // otherwise start from tail
    } else {
      node = this.tail
      for (let i = this.length - 1; i > index; i--) {
        node = node.prev
      }
    }
    return node
  }

  set(index, value) {
    let node = this.get(index)
    if (node) {
      node.value = value
      return true
    }
    return false
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return this.push(value)
    if (index === 0) return this.unshift(value)

    const newNode = new Node(value)
    const before = this.get(index - 1)
    const after = before.next
    before.next = newNode
    newNode.prev = before
    newNode.next = after
    after.prev = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    if (index < 0 || index >= this.length) return undefined

    const node = this.get(index)

    // set the next pointer of the previous node to skip over this node
    node.prev.next = node.next
    // set the prev pointer of the next node to skip over this node
    node.next.prev = node.prev

    node.next = null
    node.prev = null

    this.length--
    return node
  }

  // swaps the VALUES of first and last nodes (not the nodes themselves)
  swapFirstLast() {
    // If the list has less than two nodes, do nothing
    if (this.length < 2) return
    // Store the head value in a temporary variable
    const value = this.head.value
    // Set head value to the value of the tail node
    this.head.value = this.tail.value
    // Set tail value to the stored value of the head node
    this.tail.value = value
  }

  // reverse all nodes in the list
  reverse() {
    // Initialize current pointer at head
    let current = this.head
    // Create a temp pointer for swapping
    let temp = null

    // Iterate through the list
    while (current !== null) {
      // Store the previous node in temp
      temp = current.prev
      // Swap previous and next pointers of current node
      current.prev = current.next
      current.next = temp
      // Move current pointer to the previous node (remember current.prev is current.next so it moves to the next item in the list)
      current = current.prev
    }

    // Swap head and tail pointers
    temp = this.head
    this.head = this.tail
    this.tail = temp
  }
}

function test() {
  let doublyLinkedList = new DoublyLinkedList(1)
  doublyLinkedList.push(2)
  doublyLinkedList.push(3)
  doublyLinkedList.push(4)
  doublyLinkedList.push(5)

  console.log('DLL before remove():')
  doublyLinkedList.printList()

  console.log('\nRemoved node:')
  console.log(doublyLinkedList.remove(2).value)
  console.log('DLL after remove() in middle:')
  doublyLinkedList.printList()

  console.log('\nRemoved node:')
  console.log(doublyLinkedList.remove(0).value)
  console.log('DLL after remove() of first node:')
  doublyLinkedList.printList()

  console.log('\nRemoved node:')
  console.log(doublyLinkedList.remove(2).value)
  console.log('DLL after remove() of last node:')
  doublyLinkedList.printList()
}

test()
