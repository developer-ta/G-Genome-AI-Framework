# RenovÉnergie ⚡️

Bienvenue sur RenovÉnergie, un tableau de bord interactif pour le suivi de la rénovation énergétique.

## 🎯 Notre Objectif, Notre Mission

-   **Objectif :** Offrir une plateforme claire et intuitive pour visualiser l'état de rénovation énergétique des bâtiments parisiens.
-   **Axes de Présentation :** Notre présentation de données s'articule autour de 3 axes essentiels : le suivi de rénovation des bâtiments analysés, les types de travaux réalisés, et la visualisation des classes énergétiques DPE.
-   **Mission :** Rendre ces données accessibles et intelligibles pour les professionnels, les collectivités et les décideurs.

---

## ✨ Fonctionnalités Clés

### Dashboard de Suivi

-   **Graphiques Interactifs :** Visualisez les données de rénovation (nombre total vs. nombre rénové) pour les logements privés et sociaux.
-   **Données par Arrondissement :** Comparez facilement les performances entre les 20 arrondissements.
-   **Filtre par Année :** Affinez les données en sélectionnant une année spécifique ou en affichant toutes les données cumulées.
-   **Analyse de Volume :** Des graphiques en anneau (donut charts) montrent la répartition du volume des rénovations par arrondissement.

---

## 🛠️ Stack Technique

-   **Frontend :** React avec TypeScript
-   **Visualisation de Données :** [Recharts](https://recharts.org/)
-   **Icônes :** [Lucide React](https://lucide.dev/)
-   **Styling :** CSS pur avec une approche inspirée du Neumorphisme et du Glassmorphisme.

---

## 🚀 Démarrage et Développement

Ce projet est configuré pour un développement rapide. Voici comment le lancer localement, en utilisant **Vite**.

### 1. Prérequis
-   [Node.js](https://nodejs.org/) (v18 ou supérieur)

### 2. Installation
Commencez par cloner le projet sur votre machine :

```bash
git clone <URL_DU_REPOSITORY>
cd <NOM_DU_DOSSIER>
```

**Note importante :** Il n'y a **pas de commande `npm install`** à exécuter. Toutes les dépendances (React, Recharts, etc.) sont chargées directement dans le navigateur via un `importmap` dans le fichier `index.html`. C'est une approche moderne qui simplifie l'environnement de développement.

### 3. Lancer le Projet avec Vite
Ouvrez un terminal à la racine du projet et lancez la commande suivante :

```bash
npx vite
```

Cette commande va :
-   Démarrer un serveur de développement local.
-   Utiliser votre fichier `index.html` comme point d'entrée.
-   Injecter automatiquement les variables d'environnement d'un éventuel fichier `.env`.
-   Ouvrir l'application dans votre navigateur.

### 4. Poursuivre le Développement
Le serveur Vite recharge automatiquement la page lorsque vous modifiez un fichier (`Hot Module Replacement`). Vous pouvez maintenant commencer à développer.

---

## 🏗️ Architecture

Le projet est structuré en suivant les principes de la **Clean Architecture** pour garantir une séparation claire des responsabilités, une meilleure testabilité et une maintenance simplifiée. Cette approche isole le "cœur" de l'application (le métier) des détails d'implémentation (comme l'API ou l'interface utilisateur).

### Structure du Projet

```
/
├── domain/
│   └── models.ts           # Types et modèles centraux
├── application/
│   └── services/           # Logique métier et cas d'usage
├── infrastructure/
│   └── data/               # Sources de données (simulées ou réelles)
└── presentation/
    ├── components/         # Petits composants UI réutilisables (Card)
    ├── hooks/              # Logique d'état pour les vues (useDashboardController)
    ├── layouts/            # Styles CSS pour la mise en page
    ├── pages/              # Composants de pages complètes (DashboardPage)
    └── sections/           # Gros composants de page (Sidebar, Topbar)
```

### Détail des Couches

-   **`domain`**: La couche la plus centrale. Elle est totalement indépendante des autres et contient les modèles de données et les types qui représentent les concepts du métier (ex: `View`, `ChartData`). C'est le cœur de l'application.

-   **`application`**: Gère les cas d'usage de l'application. Elle orchestre les flux de données entre le `domain` et l'`infrastructure`. C'est ici qu'on définit ce que l'application *fait* (ex: `RenovationService` qui prépare les données pour le dashboard).

-   **`infrastructure`**: Gère les sources de données externes et les services techniques. C'est le point de contact avec le "monde extérieur". On y trouve les adaptateurs pour les sources de données (`renovationData.ts`).

-   **`presentation`**: La couche la plus externe, **responsable de tout ce qui est lié à l'interface utilisateur**. Son rôle est d'afficher les informations récupérées via la couche `application` et de capter les interactions de l'utilisateur. Tout le code relatif à l'UI (`pages`, `sections`, `components`, et même les `hooks` qui gèrent l'état de cette UI) se trouve ici.

### Avantages de cette structure

Cette séparation stricte apporte plusieurs avantages majeurs :

1.  **Clarté et Cohésion** : Tout le code de l'interface est regroupé. On sait immédiatement où chercher quand on veut modifier quelque chose de visuel. La logique métier est clairement séparée de l'affichage.
2.  **Encapsulation** : La couche `presentation` devient un "module" autonome. On pourrait théoriquement la remplacer par une autre technologie (Vue, Svelte, etc.) sans jamais toucher aux couches `application` ou `domain`.
3.  **Scalabilité et Maintenabilité** : Le projet reste propre et organisé même s'il grandit. La racine du projet n'est pas polluée par une multitude de dossiers UI, ce qui facilite grandement la maintenance à long terme.