const combinationSum_func1 = (candidates, target) => {
  if (candidates.length === 1 && candidates[0] > target) {
    return []
  }
  const result = []
  const temp = []
  const backTrack = (curTarget, start) => {
    if (curTarget === 0) {
      console.log(temp)
      result.push(temp.slice())
      return
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] <= curTarget) {
        temp.push(candidates[i])
        backTrack(curTarget - candidates[i], i)
        temp.pop()
      }
    }
  }
  backTrack(target, 0)
  return result
}
let a = combinationSum_func1([2, 3, 6, 7], 7)
console.log(a)
