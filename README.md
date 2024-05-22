# Development of a Web Application based on Node.js, Sequelize, and MySQL

## My work assignment Title

Repository to host the project developed for the Web Development II course, a second-year subject in the Computer Science degree program taught at the University of Maia. Developed by Group 27: Hugo Morais (a026533) and Diogo Sousa (A038560).

## Run the System
To create the project in a new system you need to run the following command:

```bash
docker compose build
```

Docker will pull the MySQL and Node.js images (if our machine does not have it before).

The services can be run on the background with command:
```bash
docker compose up -d
```
after that to login in the API to test you can logging with the following username and password:
```bash
username:teste
password:testepass
```



## Short theme description

<>The goal of this project is to create a web service for managing the availability of books. The system allows for the registration of books, authors, and publishers. 
Additionally, only registered and authenticated users on the platform have access to protected resources of the assets (books/publishers/authors). These resources include (creation/updating/deletion).

## Repository organization
Project Structure
* config/
  * database.js: Contains the database configuration and connection setup.
* controllers/
  * environmentController.js: Manages environment configurations for different stages like development and production.
* docs/
  * openAPI.yaml: Contains the OpenAPI 3.0 specification for your API documentation.
* environment/
  * development.env: Environment variables for the development stage.
  * production.env: Environment variables for the production stage.
* models/
  * autormodel.js: Defines the Sequelize model for the Autor entity.
  * livromodel.js: Defines the Sequelize model for the Livro entity.
  * editoramodel.js: Defines the Sequelize model for the Editora entity.
  * usermodel.js: Defines the Sequelize model for the User entity.
  * index.js: Initializes Sequelize and sets up the models and their associations.
* routes/
  * autor.js: Contains route handlers for Autor CRUD operations.
  * editora.js: Contains route handlers for Editora CRUD operations.
  * livro.js: Contains route handlers for Livro CRUD operations.
* .gitignore: Specifies files and directories to be ignored by Git.
* docker-compose.yaml: Defines Docker services, networks, and volumes for multi-container Docker applications.
* dockerfile: Instructions to build the Docker image for the application.
* dockerfile_mysql: Instructions to build the Docker image for the MySQL database.
* index.js: Entry point for the Express application.
* package.json: Lists the project dependencies and scripts.

## Gallery

![imagem](https://github.com/Hugomorais1990/MomentoAvaliacao01/assets/82054101/98bc474b-1e6f-42e4-a9c6-f366afbd7818)

![imagem](https://github.com/Hugomorais1990/MomentoAvaliacao01/assets/82054101/770cf10b-ec0b-4d1f-a198-eab187080022)

## Technologies

* Javascript (https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript)
* Express.js (https://expressjs.com/) - Framework web para Node.js utilizado para criar APIs RESTful e gerir rotas.
* nodeJS (https://nodejs.org/en/) - Plataforma usada para construção de apps do lado do servidor.
* JSON Web Tokens (JWT) (https://jwt.io/): Método de autenticação utilizado para criar tokens de acesso com informações do utilizador, permitindo a autenticação em APIs REST.
* Basic Authentication: Método de autenticação HTTP usado para autenticar requests HTTP com base nas credenciais do utilizador (username e password) codificadas em Base64.
* Yaml (https://yaml.org/) - Ferramenta para escrever dados estruturados de forma clara e legível.
* MySQL Workbench (https://www.mysql.com/products/workbench/) - Sistema de gestão de base de dados relacional usado para armazenar e gerir dados dos recursos.
* Postman (https://www.postman.com/) - Ferramenta utilizada para testar APIs RESTful durante o desenvolvimento, permitindo enviar solicitações HTTP e visualizar as respostas.
* GitHub (https://github.com/)
* Docker (https://www.docker.com/)


## Frameworks and Libraries
* Express: Usado como o framework web para o servidor Node.js.
* Bcrypt.js: Utilizado para realizar o hash e a comparação de paswords durante o processo de autenticação de utilizadores.
* Dotenv: Usado para carregar variáveis de ambiente de um ficheiro .env.
* Cors: Usado para habilitar o Cross-Origin Resource Sharing (CORS) e permitir pedidos de origens diferentes.
* Body-parser: Usado para analisar os "body requests" HTTP.
* Sequelize: Utilizado como ORM para interagir com a base de dados MySQL.


Report

Please add at least on section (a file) per Chapter. But you can add more.
Project presentation

    Chapter 1: Project presentation

Resources

    Chapter 2: Resources

Product

    Chapter 3: Product

Presentation

    Chapter 4: Presentation

Team
