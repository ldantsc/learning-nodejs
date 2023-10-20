// requisições http

var http = require('http')

// criando servidor
http.createServer(function(req,res) {
    const test = "Olá"
    res.end(test)
}).listen(8080);
console.log("Servidor Rodando")