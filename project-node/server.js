const path = require("path");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 3000;

// config handlebars
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "./views");
app.set("views", path.join(__dirname, "/views"));

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rotas
app.get("/cadastro", (req, res) => {
  res.render("formulario");
});

app.post("/add", (req, res) => {
  res.render("req.body.username" + req.body.username + req.body.email);
});

app.listen(PORT, () => {
  console.log("conectado");
});
