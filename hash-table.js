class HashTable {
  constructor(size = 7) {
    // initialise the table (array) with a fixed size:
    // NOTE: more complex impementation would allow for a dynamic size (dynamic resizing)
    this.dataMap = new Array(size)
  }

  // private method (should only be called by other methods internally)
  // hashes the key and returns a value that maps to an index in the table
  _hash(key) {
    let hash = 0
    // loop over the characters of the key e.g. 'n', 'a', 'i', 'l', 's'
    for (let i = 0; i < key.length; i++) {
      // - multiply the ASCII number of each character by an arbitrary prime number (23) then add this number to the result of the last hash
      // - divide this resulting number by the length of the array and return the remainder
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
      // NOTE: remainder will always be between 0 and length of array
    }
    return hash
  }

  printTable() {
    for (let i = 0; i < this.dataMap.length; i++) {
      console.log(i, ': ', this.dataMap[i])
    }
  }

  set(key, value) {
    // Hash the key and get an index:
    const index = this._hash(key)
    // if no item exists at the index, initialise the array at that index
    const arrayAtIndex = this.dataMap[index] || (this.dataMap[index] = [])
    // push the [key, value] to the array at the index
    arrayAtIndex.push([key, value])
    // return the hash table
    return this
  }

  get(key) {
    // hash the key to get it's index:
    const index = this._hash(key)

    const arrayAtIndex = this.dataMap[index]

    // if there is a value at the index:
    if (arrayAtIndex) {
      // loop over the array at that index (remember there may be multiple key, values stored there):
      for (let i = 0; i < arrayAtIndex.length; i++) {
        // check the first value within each array until it matches the key (the key is stored at the 1st index)
        if (arrayAtIndex[i][0] === key) {
          // return the value of the key (stored in the 2nd index)
          return arrayAtIndex[i][1]
        }
      }

      // Visual Example at index 3: [['key1', 1], ['key2', 2]]
    }
  }

  keys() {
    let allKeys = []
    // loop over the table array
    for (let i = 0; i < this.dataMap.length; i++) {
      // if there are items at the index
      if (this.dataMap[i]) {
        // loop over array of the index
        for (let j = 0; j < this.dataMap[i].length; j++) {
          // for each key, value pair array, extract its key (firs index)
          allKeys.push(this.dataMap[i][j][0])
        }
      }
    }
    return allKeys
  }
}

function test() {
  let myHashTable = new HashTable()

  myHashTable.set('paint', 20)
  myHashTable.set('bolts', 40)
  myHashTable.set('nails', 100)
  myHashTable.set('tile', 50)
  myHashTable.set('lumber', 80)

  console.log(myHashTable.keys())
}

test()

/*
    EXPECTED OUTPUT:
    ----------------
    [ 'paint', 'bolts', 'nails', 'tile', 'lumber' ]

*/
