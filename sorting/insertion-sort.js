function insertionSort(array) {
  // i starts as 1 (2nd item)
  for (let i = 1; i < array.length; i++) {
    let item = array[i]

    // use var so we can access j outside of the loop (below)
    // j = i - 1 (points to the item before current item)
    // while the previous item (j) is bigger than the current item (i), keep looping backwards:
    for (var j = i - 1; array[j] > item && j > -1; j--) {
      // and move the bigger item forward one index (basically overriding the current item)
      array[j + 1] = array[j]
    }
    // move current item into the open spot (remember j gets decremented before the loop terminates so j + 1 is BEFORE the j + 1 inside the loop above)
    array[j + 1] = item
  }
  return array
}

function test() {
  let myArray = [4, 2, 6, 5, 1, 3]
  insertionSort(myArray)
  console.log(myArray)
}

test()

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/
