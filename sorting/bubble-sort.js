function bubbleSort(array) {
  // iterate over the array, iterating 1 less item each time
  for (let i = array.length - 1; i > 0; i--) {
    // for each item iterate through the entire array (- 1 each time)
    for (let j = 0; j < i; j++) {
      // check if the current item is bigger than the next item, if so swap them
      if (array[j] > array[j + 1]) {
        let item = array[j]

        array[j] = array[j + 1]
        array[j + 1] = item
      }
    }
  }
  // so for each iteration the problem set gets smaller by 1 since we dont have to compare subsequent items to the ones that have already been sorted

  return array
}

function test() {
  let myArray = [4, 2, 6, 5, 1, 3]
  bubbleSort(myArray)
  console.log(myArray)
}

test()
