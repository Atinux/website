<h1 align="center">StrasbourgJS/website</h1>

<p align="center">
  <strong>StrasbourgJS est un meetup qui parle de toutes les facettes du JavaScript.</strong>
</p>

<p align="center">
  <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/licence-MIT-blue.svg" alt="Licence MIT"/></a>
  <img src="https://github.com/StrasbourgJS/website/workflows/Node.js%20CI/badge.svg" alt="Node.js CI" />
  <br/> <br/>
  <img src="./.github/images/StrasbourgJS.jpg" alt="StrasbourgJS" />
</p>

## 📜 À propos

Communauté JavaScript à Strasbourg.

## ⚙️ Utilisation

### Prérequis

- [Node.js](https://nodejs.org/) >= 14
- [npm](https://www.npmjs.com/) >= 6

### Installation

```sh
# Clone le repository
git clone https://github.com/StrasbourgJS/website.git

# Aller à la racine du projet
cd website

# Installe les dépendences
npm install
```

### Environnement de développement

#### Avec [docker](https://www.docker.com/)

```sh
# Configure et exécute tous les services pour vous
docker-compose up --build
```

**Services démarrés :**

- website : `http://localhost:3000`

#### Sans docker

```sh
# Démarrez le serveur website (http://localhost:3000)
npm run dev
```

## 💡 Contribution

N'importe qui peut aider à améliorer le projet, soumettre une demande de fonctionnalité, un rapport de bug ou même corriger une simple faute d'orthographe.

Les étapes pour contribuer se trouvent dans le fichier [CONTRIBUTING.md](./.github/CONTRIBUTING.md).

## 📄 License

[MIT](./LICENSE)
