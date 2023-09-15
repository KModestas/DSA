function merge(array1, array2) {
  let combined = []
  let i = 0
  let j = 0

  // loop and compare each item in array1 to each item in array2
  while (i < array1.length && j < array2.length) {
    // if current item in array1 is smaller than current item in array 2
    if (array1[i] < array2[j]) {
      // push smaller item from array1 into combined array
      combined.push(array1[i])
      i++
    } else {
      // push smaller item from array2 into combined array
      combined.push(array2[j])
      j++
    }
  }
  // Now we have pushed all of the smallest items from each array into the combined array
  // However one of the arrays will have left over items - the items that were the biggest so they were compared to items in the other array but were not pushed to the combined array (since they were bigger)

  // loop over and push those left over big items to the combined array (regardless of which array had those items)
  while (i < array1.length) {
    combined.push(array1[i])
    i++
  }
  while (j < array2.length) {
    combined.push(array2[j])
    j++
  }

  return combined
}

// Recursive function to keep splitting the array into halves and mergeing each half
function mergeSort(array) {
  if (array.length === 1) return array

  // use the middle index as reference index to split each array
  let midIndex = Math.floor(array.length / 2)

  // split the array into 2 halves
  let left = mergeSort(array.slice(0, midIndex))
  let right = mergeSort(array.slice(midIndex))

  // merge each half
  return merge(left, right)
}

function test() {
  let originalArray = [3, 1, 4, 2]
  let sortedArray = mergeSort(originalArray)

  console.log('Original Array:', originalArray)
  console.log('\nSorted Array:', sortedArray)
}

test()

/*
    EXPECTED OUTPUT:
    ----------------
    Original Array: [ 3, 1, 4, 2 ]

    Sorted Array: [ 1, 2, 3, 4 ]

*/
