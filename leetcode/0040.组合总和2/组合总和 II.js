const combinationSum2_func1 = (candidates, target) => {
  if (candidates.length === 1 && candidates[0] !== target) {
    return []
  }
  candidates = candidates.sort((a, b) => a - b)
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
        backTrack(curTarget - candidates[i], i + 1)
        temp.pop()
        while (candidates[i] === candidates[i + 1]) {
          i++
        }
      }
    }
  }
  backTrack(target, 0)
  return result
}
