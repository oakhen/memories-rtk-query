const arrylist = Array.from({ length: 10 }, (_, i) => i + 1)

console.log(arrylist)

const arraylist2 = Array(10)
  .fill("names")
  .map((_, i) => upperCase())

console.log(arraylist2)
