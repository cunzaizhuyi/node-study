/*
    管道pipe（）  针对大文件拷贝
    pipe可以链式调用，中间的pipe调用可以对流数据进行操作，比如压缩
 */

//  大文件拷贝: 不使用pipe时
let fs = require('fs')
let s = fs.createReadStream('../dist/stream.txt')
let s2 = fs.createWriteStream('../dist/stream3.txt')
s.on('data', data=>{
    s2.write(data)
})
s.on('end', ()=>{
    s2.end()
})


//  大文件拷贝: 使用pipe时
let s3 = fs.createReadStream('../dist/stream.txt')
let s4 = fs.createWriteStream('../dist/pipe.txt')
s3.pipe(s4)
