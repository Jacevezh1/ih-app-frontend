<p align="center">  <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://o.remove.bg/downloads/a2bcbb23-2f2e-4dad-a07b-4f16d152d051/picture-180641674-removebg-preview.png" alt="bootstrap" width="120" height="120"/> </a>

<h1 align="center">Hi 👋, we are The Sauce Project</h1>
<h3 align="center">A platform to sell salsas with other people that have the same passion as you about food...</h3>

<br>

<hr>

# Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Instalación** para conocer como desplegar el proyecto.

<br>

### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
-Fork this repo.
-Then clone this repo.
```

<br>

### Instalación 🔧

To run our application, you have to install all of its dependencies. So run the following command:

In your terminal run:

```
$ npm install
```

<br>
<hr>

# Deploy Frontend📦

<h3 style="color: purple;"> Netlify: </h3>

Manages app deployments with Git, the popular version control system. You definitely don’t need to be a Git expert to deploy code to Netlify, but it’s helpful to learn the basics.

```

-Prerequisites:

Install Git and the Netlify CLI or connect your GitHub repository with Netlify.


-Tracking your app in Git:

Before you can deploy your app to Netlify, you need to initialize a local Git repository and commit your application code to it.


-Creating a Netlify remote:

Git remotes are versions of your repository that live on other servers. You deploy your app by pushing its code to a special Heroku-hosted remote that’s associated with your app.

Netlify is an all-in-one platform for automating modern web projects. Replace your hosting infrastructure, continuous integration, and deployment pipeline with a single workflow. Integrate dynamic functionality like serverless functions, user authentication, and form handling as your projects grow.


-For a new Netlify app:

For repositories stored on GitHub.com, you can use Netlify CLI to connect your repository by running the following command from your local repository:

```
$ netlify init

```

For more info go to: https://docs.netlify.com/


-Deploying code:

    a) To deploy your app to Netlify, you typically use the git push command to push the code from your local repository’s master or main branch to your Netlify remote.



```

<br>
<hr>

## Versionado 📌

We used [Git](https://git-scm.com/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio].

<hr>
<br>

## Construido con 🛠️

<h3 align="left">Languages and Tools:</h3>
<br>
<p align="left">  <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> </p>
<a href="https://es.reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>

<br>
<hr>

## Autor ✒️

- **Javier** - _Founder & developer_ - [JavierHerrera](#fulanito-de-tal)

<br>
<hr>

# How does our project work?



## a. Estructura General
```

- Realizar la funcionalidad de cada ruta con su respectivo controller 

- Creacion de routes / vista, de cada elemento que compone nuestra pagina

- Integracion de axios para peticion a Apis.

- Integracion de rutas privadas y publicas.

- Verficar sesión en navegador (Tokens) y MongoDB (session).

-Instalacion de dependencias (Package.json)

-Componentes para usuario, Layout, Product.

-Rutas y componentes centralizados en el Router.

-Variables de entorno para conectar Back-end

```

## b. Dependencias
    
    -devDependencies
        - tailwindcss
        - postcss
        - autoprefixer
    - Axios
    - React-router-dom

<br>




## e. Models 
```
  1.  User.
 
   2. Products.
   
```

<br>


## f. Contextos

```
a) Validacion de rutas privadas y publicas dependiendo estado del usuario.

b) Validaciones en formularios (Crear, Editar)

c) Global State, Initial State, para proveer de informacion.

```


<br>

## g. Sessions

```

a) Configuracion basica de la sessiones:

  -Tokens

  -Verificacion de Tokens

```

<br>


## h. CRUD

```

Desarrollo completo del CRUD para los productos y usuarios.

a) Create

b) Read

c) Update

d) Delete

```




<br>
<hr>



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


