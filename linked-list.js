class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  // when link list is first created, we pass in a value which will be the first node.
  constructor(value) {
    const newNode = new Node(value)
    // head and tail will both be the same node initially
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  printList() {
    let temp = this.head
    while (temp !== null) {
      console.log(temp.value)
      temp = temp.next
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

  // ADD Node to END of List:
  push(value) {
    const newNode = new Node(value)
    // edgecase to set this new node to be the head and tail incase the linkedList is empty because you removed all items.
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      // make the current tail point to this new node
      this.tail.next = newNode
      // ...remember at this point, this.tale points to a particular object in memory so adding .next will update that object.
      // Then make the new node the tail. Since we are re-assigning tail to the new node, we break the reference to the old node completely.
      this.tail = newNode
    }
    this.length++
    // finally return the entire linked list
    return this
  }

  // REMOVE Node from END of List:
  pop() {
    if (this.length === 0) return undefined
    // we will loop over the entire list and keep track of 2 variables:
    let temp = this.head // this will become the last node (one we want to remove)
    let pre = this.head // this will become the 2nd to last node (one which will become the tail)

    // loop through to the end of the list
    while (temp.next) {
      pre = temp
      temp = temp.next
    }

    // set the tail to be the 2nd to last node (which is now the last node)
    this.tail = pre
    // set pre to point to null - this means that nothing is pointing to temp (last node) and so it will eventually get garbage collected.
    this.tail.next = null
    this.length--

    // Edgecase: if we popped off the very last item in the list then we set head and tail to null.
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    // finally return the node that was removed:
    return temp
  }

  // ADD Node to BEGINNING of List:
  unshift(value) {
    const newNode = new Node(value)
    // eddge case when adding to an empty list:
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      // set new node to be the head and make it point to the current head (current head becomes the 2nd item)
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  // REMOVE Node from BEGINNING of List:
  shift() {
    if (this.length === 0) return undefined
    // store node to remove in a variable so we can return it at the end
    let temp = this.head
    // make the current head the 2nd node in the list:
    this.head = this.head.next
    this.length--
    // in case we removed the last node in the list
    if (this.length === 0) {
      this.tail = null
      // here we dont have to set this.head to be null since it will already be null after setting it to this.head.next
    }
    // before returning the removed node, set next to null so that it doesn't reference the next item (just because)
    temp.next = null
    return temp
  }

  get(index) {
    // incase an invalid index is passed in:
    if (index < 0 || index >= this.length) return undefined

    let temp = this.head
    // continue looping until you reach the second to last index:
    for (let i = 0; i < index; i++) {
      // the node before the one we need will point to the one we need:
      temp = temp.next
    }

    // temp will be the node we need:
    return temp
  }

  set(index, value) {
    let temp = this.get(index)
    if (temp) {
      temp.value = value
      return true
    }
    return false
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return this.push(value)
    if (index === 0) return this.unshift(value)

    const newNode = new Node(value)
    const temp = this.get(index - 1)
    newNode.next = temp.next
    temp.next = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const before = this.get(index - 1)
    const temp = before.next

    before.next = temp.next
    temp.next = null
    this.length--
    return temp
  }

  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let next = temp.next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next
    }
  }
}

function test() {
  let myLinkedList = new LinkedList(1)
  myLinkedList.push(2)
  myLinkedList.push(3)
  myLinkedList.push(4)

  console.log('Linked List before reverse():')
  myLinkedList.printList()

  myLinkedList.reverse()

  console.log('\nLinked List after reverse():')
  myLinkedList.printList()
}

test()
