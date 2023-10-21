CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Robson Ambrosio", 
    "email@test.com",
    90
);

SELECT * FROM usuarios WHERE idade < 15;