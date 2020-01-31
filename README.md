## Airbnb

### Criação: 31 de maio de 2019
### Atualização: 29 de janeiro de 2020 - 17:09
### Terminado: Não
### Publicado: Não
### Prática : @douglasabnovato

## Desafio do projeto `Airbnb em React Native e ReactJS`
- uma aplicação web com ReactJS e também uma aplicação mobile com React Native com dados servidos através de uma API REST feita com NodeJS utilizando o framework AdonisJS.</br>

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

## Terminado a versão web do projeto em `ReactJS`
- Tela de Login
![AirBnB - Clone](/images/tela-1.jpg)
- Tela de Cadastro
![AirBnB - Clone](/images/tela-2.jpg)
>@douglasabnovato

#### Projeto em `Um Clone AirBnB com AdonisJS, React Native e ReactJS`
- Parte 1: Iniciando com AdonisJS: Autenticação JWT e API REST<br/>
Criaremos:
. Autenticação via JWT<br/>
. Cadastro de imóveis para aluguel<br/>
. Mapa com imóveis próximos (utilizando GPS)<br/>
. Upload de fotos dos imóveis (utilizando a câmera no mobile)<br/>

1. iniciar o AdonisJS<br/> 
a. instalar o CLI  `npm i -g @adonisjs/cli`<br/> 
b. adonis new airbnb-server --api-only<br/> 
c. rodar o servidor : `adonis serve --dev`<br/> 
d. acessar : `http://localhost:3333`<br/>

2. Criando API REST com AdonisJS<br/> 
d. PostgreSQL : `npm install pg`<br/> 
e. arquivo .env<br/> 
f. banco de dados sqlite : `npm install sqlite3 --save`
g. executar as migrations do nosso projeto em nossa nova base de dados : `adonis migration:run`<br/> 
h. rodar o servidor : `adonis serve --dev`<br/>

3. Autenticação com JWT<br/> 
i. criado arquivo app/Controllers/Http/UserController.js : `adonis make:controller User --type http`<br/> 
j. criado arquivo app/Controllers/Http/SessionController.js : `adonis make:controller Session --type http`<br/> 
k. configurado `routes.js`<br/>
l. insomnia : Cadastrar (novo users) e Entrar (nova session)<br/>

- Parte 2: Criando CRUD e relações em API REST no AdonisJS<br/>
Criaremos:
. Listagem de imóveis;<br/>
. Exibição de um único imóvel com imagens;<br/>
. Remoção de imóveis;<br/>
. Relacionamento entre usuários e imóveis (um para muitos);<br/>
. Relacionamento entre imóveis e imagens (um para muitas);<br/>
. utilizando API REST<br/>

1. Criando models e migrations : `adonis make:model Property -m -c` 

2. adicionar os campos à tabela de imóveis alterando nossa migration
a. user_id (Referência ao usuário que criou o imóvel)<br/>
b. title (Título do imóvel)<br/>
c. address (Endereço completo)<br/>
d. price (Preço da diária)<br/>
e. latitude<br/>
f. longitude<br/>
g. configuramos nossas tabelas no bd : `adonis migration:run`<br/>
h. relacionamento “1-N” : `adonis make:model Image -m`<br/>

3. Relacionamentos no AdonisJS
a. imóvel sempre pertence a um usuário 

4. controller de imóvel
. index: Listar todos registros<br/>
. show: Exibir um registro<br/>
. store: Criar novo registro<br/>
. update: Alterar um registro<br/>
. destroy: Remover um registro<br/>

5. Configurar o Insomnia<br/>

6. criar o CRUD - Create, Read, Update, Detele <br/>

- Parte 3: Upload de imagens e geolocalização no AdonisJS
. Geolocalização<br/>
. Query Scope<br/>
. Camel Case  <br/>
. Haversine - cálculo naval de distância<br/>
a. Configurando controller<br/>
b. Criação/edição de imóveis<br/>
c. Upload de imagens no AdonisJS<br/>

- Parte 4: Iniciando com React Native: Navegação e Autenticação com JWT;
. instalar o CLI : npm i -g react-native-cli<br/>
. criar um novo projeto para aplicação React Native : react-native init AirBnbApp<br/>
. Instale o Chocolatey<br/>
. Configurando SDK<br/>
. Configurando Emulador<br/>

- Parte 5: Instalando o Mapbox e listando imóveis no React Native;
- Parte 6: Instalando a Câmera e realizando o cadastro de Imóveis;
- Parte 7: Listando em um Modal os dados detalhados dos Imóveis;
- Parte 8: Iniciando com ReactJS: Navegação e Autenticação com JWT;
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
- Parte 9: Instalando o Mapbox e listando os imóveis no ReactJS;
- Parte 10: Utilizando o ModalRoute e fazendo upload de imagens;
- Parte 11: Exibindo informações do imóvel com ModalRoute;

:. Da série de posts “Clone AirBnB com AdonisJS, React Native e ReactJS” : `https://blog.rocketseat.com.br/reactjs-autenticacao/`</br>
Por Higo Ribeiro da Rocketseat