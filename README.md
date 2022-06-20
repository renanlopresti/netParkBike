# netPark Bike

Projeto desenvolvido como teste para o processo seletivo da Netpark/Hubees, com o objetivo criar uma API com Typescript utilizando Express que realize as operações simples de CRUD (Create, Read, Update e Delete) de um estabelecimento que vende bicicletas. As bicicletas tem os seguintes atributos Cor, Número de marchas, Marca, Modelo, Preço. Decidi adicionar o atributo Estoque, achei que ficaria melhor para o serviço de vendas. As funções necessárias eram Cadastrar uma bicicleta, Vender uma, bicicleta, Alterar o preço de uma bicicleta, Listar todos os produtos, Listar os produtos filtrados por cor, Listar os produtos filtrados por preço. Tinha um opcional para publicar o serviço em alguma nuvem, eu escolhi o heroku.

### 📋 Pré-requisitos

Será necessário um terminal Git Bash para clonar o projeto, ter o Node.js instalado no computador, e um banco de dados, que pode ser o MySQL server.

[Git Bash](https://gitforwindows.org/)
<br>
[Node.Js](https://nodejs.org/en/)
<br>
[MySQL](https://dev.mysql.com/downloads/installer)

### 🔧 Instalação

Comece clonando o projeto, no terminal bash rode o comando ```git clone  https://github.com/renanlopresti/netParkBike```. Dentro da pasta netParkBike, rode o ```npm install ```. 

Agora adicione as informações do banco de dados dentro do arquivo ```.env ```.
```
DB_HOST = Host
DB_USER = Usuario
DB_PASSWORD = Senha
DB_NAME = Nome do banco
```

no banco de dados crie a seguinte tabela

```
CREATE TABLE bicicleta (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cor VARCHAR(255) NOT NULL,
    marchas VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    modelo VARCHAR(255) NOT NULL,
    preco VARCHAR(255) NOT NULL,
    estoque INT NOT NULL
);
```

Por último rodamos ```npm run start```.

## ⚙️ Executando os testes

Com o projeto rodando localmente, você pode utilizar a documentação no [Postman](https://documenter.getpostman.com/view/18390198/UzBmLScA) para os serviços do projeto.
Para utilizar o Heroku apenas mude o link ```http://localhost:3003/``` para ```https://eureciclo.herokuapp.com/```. Nesse banco de dados existe algumas bicicletas e pode ser usado para modificar.


## 🛠️ Construído com

Bibliotecas utilizadas:
* [TypeScripit](https://www.typescriptlang.org/docs/)
* [express](https://expressjs.com/pt-br/) 
* [knex](http://knexjs.org/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [mysql](https://www.npmjs.com/package/mysql)

