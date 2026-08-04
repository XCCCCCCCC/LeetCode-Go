/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams1 = function (strs) {
  let i = 0
  let result = []
  while (i < strs.length) {
    let j = i + 1
    let temp1 = [...strs[i]].sort().toString()
    let sub = [strs[i]]
    console.log(temp1)
    while (j < strs.length) {
      let temp2 = [...strs[j]].sort().toString()
      console.log(temp2)
      if (temp1 === temp2) {
        sub.push(strs[j])
        strs.splice(j, 1)
      } else {
        j++
      }
    }
    result.push(sub)
    i++
  }
  return result
};
var groupAnagrams2 = function (strs) {
  let i = 0
  let temp = {}
  let result = []
  while (i < strs.length) {
    let afterSort = [...strs[i]].sort().toString()
    if (temp[afterSort]) {
      temp[afterSort].push(strs[i])
    } else {
      temp[afterSort] = [strs[i]]
    }
    i++
  }
  return Object.values(temp)
};
