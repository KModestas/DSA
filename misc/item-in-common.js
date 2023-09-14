// Both functions do the same thing, given 2 arrays they return true if there are any items in common
// However itemInCommon2 is much more efficient

// This is using a nested loop, for each item in arr1 it checks all items of arr2:
// O(n^2)
function itemInCommon(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true
    }
  }
  return false
}

// - arr1 is adding its values as keys to obj
// - arr2 is then uses its values to access keys of obj (constant time). If value exists it return true
// O(n)
function itemInCommon2(arr1, arr2) {
  let obj = {
    // 1: true
    // 3: true
    // 5: true
  }

  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true
  }

  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true
  }
  return false
}

let array1 = [1, 3, 5]
let array2 = [2, 4, 5]

itemInCommon(array1, array2)
itemInCommon2(array1, array2)
