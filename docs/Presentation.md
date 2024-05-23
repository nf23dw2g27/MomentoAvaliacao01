
## Detalhes de Implementação

### Objetivos cumpridos:

* Arquitetura de serviços do tipo REST;
* Utilizar 4 verbos (métodos) do protocolo HTTP, para implementação das operações CRUD (do inglês: Criar, Ler, Atualizar e Apagar) sobre os dados;
* Disponibilizar pelo menos 3 recursos diferentes;
* Utilizar uma relação de cardinalidade 1:n entre dois dos recursos;
* Disponibilizar representações de estado dos recursos em JSON;
* Implementar uma camada de Autenticação e Autorização para acesso ao recursos
* Documentar a API com recurso ao formato OpenAPI 3.0;

* Utilização do MySQL como SGBD;
* Utilizar Node.js como servidor aplicacional para implementação da camada de serviços.
* Disponibilizar uma ‘Collection’ para o Postman para consulta dos recursos;
* Disponibilização de configuração para a aplicação multi-container (duas imagens) MySQL + NodeJs;

* Utilizar framework Express para implementação da camada de serviços
* O utilizador autenticado apenas consegue aceder aos seus próprios recursos (em pelo menos um dos recursos);