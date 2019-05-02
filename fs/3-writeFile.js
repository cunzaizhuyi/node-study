/*
    前两种方式太麻烦，就有了writeFile和writeFileSync()，内部封装了open，close
 */

let fs = require('fs')
fs.writeFile(__dirname + '../../dist/hello3.txt', 'this is hello3.txt content', {}, (err) => {
    if(!err){
        console.log(err)
    }
    console.log('写入成功')
})