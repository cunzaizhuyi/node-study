let http = require("http")

let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    网站首页
</body>
</html>
`
let app = http.createServer()
app.on('request', (req, res) => {
    // 主要是下面这三个
    res.statusCode = 200
    res.setHeader('content-type', 'text/html')
    res.end(html)
})
app.listen(3009)