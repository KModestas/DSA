function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // initially set current item to be min value
    let indexOfMin = i

    // for each item, loop over all other items (i + 1 skips the current item so it doesnt compare to itself)
    for (let j = i + 1; j < array.length; j++) {
      // if you find an item that is lower than the current item, set it to min
      if (array[j] < array[indexOfMin]) {
        indexOfMin = j
      }
    }

    // if we did find a smaller item:
    if (i !== indexOfMin) {
      let item = array[i]

      // swap the position of the smaller value with the position of current item
      array[i] = array[indexOfMin]
      array[indexOfMin] = item
    }
  }
  return array
}

function test() {
  let myArray = [4, 2, 6, 5, 1, 3]
  selectionSort(myArray)
  console.log(myArray)
}

test()

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/
