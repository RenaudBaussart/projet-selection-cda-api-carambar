# Carambar Jokes App

Une mini application web de blagues pour Carambar & co.

## Table des matières
1. [Installation](#installation)
2. [Deploiement](#déploiement)
3. [Api](#api-documentation)
4. [Accès aux différentes parties de l'API](#accéder-au-différentes-parties-de-lapi)
5. [Technologies utilisées](#technologies-utilisées)
6. [Licence](#licence)

## Installation 

1. Clonez le dépôt : 
  ```bash
  git clone https://github.com/RenaudBaussart/projet-selection-cda-api-carambar
  ```

  ```bash
  cd projet-selection-cda-api-carambar
  ```

2. Installez les dépendances :

  ```bash
  pnpm install
  ```

3. Configurez la base de données :

  ```bash
  pnpx sequelize-cli db:migrate
  ```

  ```bash
  pnpx sequelize-cli db:seed:all
  ```

4. 
- Démarrez le serveur avec node:

  ```bash
  node server.js
  ```

- Démarrez le serveur avec nodemon :

  ```bash
  nodemon server.js
  ```
  ou
  ```bash
  pmpn start
  ```

5. Accéder à l'application :
  
  ```bash
  http://localhost:3000
  ```

## Déploiement
L'application est déployée sur Render. Pour déployer, poussez simplement les modifications sur le dépôt GitHub connecté à Render.

## API Documentation

La documentation de l'API est disponible via Swagger.

### Accéder au différentes parties de l'API

[GitHub Pages](https://renaudbaussart.github.io/projet-selection-cda-api-carambar/)

[Documentation swagger](https://projet-selection-cda-api-carambar.onrender.com/api-docs/)


### Technologies Utilisées

![node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![sequelize](  https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)

![sqlite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

### Licence

Ce projet est sous licence MIT.

[revenir en haut](#table-des-matières)