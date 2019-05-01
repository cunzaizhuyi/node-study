/**
 * buffer数据结构类似数组，不过存放的是二进制数据
 * 建立buffer后不可扩容长度，因为不能保证扩容后存储空间继续连续
 *
 *
 * 方法：
 *     1.Buffer.from(str)
 *     2.Buffer.alloc(size)
 *     3.Buffer.allocUnsafe(size)
 *     4.fill()
 *
 */

// 一个英文字符一个字节
let str = 'hello world'
let buf = Buffer.from(str)
console.log(buf)

// 一个汉字三个字节
let str2 = '你好'
let buf2 = Buffer.from(str2)
console.log(buf2)

// 空的连续空间
let b = Buffer.alloc(10)
console.log(b) // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 非空的连续空间
let a = Buffer.allocUnsafe(10)
console.log(a); // 结果不一定，比如：<Buffer f8 61 08 6d 39 02 00 00 68 62>


// buf[index]用于设置和获取item
//有效的值的范围是 0x00 至 0xFF（十六进制），或 0 至 255（十进制）
let c = Buffer.alloc(10)
console.log('before assign：', c);
c[0] = 255;
c[1] = 12
c[2] = 's'
c[3] = 3
console.log('after assign: ', c);


// fill
b.fill(5)
console.log('bbbbbbbbbb:', b);


