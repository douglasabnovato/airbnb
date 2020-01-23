## Airbnb

### Criação: 31 de maio de 2019
### Atualização: 23 de janeiro de 2020 - 12:46
### Terminado: Não
### Publicado: https://douglasabnovato.github.io
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
Por Diego Fernandes : https://blog.rocketseat.com.br/adonis-auth-jwt-api-rest/
1. AdonisJS<br/> 
a. npm i -g @adonisjs/cli<br/> 
b. adonis new airbnb-server --api-only<br/> 
c. adonis serve --dev<br/> 
2. Criando API REST com AdonisJS<br/> 
d. PostgreSQL<br/> 
e. npm install pg<br/> 
f. arquivo .env<br/> 
g. adonis migration:run<br/> 
3. Autenticação com JWT<br/> 
h. controller de usuários : adonis make:controller User --type http<br/> 
i. criado arquivo app/Controllers/Http/UserController.js<br/> 
j. configurado routes<br/>
k. testar : insomnia : cliente para testar API’s REST : erro<br/>

- Parte 2: Criando CRUD e relações em API REST no AdonisJS;
- Parte 3: Upload de imagens e geolocalização no AdonisJS;
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