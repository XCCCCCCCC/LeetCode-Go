const countAndSay = (n) => {
  let say = '1'
  if (n === 1) {
    return '1'
  }
  for (let i = 0; i < n - 1; i++) {
    const temp = say.split('')
    say = ''
    let group = []
    while (temp.length) {
      if (temp[0] === group[group.length - 1] || !group.length) {
        group.push(temp.shift())
        if (!temp.length) {
          say += group.length + group[0] + ''
        }
      } else {
        say += group.length + group[0] + ''
        group = []
      }
    }
  }
  return say
}
let a = countAndSay(5)
console.log(a)
