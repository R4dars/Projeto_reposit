var http = require('http')
var fs = require('fs')

var server = http.createServer(function (rq, res) {
    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))