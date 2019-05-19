let fs = require('fs')

console.log(1111111)
console.info(9999999)  //console.info() 函数是 console.log() 的别名。


console.error(44444444) // 输出红色
console.warn(888)  // 输出红色  console.warn() 函数是 console.error() 的别名。

fs.readFile('./dist/user.json', function(err, data){
    if(err)throw err;
    console.log(data)
})
console.clear() // 有啥用？  官网：在 Windows 上， console.clear() 将仅清除当前终端视图中 Node.js 二进制文件的输出

