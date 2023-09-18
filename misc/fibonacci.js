// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// takes a function that we want to memoise, runs it and stores its value in the cache object
// whenever the function gets called again with those arguments, we first check to see if it exists in the cache and return that value rather than invoking the function.
function memoize(fn) {
  const cache = {
    // [args]: result
  }

  // actual fast function that will be used:
  return function (...args) {
    // if function has been called with these arguments, return the result from cache
    if (cache[args]) {
      return cache[args]
    }

    // arguments are not in cache, call the function with its arguments then store the result in cache
    const result = fn.apply(this, args)
    // args will be an array of arguments and will implicitly be converted to a string when the key is created e.g. '1,2,3'
    cache[args] = result

    return result
  }
}

// if n is 5:
function slowFib(n) {
  if (n < 2) {
    return n
  }

  // this will be fib(3) + fib(2)
  return fib(n - 1) + fib(n - 2)
}

const fib = memoize(slowFib)

// iterative solution without recursion:
// function fib(n) {
//   const result = [0, 1];
//
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//
//     result.push(a + b);
//   }
//
//   return result[n];
// }
