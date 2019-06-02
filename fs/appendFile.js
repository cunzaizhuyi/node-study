let fs = require('fs')

fs.appendFile('../dist/hello.txt', '追加内容1111111111', (err) => {
    console.log('追加成功')
})


// 效果同 writeFile  {flag: 'a'}
fs.writeFile('../dist/hello.txt', '追加内容222222222', {flag: 'a'}, (err) => {
    console.log('追加成功')
})