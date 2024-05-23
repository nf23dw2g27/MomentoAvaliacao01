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

The goal of this project is to create a web service for managing the availability of books. The system allows for the registration of books, authors, and publishers. 
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

![imagem](https://github.com/nf23dw2g27/MomentoAvaliacao01/blob/main/docs/Images/API%20schematic.png)

## Technologies

* Javascript (https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript) a lightweight interpreted programming language with first-class functions. JavaScript allows you to implement complex features on web pages, making them interactive.

* Express.js (https://expressjs.com/) - Framework web to Node.js used to create APIs RESTful and manage routes.

* nodeJS (https://nodejs.org/en/) - Platform used for building server-side apps.

* JSON Web Tokens (JWT) (https://jwt.io/) - Authentication method used to create access tokens with user information, enabling authentication to REST APIs.

* Basic Authentication - HTTP authentication method used to authenticate HTTP requests based on the user's Base64-encoded credentials (username and password).

* Yaml (https://yaml.org/) - Tool to write structured data in a clear and readable way.

* MySQL Workbench (https://www.mysql.com/products/workbench/) - Relational database management system used to store and manage resource data.

* Postman (https://www.postman.com/) - A tool used to test RESTful APIs during development, allowing you to send HTTP requests and view the responses.

* GitHub (https://github.com/) - A platform that allows developers to create, store, manage, and share their code.

* Docker (https://www.docker.com/) - Is an open-source platform that simplifies the development, deployment, and management of applications using containerization.


## Frameworks and Libraries
* Express: Used as the web framework for the Node.js server.
* Bcrypt.js: Used to hash and compare passwords during the user authentication process.
* Dotenv: Used to load environment variables from an .env file.
* Cors: Used to enable Cross-Origin Resource Sharing (CORS) and allow requests from different origins.
* Body-parser: Used to parse HTTP body requests.
* Sequelize: Used as an ORM to interact with the MySQL database.


Report

Please add at least on section (a file) per Chapter. But you can add more.
Project presentation

    Chapter 1 [Project Presentation](https://github.com/nf23dw2g27/MomentoAvaliacao01/blob/main/docs/ProjectPresentation.md).

Resources

    Chapter 2 [Resources](https://github.com/nf23dw2g27/MomentoAvaliacao01/blob/main/docs/Resources.md).

Product

    Chapter 3: Product

Presentation

    Chapter 4: Presentation

Team

> Hugo Morais [A026533@umaia.pt]

> Diogo Sousa [A038560@umaia.pt]