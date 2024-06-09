# Carambar Jokes App

Une mini application web de blagues pour Carambar & co.

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
  npx sequelize-cli db:migrate
  npx sequelize-cli db:seed:all
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

## API Documentation

La documentation de l'API est disponible via Swagger.

### Accéder à la documentation Swagger



### Technologies Utilisées

![node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![sequelize](  https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)

![sqlite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)


### Licence

Ce projet est sous licence MIT.