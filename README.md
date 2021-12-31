# hashtag-query

## Instalação

Para a solução ser utilizada, é necessário iniciar o server, localizado no diretório ./server. Com o terminal/cmd neste diretório, basta executar os comandos abaixo:

`npm install`
`npm start`

Após o start o servidor estara executando e pronto para receber requisições. 
Com isso, em outro terminal/cmd, basta executar novamente os mesmos comandos acima no diretório raiz para realizar a instalação do front-end.
Após o start na raiz do diretório a aplicação estará pronta para ser utilizada através da URL informada no terminal/cmd.

## Ferramentas utilizadas:
- express - Simplifica a implementação da API REST.
- needle - Utilizado para realizar requests HTTP para a API do Twitter no back-end.
- chakra-ui - Bibliotecas de components React.
- axios - Utilizado para realizar requests HTTP do front para o back-end.
- dotenv - Interpreta o arquivo de variaveis de ambiente (.env).
- cors - Utilizado para habilitar requisições em que o local de origem seja diferente do local do server.
- twitter-text - Biblioteca de código aberto criada pelo Twitter com funções de validação 
- react-masonry-css - Biblioteca que provem o moisaco de tweets utilizado na aplicação.