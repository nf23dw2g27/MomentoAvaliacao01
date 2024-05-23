# Capítulo 3 : Produto

## Desenvolvimento

### Express

Esta API foi desenvolvida com recurso ao express, uma framework que atua com a funcionalidade de Web Server do Node.js e que visa adicionar novas características de forma simples, o que faz com que a organização de uma API seja mais simples no que diz respeito aos middlewares e às rotas.

### Docker

A API e o MySql são colocados em containers do Docker, para estes containers conseguirem comunicar entre si, foi criado um dockercompose que vai criar imagens e uma rede interna partilhada pelos dois containers.

## Instalação

Para a instalação e compilação deste projeto é necessário:

* Passo 1: Importar o ficheiro 
**[docker-compose.yaml](https://github.com/nf23dw2g27/MomentoAvaliacao01/blob/main/docker-compose.yaml)**;

* Passo 2: Abrir a linha de comandos (CLI) e entrar no diretório onde se encontra o ficheiro importado anteriormente;

* Passo 3: Executar o seguinte comando **docker compose build**
 
* Passo 4: Executar o seguinte comando **docker compose up -d**;

* Passo 5: importar o ficheiro **openapi.yaml** no postman de forma a que os pedidos sejam efetuados

NOTE: 

* Para fazer o login na API para fazer testes podera ser utilizado as seguintes credenciais (username and password):

username:teste
password:testepass

## Instruções de Utilização

### API

1. Efetuar o pedido de login(GET http://localhost:3000/auth/login) usando as credenciais fornecidas anteriormente no body do pedido ({"username": "teste", "password": testepass"}), que vai retornar um Bearer token para autenticação da API, este token, pode ser inserido na raiz do projeto e os requests (PUT/POST and Delete) vao uitlizar a autenticação do "parent" ou inserido individualmente em casa request. o Token para efeito de teste tem como duração de expiração definida 1 hora. 

2. Se o utilizador não se autenticar, só pode efetuar os pedidos GET da API, em baixo podemos verificar os pedidos
    * GET http://localhost:3000/livro
    * GET http://localhost:3000/livro/:livroId
    * GET http://localhost:3000/autor
    * GET http://localhost:3000/autor/:autorId
    * GET http://localhost:3000/editora
    * GET http://localhost:3000/editora/:editoraId

3. Se o utilizador se autenticar poderá efetuar todos os comandos (POST/GET/PUT/DELETE).
    