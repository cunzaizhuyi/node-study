let path = require('path')


// 1. join 根据 os 不同拼接路径
let two = '/////two/////'
let myPath = path.join(__dirname, '/////noe////', two, 'three')

console.log('vvvvv', myPath)


// 2. resolve 相对路径转绝对路径
console.log('绝对路径:', path.resolve('.//gsdgdfg////hulalallala.js'))


// 3. parse 将一个路径解析成json 包括ext, base, name, dir等key。   base = name + ext
let p  = path.join(__dirname, __filename)
let json = path.parse(p)
console.log('解析后：', json)


// 4. format 跟parse相反，将路径对象 转换 为 一个路径字符串
console.log('搞回来：', path.format(json), path.format(json) === p)
