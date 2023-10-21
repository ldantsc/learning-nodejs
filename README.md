# Curso de Node.JS por [Victor Lima](https://www.youtube.com/@GuiadoProgramador)

## Anotações:

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