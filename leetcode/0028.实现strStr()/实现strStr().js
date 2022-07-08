const strStr_func1 = (haystack, needle) => {
  if (!needle.length) {
    return 0
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i
    }
  }
  return -1
}
let a = strStr_func1('hello', 'll')
console.log(a)
