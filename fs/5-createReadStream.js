/*
       默认一次读取65536字节数据 = 64kb
 */
let fs = require('fs')
let rs = fs.createReadStream('../dist/stream.txt')


rs.on('data', (data)=>{
    console.log('--------------')
    console.log(data)
})


rs.on('end', (data)=>{
    console.log(data)
})