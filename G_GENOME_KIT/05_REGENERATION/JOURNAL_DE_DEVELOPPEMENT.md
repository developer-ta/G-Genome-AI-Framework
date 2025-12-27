# 📔 Journal de Développement : L'Histoire du Projet RenovÉnergie

> **Intention** : Ce document est la "Boîte Noire" narrative du projet. Il existe pour qu'un nouveau développeur ne dise jamais *"Pourquoi ils ont compliqué les choses comme ça ?"* mais plutôt *"Ah, je comprends quel problème ils ont voulu résoudre"*.

---

## 🕰️ Chapitre 1 : La Genèse (L'Approche Naïve)
**Situation Initiale** :
Le projet a démarré comme une application React/Vite standard. L'objectif était de faire un Dashboard simple pour la rénovation énergétique.
*   **Structure** : Dossiers classiques (`components`, `pages`, `utils`).
*   **Problème Rencontré** : Très vite, la logique métier (calcul des pourcentages de rénovation) s'est mélangée avec la logique d'affichage (Couleurs des graphiques, composants UI). Le code devenait "spaghetti".

---

## 🏗️ Chapitre 2 : Le Tournant "Clean Architecture"
*Date approximative : Mi-Décembre 2025*

**Le Déclencheur** :
Besoin de clarifier le flux de données. "Pourquoi mes données mockées contiennent-elles des codes couleurs hexadécimaux ?"

**La Décision (Architecture)** :
Adoption radicale de la **Clean Architecture** et du **Domain-Driven Design (DDD)**.
*   **Action** : Refonte totale des dossiers.
    *   `domain/` : Les règles pures (Entities).
    *   `infrastructure/` : Les sources de données.
    *   `presentation/` : Le React et le CSS.
*   **Résultat** : Une séparation stricte. Si on change de bibliothèque de graphiques demain, le `domain` ne bouge pas.

---

## ⚔️ Chapitre 3 : La Crise de Croissance (Merge Conflicts)
**L'Incident** :
En voulant pousser cette nouvelle architecture sur le dépôt distant (qui avait une vieille version), nous avons eu des conflits d'historiques massifs.

**La Résolution** :
Stratégie "Force Local". Nous avons décidé que la nouvelle architecture (Locale) prévalait sur l'ancien historique. (Voir `docs/GIT_GUIDE.md`).

---

## 🧬 Chapitre 4 : La Révolution IA (Prompt as DNA)
*Date : 25 Décembre 2025*

**Le Déclencheur** :
Le projet avance, mais l'interaction avec l'IA est redondante. L'IA "oublie" nos règles d'architecture (Clean Arch) et réintroduit du code non-standard.

**La Décision (Process)** :
Nous avons décidé d'industrialiser notre relation avec l'IA. Nous ne codons plus *seuls*, nous "pilotons" une IA.
*   **Action** : Création de l'écosystème `/docs/promptPacks`.
    *   Inventé le concept de **Project DNA** (Le Protocole).
    *   Créé la **Mémoire Externe** (`ValidatedTaskSequences`).
    *   Standardisé les **Commentaires** (`[SYNTAXE]` vs `[RÔLE]`).

---

## 🛰️ Chapitre 5 : La Structuration Binaire & Le Kit de Téléportation
*Date : 26-27 Décembre 2025*

**Le Déclencheur** :
Le risque de "dérive" (Model Drift) et d'amnésie. L'IA finit par ignorer les instructions textuelles simples au bout d'un certain temps.

**La Décision** :
Passage à une architecture de prompt **Binaire (XML + Markdown)**.
*   **Action** : Migration de tous les protocoles vers un format balisé (XML).
*   **Innovation** : Création du `SEED_BOOTSTRAP_PROTOCOL` pour permettre une "téléportation" immédiate de l'intelligence dans un nouveau projet via le `DNA_GENOTYPE`.

---

## 📍 État Actuel (Snapshot)
Aujourd'hui, ce projet est un véritable **Laboratoire de Recherche IA**.

*   **Pour le noyau universel** : Dossier `docs/DNA_GENOTYPE/`.
*   **Pour l'exécution locale** : Dossier `docs/PROJECT_PHENOTYPE/`.
*   **Pour comprendre la philosophie** : `docs/RESEARCH_CENTER/DIALECTIC_RESEARCH_LOG.md`.
*   **Pour démarrer une session** : Lancer le `SEED_BOOTSTRAP_PROTOCOL`.
