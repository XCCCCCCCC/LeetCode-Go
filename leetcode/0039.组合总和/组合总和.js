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
const combinationSum_func2 = (candidates, target) => {
  let result = []
  let temp = []
  function backTrack(start) {
    let sum = temp.reduce((item, prev) => prev += item, 0)
    if (sum === target) {
      result.push([...temp])
      return
    } else if (sum > target) {
      return
    }
    for (let i = start; i < candidates.length; i++) {
      temp.push(candidates[i])
      backTrack(i)
      temp.pop()
    }
  }
  backTrack(0)
  return result
}