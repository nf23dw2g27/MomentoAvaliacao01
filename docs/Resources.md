Capítulo 2 : Resources
Nesta API estão presentes 4 recursos utilizados:

### Utilizadores:

* username -> (STRING(255)) nome do utilizador na plataforma;

* password -> (STRING(255)) password do jogador;

* email -> (STRING(255)) e-mail do utilizador;

* telemovel -> (STRING(255)) numero de telemovel do utilizador;

* firstName -> (STRING(255)) primeiro nome do utilizador;

* lastName -> (STRING(255)) segundo nome do utilizador;

### Livros:

* livroId -> (INTEGER) id do livro (incremental);

* titulo -> (STRING(255)) titulo do livro;

* autorId -> (INTEGER) id do autor/a;

* editoraId -> (INTEGER) id da editora;

* disponibilidade -> (BOOLEAN) valor booleano se o livro esta ou não disponivel;

* nPaginas -> (INTEGER) numero de paginas do livro;

* categoria -> (STRING(255)) categoria do livro;

* sumario -> (TEXT) pequeno resumo do livro;

### Editora:

* editoraId -> (INTEGER) id da editora (incremental);

* nome -> (STRING(255)) nome da editora;

* morada -> (STRING(255)) localização da editora;

### Autor/a:

* autorId -> (INTEGER) id do autor/a (incremental);

* nome -> (STRING(255)) nome do autor/a;

* pseudonimo -> (STRING(255)) nome ficticio do autor/a;
