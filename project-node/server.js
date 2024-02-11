const handlebars = require('express-handlebars')
const express = require('express')
const app = express()
const PORT = 3000


// config handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log("conectado")
})