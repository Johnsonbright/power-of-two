// Give a positive integer 'n' determine if the number is a power of 2 or not.
function isPowerOfTwo(n) {
if (n < 1) {
  return false
}
while ( n > 1) {
  if(n % 2 !== 0) {
    return false
  }
  n = n/2
}
return true
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(100));