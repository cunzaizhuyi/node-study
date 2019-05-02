/*
* 同步写文件步骤
*       1.打开文件
*       2.写入内容
*       3.保存&&关闭文件
*  缺点：效率低下，影响性能，非异步
* */

// fs对象，包含很多方法
let fs = require('fs')
// console.log(fs);


// 打开文件， fd文件描述符，整数
let fd = fs.openSync('./dist/hello.txt', 'w')

// 写文件内容
let byteLength = fs.writeSync(fd, 'hello node')

// 关闭文件
fs.closeSync(fd)

