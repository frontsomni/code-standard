const arr = [1, 2, 3]

/* eslint array-callback-return: [2, {allowImplicit: true}] */
arr.map((v) => {
  console.log(v)
  return
})

/* eslint for-direction: [2] */
for (let i = 0; i < 10; i++) {
  console.log("not for-direction")
}

// 骚气的 y 带拐弯，以此作为文章的开头
const myArray = 323

if (myArray) {
  // 232
  console.log(myArray)
}
