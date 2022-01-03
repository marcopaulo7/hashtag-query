# hashtag-query
![node version](https://img.shields.io/static/v1?label=node&message=v16.13.1&color=blue)


## Instalação
A solução pode ser instalada de duas maneiras. Em sistemas UNIX (Linux/MacOS), basta utilizar os arquivos makefile contidos nos diretorios raiz, para o cliente, e no diretório ./server, para o servidor, utilizando os comandos abaixo no terminal:

- `make setup`: Para instalar as dependencias utilizadas pelos projetos.
- `make build`: Caso deseje realizar uma nova build do projeto em questão.
- `make run`: Para executar a solução.

Para computadores Windows (esse processo também pode ser realizado no Linux/MacOS), basta executar os comandos abaixo, em um cmd/terminal no diretório raiz do projeto para executar o cliente:

`npm install`
`npm start`

E para executar o servidor, é necessário executar os seguintes comandos no diretório ./server: 

`npm install`
`npm run build`
`npm start`

Após executar os dois projetos, a aplicação estará pronta para ser utilizada através da URL [http://localhost:3000/](http://localhost:3000/).


## Ferramentas utilizadas:
- express - Simplifica a implementação da API REST.
- needle - Utilizado para realizar requests HTTP para a API do Twitter no back-end.
- chakra-ui - Bibliotecas de components React.
- axios - Utilizado para realizar requests HTTP do front para o back-end.
- dotenv - Interpreta o arquivo de variaveis de ambiente (.env).
- cors - Utilizado para habilitar requisições em que o local de origem seja diferente do local do server.
- twitter-text - Biblioteca de código aberto criada pelo Twitter com funções de validação 
- react-masonry-css - Biblioteca que provem o moisaco de tweets utilizado na aplicação.