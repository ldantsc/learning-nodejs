// Importar e Instanciar o Sequelize, passar parametros conforme o indicado no README

const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "1234", {
    host: "localhost",
    dialect: "mysql"
})


// testar se a conexão esta correta

sequelize.authenticate().then(() => {
    console.log("conectado")
}).catch((err) => {
    console.log(`error ${err}`)
}
)


// Model - Forma de criar tabelas através do nodeJs com sequelize
// Criando model para postagem

const Postagem = sequelize.define("postagens", {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})