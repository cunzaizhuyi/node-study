let http = require('http')

let app = http.createServer()
app.on('request', (req, res) => {
    res.write('nihao')
    res.end()
})
app.listen(3000, () => {
    console.log('server listening....')
})