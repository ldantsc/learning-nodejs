const express = require("express")
const app = express()

//definindo rotas, send() enviar mensagem 


app.get("/", (req, res) => {
    /* variavel __dirname retorna o diretório padrão da aplicação*/
    /* metodo sendFile() para exibir um html */
    res.sendFile(__dirname + "/pages/index.html")
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/pages/contact.html")
})


// Um parametro é um valor dinamico que o usuário passar algum valor
// enviando dados através via requisição http para o server node

/* através do objeto req(requisição), 
podemos obter dados da requisição que foi feita, 
inclusive parametrôs*/

app.get("/about", (req, res) => {
    res.send("Página sobre")
})

app.get("/about/:name", (req, res) => {
    res.send(req.params)
})

app.get("/about/test/:name", (req, res) => {
    res.send("Hi" + req.params.name)
})




// o listen precisa ser a ultima função
app.listen(8080, () => console.log("servidor rodando http://localhost:8080"))