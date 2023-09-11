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
    let node = this.head // this will become the last node (one we want to remove)
    let pre = this.head // this will become the 2nd to last node (one which will become the tail)

    // loop through to the end of the list
    while (node.next) {
      pre = node
      node = node.next
    }

    // set the tail to be the 2nd to last node (which is now the last node)
    this.tail = pre
    // set pre to point to null - this means that nothing is pointing to node (last node) and so it will eventually get garbage collected.
    this.tail.next = null
    this.length--

    // Edgecase: if we popped off the very last item in the list then we set head and tail to null.
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    // finally return the node that was removed:
    return node
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
    let node = this.head
    // make the current head the 2nd node in the list:
    this.head = this.head.next
    this.length--
    // in case we removed the last node in the list
    if (this.length === 0) {
      this.tail = null
      // here we dont have to set this.head to be null since it will already be null after setting it to this.head.next
    }
    // before returning the removed node, set next to null so that it doesn't reference the next item (just because)
    node.next = null
    return node
  }

  // GET Node at particular index:
  get(index) {
    // incase an invalid index is passed in:
    if (index < 0 || index >= this.length) return undefined

    let node = this.head
    // continue looping until you reach the second to last index:
    for (let i = 0; i < index; i++) {
      // the node before the one we need will point to the one we need:
      node = node.next
    }

    // node will be the node we need:
    return node
  }

  // UPDATE value of a Node:
  set(index, value) {
    // get the Node we want to update:
    let node = this.get(index)
    if (node) {
      // set the new value:
      node.value = value
      return true
    }
    // incase if we didn't find the Node:
    return false
  }

  // ADD Node to a particular index:
  insert(index, value) {
    if (index < 0 || index > this.length) return false
    // use existing methods if necessary:
    if (index === this.length) return this.push(value)
    if (index === 0) return this.unshift(value)

    // NOTE: this doesn't remove any other nodes, the node that is at our index will become index + 1

    // create the new Node:
    const newNode = new Node(value)
    // get the node that is BEFORE the node that is at our index:
    const node = this.get(index - 1)
    // point our new node to the node that is currently at the index we need:
    newNode.next = node.next
    // make the node before our target index point to our new node
    node.next = newNode

    this.length++

    // ...basically have inserted our node between 2 other nodes

    return true
  }

  // REMOVE Node from a particular index:
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    // get node before the one we want to remove:
    const before = this.get(index - 1)
    // this is the node we want to remove:
    const node = before.next

    // make the before Node **skip** over the node we want to remove by pointing to the node AFTER the one we want to remove:
    before.next = node.next

    this.length--

    // return the removed node:
    node.next = null
    return node
  }

  reverse() {
    // store current node we are working with for each iteration:
    let node = this.head
    // swap head and tail:
    this.head = this.tail
    this.tail = node
    // variables to keep track of next and previous nodes in iteration:
    let next = node.next
    let prev = null
    // loop over the entire list:
    // NOTE: we are looping in the same original order of the list, we are just changing the next pointers for each node.
    for (let i = 0; i < this.length; i++) {
      next = node.next // Store the next node before changing the next pointer of node (useful for the last line)

      // core logic:
      node.next = prev // reverse the pointer (see next line)
      prev = node // the prev node of each iteration will be the node of the last iteration

      node = next // Move to the next node in the list so we can reverse its pointers
    }
  }

  forEach(fn) {
    let node = this.head
    let i = 0

    while (node) {
      fn(node, i)
      node = node.next
      i++
    }
  }

  // allows you to iterate over the list with a for of loop.

  /* 
  - Symbol.iterator is a built-in symbol that represents the default iteration mechanism for an objects
  
  - we are basically telling the JS engine that it should call this method whenever it iterates through the linked list object with a for of loop
  
  - the JS engine expects each iteration to return an object wth a .next() method which returns { done: Boolean }
  
  - for each iteration, JS engine will invoke .next() and stop when { done: false }
  
  - generators simplify the creator of iterators since they automatically return this .next() method for you.
  */
  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}

function test() {
  let ll = new LinkedList(1)
  ll.push(2)
  ll.push(3)
  ll.push(4)

  // ll.forEach((node, i) => {
  //   console.log('Node at index: ', i)
  //   console.log('value: ', node.value)
  // })

  // for (node of ll) {
  //   console.log('node: ', node.value)
  // }

  // console.log('Linked List before reverse():')
  // myLinkedList.printList()

  // myLinkedList.reverse()

  // console.log('\nLinked List after reverse():')
  // myLinkedList.printList()
}

test()
