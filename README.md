# Vue Rest TS
Cliente Vue.js escrito en TypeSript que consume una API REST. Un CRUD en toda regla a motivo de ejemplo. Despliegue con Docker y Electron. 

[![Vue Ready](https://img.shields.io/badge/Vue.js-%20Ready-%2342b983)](https://es.vuejs.org/)
[![NodeJS](https://img.shields.io/badge/NodeJS-Ready-83BA63)](https://nodejs.org/es/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6)](https://www.typescriptlang.org/)
[![JS Style](https://img.shields.io/badge/JS%20Style-AirBnB-ff69b4)](https://airbnb.io/javascript)
[![Licence](https://img.shields.io/github/license/joseluisgs/todo-native-script)](./LICENSE)
![GitHub](https://img.shields.io/github/last-commit/joseluisgs/vue-rest-ts)

- [Vue Rest TS](#vue-rest-ts)
  - [Sobre el proyecto](#sobre-el-proyecto)
  - [Despliegue](#despliegue)
    - [Docker](#docker)
      - [Docker Compose](#docker-compose)
      - [Docker Hub](#docker-hub)
    - [Electron](#electron)
      - [Development Server](#development-server)
      - [Build App](#build-app)
  - [Project setup](#project-setup)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Lints and fixes files](#lints-and-fixes-files)
    - [Customize configuration](#customize-configuration)
  - [API Rest](#api-rest)
  - [Autor](#autor)
  - [Licencia](#licencia)
  - [Agradecimientos](#agradecimientos)

## Sobre el proyecto
El proyecto consiste en hacer un cliente de una API REST en Vue.js, usando TypeScript con el objetivo de completar la formación del grupo de trabajo. Como hoja de estilos se ha usado Bulma. Este cliente consume una [API REST ficticia](https://jsonplaceholder.typicode.com/users) realizando un CRUD. El despliegue está realizado con Docker y Electron (multiplataforma). Puedes ver un ejemplo de ejecución y despliegue en [GitHun Pages](https://joseluisgs.github.io/vue-rest-ts/).

![image01](./images/image01.png)

## Despliegue
### Docker
Esta proyecto se puede desplegar con Docker si te gusta ya sea a través de su Dockerfile o a otraves de [Docker Hub](https://hub.docker.com/r/joseluisgs/vue-rest-ts), para ello:
```bash
- docker build -t joseluisgs/vue-rest-ts .
- docker run -it -p 8000:8000 --rm --name vue-rest-ts-client joseluisgs/vue-rest-ts
```
#### Docker Compose
```bash
- docker-compose up -d
```
#### Docker Hub
Disponible en: https://hub.docker.com/r/joseluisgs/vue-rest-ts

### Electron
Se ha implementado el despliegue multiplataforma con Electron.

#### Development Server
```
npm run electron:serve
```
#### Build App
```
npm run electron:build
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## API Rest
La [API REST ficticia](https://jsonplaceholder.typicode.com/users) puede consultarse y consumirse con el fichero [Users](./thunder-collection_Users.json). Que se puede usar con la extensión de VS Code [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client).

## Autor

Codificado con :sparkling_heart: por [José Luis González Sánchez](https://twitter.com/joseluisgonsan)

[![Twitter](https://img.shields.io/twitter/follow/joseluisgonsan?style=social)](https://twitter.com/joseluisgonsan)
[![GitHub](https://img.shields.io/github/followers/joseluisgs?style=social)](https://github.com/joseluisgs)

## Licencia

Este proyecto esta licenciado bajo licencia **MIT**, si desea saber más, visite el fichero
[LICENSE](./LICENSE) para su uso docente y educativo.

## Agradecimientos
Proyecto basado en parte de los ejemplos de [Neoguias.com](https://www.neoguias.com/tutorial-rest-vue/)
