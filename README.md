# RenovÉnergie ⚡️

Bienvenue sur RenovÉnergie, un tableau de bord interactif pour le suivi de la rénovation énergétique, combiné à un studio de design innovant assisté par l'IA de Google.

## 🎯 Objectif du Projet

Ce projet a deux objectifs principaux :

1.  **Visualiser les Données :** Offrir une vue claire et détaillée de l'avancement des rénovations énergétiques (logements privés et sociaux) à travers différents arrondissements, avec des filtres temporels.
2.  **Inspirer et Prototyper :** Permettre aux utilisateurs de transformer et de visualiser des modifications sur des photos de bâtiments grâce à un studio de design propulsé par l'IA, facilitant ainsi la prise de décision et la projection.

---

## ✨ Fonctionnalités Clés

### 1. Dashboard de Suivi

-   **Graphiques Interactifs :** Visualisez les données de rénovation (nombre total vs. nombre rénové) pour les logements privés et sociaux.
-   **Données par Arrondissement :** Comparez facilement les performances entre les 20 arrondissements.
-   **Filtre par Année :** Affinez les données en sélectionnant une année spécifique ou en affichant toutes les données cumulées.
-   **Analyse de Volume :** Des graphiques en anneau (donut charts) montrent la répartition du volume des rénovations par arrondissement.

### 2. Studio IA (Nano Banana)

-   **Édition d'Image par IA :** Uploadez une photo d'un bâtiment.
-   **Prompts Textuels :** Donnez des instructions en langage naturel (ex: "ajoute une isolation extérieure en bois", "mets des panneaux solaires sur le toit", "change les fenêtres").
-   **Génération Instantanée :** Le modèle **Gemini 2.5 Flash Image** génère une nouvelle version de l'image en appliquant les modifications demandées.
-   **Téléchargement :** Sauvegardez le résultat pour vos présentations ou vos dossiers.

---

## 🛠️ Stack Technique

-   **Frontend :** React avec TypeScript
-   **API IA :** [Google Gemini API (@google/genai)](https://ai.google.dev/)
-   **Visualisation de Données :** [Recharts](https://recharts.org/)
-   **Icônes :** [Lucide React](https://lucide.dev/)
-   **Styling :** CSS pur avec une approche inspirée du Neumorphisme et du Glassmorphisme.

---

## 🚀 Démarrage et Développement

Ce projet est configuré pour un développement rapide. Voici comment le lancer localement, en utilisant **Vite** comme vous le préférez.

### 1. Prérequis
-   [Node.js](https://nodejs.org/) (v18 ou supérieur)
-   Une clé API pour l'API Google Gemini, disponible depuis [Google AI Studio](https://aistudio.google.com/).

### 2. Installation
Commencez par cloner le projet sur votre machine :

```bash
git clone <URL_DU_REPOSITORY>
cd <NOM_DU_DOSSIER>
```

**Note importante :** Il n'y a **pas de commande `npm install`** à exécuter. Toutes les dépendances (React, Recharts, etc.) sont chargées directement dans le navigateur via un `importmap` dans le fichier `index.html`. C'est une approche moderne qui simplifie l'environnement de développement.

### 3. Configuration de la Clé API
Pour que le Studio IA puisse fonctionner, vous devez fournir votre clé API Gemini :

1.  Créez un fichier nommé `.env` à la racine du projet.
2.  Ajoutez-y la ligne suivante en remplaçant `VOTRE_CLÉ_API_ICI` par votre clé personnelle :

    ```
    API_KEY=VOTRE_CLÉ_API_ICI
    ```
    
Le fichier `.env` est ignoré par Git (`.gitignore`), donc votre clé restera privée.

### 4. Lancer le Projet avec Vite
Ouvrez un terminal à la racine du projet et lancez la commande suivante :

```bash
npx vite
```

Cette commande va :
-   Démarrer un serveur de développement local.
-   Utiliser votre fichier `index.html` comme point d'entrée.
-   Injecter automatiquement les variables d'environnement de votre fichier `.env`.
-   Ouvrir l'application dans votre navigateur.

### 5. Poursuivre le Développement
Le serveur Vite recharge automatiquement la page lorsque vous modifiez un fichier (`Hot Module Replacement`). Vous pouvez maintenant commencer à développer :

-   **Pour modifier une page**, rendez-vous dans `presentation/pages/`.
-   **Pour ajuster un composant**, cherchez dans `presentation/components/` ou `presentation/sections/`.
-   **Pour changer la logique des données**, explorez les fichiers dans `application/services/` et `infrastructure/data/`.

---

## 🏗️ Architecture

Le projet est structuré en suivant les principes de la **Clean Architecture** pour garantir une séparation claire des responsabilités, une meilleure testabilité et une maintenance simplifiée.

-   **`domain`**: Contient les modèles de données et les types principaux (le cœur du métier).
-   **`application`**: Gère la logique et les cas d'usage (ex: récupérer les données pour le dashboard).
-   **`infrastructure`**: Gère les sources de données externes et les services (API Gemini, données simulées).
-   **`presentation`**: Contient tous les composants React, les hooks et les styles qui constituent l'interface utilisateur.
