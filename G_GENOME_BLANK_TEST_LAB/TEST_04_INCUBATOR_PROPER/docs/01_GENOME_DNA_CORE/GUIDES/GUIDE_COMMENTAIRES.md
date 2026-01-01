# 📘 Guide de Commentaires Standardisés (Syntaxe & Rôle)

> **Objectif** : Rendre le code accessible aux débutants et sans ambiguïté pour l'IA.
> **Règle d'Or** : Tout bloc de logique doit expliquer le *QUOI* (Syntaxe) et le *POURQUOI* (Rôle).

---

## 1. La Structure Standard
Pour chaque ligne ou bloc de code significatif, nous utilisons ce format double :

```typescript
// [SYNTAXE] Explication technique de ce que fait la commande JS/TS/Node
// [RÔLE] Explication métier de pourquoi on fait ça dans CE projet
code_complexe();
```

---

## 2. Exemples Concrets (Copy-Paste)

### 📂 Lecture de Fichier (File System)
```typescript
// [SYNTAXE] Utilise 'fs.readFileSync' pour lire le contenu d'un fichier de manière synchrone (bloquante) et le stocke dans 'rawData'.
// [RÔLE] Charge les données brutes de notre "Universal DNA" pour qu'on puisse ensuite les copier dans le nouveau projet.
const rawData = fs.readFileSync(sourcePath, 'utf-8');
```

### 🔄 Remplacement de Texte (String Manipulation)
```typescript
// [SYNTAXE] Appelle la méthode .replace() avec une Regex globale (/g) pour trouver toutes les occurrences de 'OldName'.
// [RÔLE] Met à jour le nom du fichier dans le contenu du protocole pour qu'il corresponde au nom du nouveau projet client.
const updatedContent = content.replace(/OldName/g, 'RenovEnergie');
```

### 🔁 Boucles (Iteration)
```typescript
// [SYNTAXE] Utilise .map() pour transformer chaque élément du tableau 'users' en un nouveau tableau.
// [RÔLE] Convertit nos entités 'User' brutes (base de données) en objets 'UserProfile' sécurisés (sans mot de passe) pour l'affichage.
const profiles = users.map(user => toProfile(user));
```

---

## 3. Pourquoi cette rigueur ?

1.  **Pédagogie** : Un nouveau développeur junior peut apprendre le langage (Syntaxe) ET le projet (Rôle) en même temps.
2.  **Kontexte IA** : L'IA ne devinera pas *pourquoi* vous faites un `.slice(0, 5)`. Si vous lui dites `// [RÔLE] Garde les 5 derniers projets`, elle ne cassera pas cette logique lors d'un refactoring.

---

## 4. Quand l'utiliser ?
*   ❌ Pas sur les imports (`import React...`).
*   ❌ Pas sur les choses évidentes (`const x = 1`).
*   ✅ **OBLIGATOIRE** sur les Regex.
*   ✅ **OBLIGATOIRE** sur les manipulations de fichiers (fs).
*   ✅ **OBLIGATOIRE** sur les logiques métiers complexes (calculs, filtres).
