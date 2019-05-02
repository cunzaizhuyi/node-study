/*
    简单文件读取：
        1.异步文件读取
            readFile
        2.同步文件读取
            readFileSync
 */

let fs = require('fs')

// 异步文件读取
console.log(111111)
fs.readFile('../dist/user.json', function(err, data){
    if(err)throw err;
    console.log(data.toString())
})
console.log(22222222)



// 同步文件读取

console.log(3333)
let data = fs.readFileSync('../dist/user.json')
console.log(data.toString())
console.log(4444)