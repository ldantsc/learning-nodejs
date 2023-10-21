# Curso de Node.JS por [Victor Lima](https://www.youtube.com/@GuiadoProgramador)

## Anotações:


Nodemon para não precisar reiniciar o servidor após mudanças no terminal

___________________


Após a instalação do MySql, indicar a pasta bin do MySql na variavel de ambiente do tipo Path

Abrir servidor no MySql cmd

- paramentro 1 
-h localhost: indica em que servidor quer se conectar, no caso servidor local

- parametro 2
 -u root: indica o usuário padrão

- parametro 3
 -p pedir a senha

```cmd

mysql -h localhost -u root -p

```

Comando para mostrar os bancos de dados no mysql

```sql

SHOW DATABASES;

```
Criar um novo banco de dados

```sql

CREATE DATABASE;

```

- Criando tabelas

CREATE TABLE usuário = Criar tabela usuarios

- Colunas...

nome VARCHAR(50); = definir nome, tipo, dentro do tipo entre parenteses é o número de caracteres que o banco aceita, o ponto e virgula indica que criaremos outra coluna



```sql

CREATE TABLE usuarios(
    nome VARCHAR(50);
    email VARCHAR(100);
    idade INT;
);

```

- Inserir dados... 

```sql

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Lucas Dantas", 
    "email@test.com",
    8
);

```
- Consulta...

````sql

SELECT * FROM usuarios;

````

- Especificar consulta com Where 
todos da coluna usuarios que tenham menos que 15 anos de idade

```sql

SELECT * FROM usuarios WHERE idade < 15;

```

- Todos da coluna usuarios que tenham o nome Lucas

```sql

SELECT * FROM usuarios WHERE nome = "Lucas Dantas";

```

- Deletar registros

Dessa forma deleta todos os registros da tabela
(cuidado)

```sql

DELETE FROM usuarios;

```

Utilizar para deletar um registro especifico

```sql

DELETE FROM usuarios WHERE nome = "Lucas Dantas";

```

- Atualizar campo 
Dessa forma atualiza toda a tabela
(cuidado)

```sql

UPDATE ususarios SET nome = "nome teste";

```

Utilizar para alterar um registro

```sql

UPDATE ususarios SET nome = "nome teste" WHERE nome = "Diogo Brito";

```

## Sequelize

- ORM é um sistema que abstrai um banco de dados, facilita o trabalho com banco de dados

```

npm install --save sequelize

npm install --save mysql2

```

- Ultilizando o Sequelize

importar e instanciar o Sequelize

parametro 1 = nome do banco
parametro 2 = username
parametro 3 = password
parametro 4 = abrir chaves (json) passando o servidor (no caso localhost) e dialect para indicar qual tipo de banco de dados esta trabalhando, pois ele trabalha com varios tipos de banco de dados

```js

const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "147891212", {
    host: "localhost",
    dialect: "mysql"
})

```
- Models

models = forma de criar tabelas SQL através do Nodejs
através do método define() o modelo de tabela
primeiro parametro = nome da tabela
segundo parametro = montagem da tabela

- ex

Abaixo estamos definindo 2 campos, um campo de titulo e um campo de texto
e definindo o tipo de dados com Sequelize
.TEXT sendo ilimitado o numero de caracteres


```js

const Postagem = sequelize.define("postagens", {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

```

Função que sincroniza/gerar o Model ao banco de dados

```js

Postagem.sync({force: true})

```