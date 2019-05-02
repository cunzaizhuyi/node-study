/*

 */
let fs = require('fs')
let rs = fs.createWriteStream('../dist/stream2.txt')

rs.write('heng')
rs.write('ha')
rs.write('hisbf')
rs.write('sdgsdgsg')
rs.end() // 必须显示指明结束

rs.on('finish', (err, data)=>{
    console.log('--------------')
    console.log(err, data)  //undefined undefined
})
