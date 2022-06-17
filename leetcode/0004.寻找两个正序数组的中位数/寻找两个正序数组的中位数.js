const findMedianSortedArrays_func1 = (nums1, nums2) => {
  const temp = [...nums1, ...nums2]
  temp.sort((a, b) => {
    if (a < b) {
      return -1
    }
    if (a === b) {
      return 0
    }
    if (a > b) {
      return 1
    }
  })
  console.log(temp)
  if (!temp.length) {
    return 0
  }
  if (temp.length % 2 === 1) {
    const mid = Math.floor(temp.length / 2)
    return temp[mid]
  } else {
    const mid = Math.floor(temp.length / 2)
    return (temp[mid - 1] + temp[mid]) / 2
  }
}
