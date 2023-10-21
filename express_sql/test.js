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

Postagem.create({
    titulo: "Um titulo",
    conteudo: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, reprehenderit!"
})

const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }  
})

Usuario.create({
    nome: "Lucas",
    sobrenome: "Dantas",
    idade: 200,
    email: "test@test.com"
})
