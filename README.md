## Airbnb

### Criação: 31 de maio de 2019
### Atualização: 29 de janeiro de 2020 - 17:09
### Terminado: Não
### Publicado: Não
### Prática : @douglasabnovato

## Desafio do projeto `Clone AirBnB com AdonisJS, React Native e ReactJS`
- uma aplicação web com ReactJS e também uma aplicação mobile com React Native com dados servidos através de uma API REST feita com NodeJS utilizando o framework AdonisJS.</br>
a. Endereço publicado [link para essa aplicação](https://git-scm.com)

### Ferramentas : 

![ReactJS](/images/logo-reactjs.jpg)
![React Native](/images/logo-react-native.png)
![Git](/images/logo-git.png)
![Github](/images/logo-github.png)
![HTML/CSS/Javascript](/images/logo-html-css-js.jpeg)
![VSCode](/images/logo-VSCode.png)
![Yarn](/images/logo-yarn.png)
![Nodejs](/images/nodejs.png)
![Rocketseat](/images/logo-rocketseat.png)

## Terminado a primeira parte do projeto `Clone AirBnB com AdonisJS, React Native e ReactJS`
- Tela de Login
![AirBnB - Clone](/images/tela-1.jpg)
- Tela de Cadastro
![AirBnB - Clone](/images/tela-2.jpg)
>@douglasabnovato

#### Projeto em `React`
- Um Clone AirBnB com AdonisJS, React Native e ReactJS.

- Parte Introdução : reactjs-autenticacao<br/>
:. De `Rocketseat BLOG - Airbnb`.<br/> 
a. instalar o CLI<br/> 
b. criar o projeto `airbnb-web`<br/> 
c. adicionar dependencias `Axios` `PropTypes` `ReactRouter` `StyledComponents` `Font Awesome`<br/>
d. estrutura de pastas
````
src/
 |--- assets/   # Aqui ficará as imagens
 |--- configs/  # Variáveis de configurações
 |--- pages/    # As nossas páginas
 |--- services/ # Configuração de serviços utilizados
 |--- styles/   # Estilos globais
 |--- App.js    # Arquivo que conterá configurações principais do App
 |--- index.js  # Ponto de entrada para execução do nosso App
 |--- routes.js # Arquivo contendo as principais rotas do App
 ````
 e. Serviços no projeto
 1. `services/auth.js` : Um para a autenticação do usuários 
 2. `services/api.js` : Outro para consumir os dados da nossa API feita com o AdonisJS
 f. Rotas : `routes.js`
1. SignIn: Entrar com as credenciais para acessar o sistema.**done**
2. SignUp: Criar uma nova conta para acessar o sistema.**done**
3. App: Área que contém as properties e permite adicionar novas.
4. NotFound: Para rotas desconhecidas.

- Parte 1: Iniciando com AdonisJS: Autenticação JWT e API REST<br/>
:. De `Rocketseat BLOG - Airbnb`.<br/> 
Por Diego Fernandes : https://blog.rocketseat.com.br/adonis-auth-jwt-api-rest/<br/>
Criaremos:
- Autenticação via JWT
- Cadastro de imóveis para aluguel
- Mapa com imóveis próximos (utilizando GPS)
- Upload de fotos dos imóveis (utilizando a câmera no mobile)
1. criar nossa API REST com o AdonisJS<br/> 
- permitir focar na regra de negócio da nossa aplicação sem perder muito tempo com o funcionamento por trás de funcionalidades comuns como manipulação do banco de dados, envio de e-mail, autenticação, etc
a. npm i -g @adonisjs/cli<br/> 
b. adonis new airbnb-server --api-only<br/> 
c. rodar o servidor : `adonis serve --dev`<br/> 
2. Criando API REST com AdonisJS<br/> 
d. PostgreSQL : `npm install pg`<br/> 
e. arquivo .env<br/> 
f. banco de dados sqlite : `npm install sqlite3 --save`
g. `adonis migration:run`<br/> 
h. rodar o servidor : `adonis serve --dev`<br/>
3. Autenticação com JWT<br/> 
i. controller de usuários : adonis make:controller User --type http<br/> 
j. criado arquivo app/Controllers/Http/UserController.js<br/> 
k. configurado routes<br/>
l. Insomnia - é um cliente para testar API’s REST.<br/>
m. insomnia - criarmos o primeiro usuário - CADASTRO<br/>
n. insomnia - acesso ao token JWT, que servirá para validarmos se o usuário está autenticado ou não em nosso app - CADASTRAR<br/>

- Parte 2: Criando CRUD e relações em API REST no AdonisJS<br/>
Criaremos:
- Listagem de imóveis;
- Exibição de um único imóvel com imagens;
- Remoção de imóveis;
- Relacionamento entre usuários e imóveis (um para muitos);
- Relacionamento entre imóveis e imagens (um para muitas);
- utilizando API REST
1. `adonis make:model Property -m -c` : criar todos os arquivos relacionados à manipulação de imóveis
2. adicionar os campos à tabela de imóveisalterando nossa migration
a. user_id (Referência ao usuário que criou o imóvel)<br/>
b. title (Título do imóvel)<br/>
c. address (Endereço completo)<br/>
d. price (Preço da diária)<br/>
e. latitude<br/>
f. longitude<br/>
g. configuramos nossas tabelas no banco de dados com prompts de comando<br/>
h. relação que pode ser “1-N”, “1-1”, “N-N” ou até relacionamentos polimórficos ou mais avançados<br/>
i. Rotas e controllers
. index: Listar todos registros;
. show: Exibir um registro;
. store: Criar novo registro;
. update: Alterar um registro;
. destroy: Remover um registro;
j. A única coisa que você precisa fazer é se autenticar com um usuário<br/>
k. copiar o token JWT <br/>
l. colar na seção environment do Insomnia<br/>
m. operações básicas em um model - CRUD - Create, Read, Update, Detele <br/>

- Parte 3: Upload de imagens e geolocalização no AdonisJS;
1. Criação/edição de imóveis com upload
2. Busca por distância através de GPS

- Parte 4: Iniciando com React Native: Navegação e Autenticação com JWT;
- Parte 5: Instalando o Mapbox e listando imóveis no React Native;
- Parte 6: Instalando a Câmera e realizando o cadastro de Imóveis;
- Parte 7: Listando em um Modal os dados detalhados dos Imóveis;
- Parte 8: Iniciando com ReactJS: Navegação e Autenticação com JWT;
- Parte 9: Instalando o Mapbox e listando os imóveis no ReactJS;
- Parte 10: Utilizando o ModalRoute e fazendo upload de imagens;
- Parte 11: Exibindo informações do imóvel com ModalRoute;

:. Da série de posts “Clone AirBnB com AdonisJS, React Native e ReactJS” : `https://blog.rocketseat.com.br/reactjs-autenticacao/`</br>
Por Higo Ribeiro da Rocketseat