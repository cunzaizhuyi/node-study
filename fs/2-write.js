/*
异步写文件：
*    1.打开文件
*       2.写入内容
*       3.保存&&关闭文件
 */
let fs = require('fs')

fs.open('dist/hello2.txt', 'w', function(err, fd){
    if(!err){
        fs.write(fd, 'hello node node', function(err){
            if(!err){
                fs.close(fd, function (err) {
                    if(!err){
                        console.log('close successful')
                    }
                })
            }else{
                console.log(err, 'write failed')
            }
        })
    }else{
        console.log(err, 'open failed')
    }
})