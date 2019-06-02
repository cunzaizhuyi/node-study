// 计算器
let num1 = process.argv[2] - 0
let num2 = process.argv[3] - 0
console.log('计算中...')
setTimeout(() => {
    console.log('result:', num1 + num2)
}, 2000)
