# 📘 Guide Git : Comprendre la "Fusion Forcée" d'Historiques

Ce document explique pourquoi nous avons rencontré des erreurs Git et comment nous les avons résolues.

## �️‍♂️ L'Analogie du Livre

Imaginez que le projet est un livre.

- **Sur GitHub (Distant)** : Il y avait déjà un livre commencé (Pages 1 à 10).
- **Sur votre PC (Local)** : Vous avez écrit un tout nouveau livre (Pages 1 à 5), mais sans jamais avoir lu celui qui était sur GitHub.

Le problème survient quand vous essayez d'envoyer votre livre sur GitHub.

---

## 🚫 Problème N°1 : "Refus de Push" (Le manque d'historique)

Quand vous avez fait `git push`, GitHub a bloqué l'opération.

> **GitHub dit :** _"Attends ! Tu essaies d'ajouter la suite de l'histoire, mais tu n'as même pas lu le début (les pages 1 à 10) qui est chez moi. Si je te laisse faire, on va perdre le début de l'histoire !"_

**La Solution : `git pull`**
Nous devons d'abord récupérer ("télécharger") ce début d'histoire manquant pour le mettre dans notre livre local.

---

## 💥 Problème N°2 : "Histoires Incompatibles" (Conflit)

Normalement, `git pull` fusionne les textes. Mais ici, c'était spécial.

> **Git dit :** _"D'accord, je télécharge l'historique distant. Mais attends... Ta page 1 (ton Clean Architecture) n'a RIEN A VOIR avec la page 1 qui était sur GitHub (ancien projet) ! Je ne peux pas mélanger ça automatiquement, c'est deux histoires différentes !"_

C'est pour ça qu'on a dû utiliser le drapeau `--allow-unrelated-histories` (autoriser les histoires non liées). Mais même avec ça, Git a paniqué : **CONFLIT**. Il y avait deux versions de la vérité pour les mêmes fichiers.

---

## 🛠️ La Solution Finale : "C'est moi le Chef" (`--ours`)

Face à ce conflit (deux versions incompatibles), il fallait trancher. Nous avons décidé que **votre nouvelle architecture (Locale)** était la bonne version à garder.

**La commande décisive :**

```bash
git checkout --ours .
```

**Traduction :** _"Git, pour tous les conflits (.), ne cherche pas à comprendre. Garde MON livre à moi (`--ours` / la version locale) et jette la page qui venait du serveur."_

Ensuite, nous avons simplement validé (`commit`) ce choix. Le résultat final sur GitHub contient maintenant l'historique complet (pour la traçabilité) MAIS le contenu est bien celui de votre nouvelle architecture propre.

---

## 🔍 Zoom sur les Conflits (Pour les Débutants)

### C'est quoi un conflit ?

Un conflit arrive quand Git ne sait pas choisir entre deux modifications.
C'est comme si **deux personnes** (Moi sur mon PC, et mon collègue "Distant" sur GitHub) avaient modifié **la même phrase** sur la **même page** du livre, mais de façon différente.

- Moi j'ai écrit : _"Le chat est noir."_
- GitHub a écrit : _"Le chat est blanc."_

Quand on essaie de fusionner, Git s'arrête et demande : **"Lequel a raison ?"**

### A quoi ressemble le "Code du Conflit" ?

Quand un conflit éclate, Git modifie physiquement votre fichier pour vous montrer les deux versions. Il utilise des marqueurs spéciaux :

```
<<<<<<< HEAD
Le chat est noir.  <-- (VERSION ACTUELLE / LOCALE)
=======
Le chat est blanc. <-- (VERSION VENANT D'AILLEURS / DISTANTE)
>>>>>>> origin/main
```

- `<<<<<<< HEAD` : Début de **votre** changement.
- `=======` : La frontière qui sépare les deux versions.
- `>>>>>>> ...` : Fin du changement de l'autre (GitHub).

### Comment régler un conflit manuellement ?

Si on n'utilise pas la méthode brutale (`--ours`), on doit régler ça à la main :

1.  Ouvrir le fichier qui a le conflit.
2.  Repérer les marqueurs (`<<<<<<<`, `=======`, `>>>>>>>`).
3.  **Choisir** le texte qu'on veut garder (ou mélanger les deux).
4.  **Supprimer** les lignes des marqueurs (Git ne les enlève pas tout seul !).
5.  Sauvegarder le fichier.
6.  Faire `git add <fichier>` pour dire à Git "C'est bon, j'ai choisi".

---

### 💡 En Résumé : Les 3 voies de la résolution

Vous avez tout à fait raison sur l'analyse.
Un conflit n'arrive **QUE** si un fichier portant le **même nom** a été **modifié** des deux côtés.

Face à ces deux versions qui s'affrontent, vous avez **3 options possibles** :

1.  **Choisir un vainqueur** : Vous gardez uniquement la version A ou uniquement la version B.
2.  **Mélanger (Fusionner)** : Vous combinez les deux bouts de code pour créer une version finale qui prend le meilleur des deux mondes.
3.  **Tout supprimer** : Si aucune des deux versions ne vous convient, vous effacez tout le bloc conflictuels.

_Note : Cela peut arriver entre votre PC et GitHub (Distant), mais aussi juste sur votre PC si vous travaillez sur deux branches différentes (Local)._

---

## 🌳 Les Branches : Travailler en Équipe (Workflow Entreprise)

Vous avez demandé comment font plusieurs développeurs pour travailler sans tout casser. La réponse est : **Les Branches**.

### 1. C'est quoi une Branche ? (L'analogie du "Brouillon")

Imaginez que `main` (ou `master`) est le **Livre Officiel**, imprimé et vendu en librairie. Pas question d'écrire des ratures dessus !

Quand un développeur doit ajouter une fonctionnalité (ex: une page de contact) :

1.  Il ne touche pas au Livre Officiel.
2.  Il fait une **photocopie** du livre à l'instant T.
3.  Il travaille sur sa photocopie (c'est ça, une **Branche**). Il peut raturer, déchirer des pages, faire des erreurs : cela n'impacte pas le Livre Officiel utilisé par les clients.

### 2. Comment ça marche en société ? (Le scénario réaliste)

Vous avez très bien deviné : on ne jette pas tout directement sur la branche principale (`main`). Souvent, on utilise une **branche intermédiaire** (souvent appelée `develop` ou `staging`).

Voici le scénario avec 3 développeurs (Alice, Bob, Charlie) :

1.  **Chacun sa branche (L'isolement)**
    - Alice travaille sur `feature/login`
    - Bob travaille sur `feature/panier`
    - Charlie travaille sur `feature/admin`
    - _(Chacun est chez soi, personne ne se gêne)._

2.  **Le Rassemblement (Merge vers `develop`)**
    Quand ils ont fini, ils ne vont pas sur `main`. Ils envoient (fusionnent) leur travail sur la branche **`develop`**.
    - C'est ça le "nouveau branche" dont vous parliez : une branche qui sert à **réunir** tout le monde.
    - **Analogie :** C'est comme coller les chapitres d'Alice et Bob pour faire un "Brouillon Complet" avant l'impression.

3.  **La Vérification (Test)**
    On teste cette branche `develop` qui contient le mélange des 3 travaux. Si Alice a cassé le code de Bob, on le voit ICI, sans casser le site officiel (`main`).

4.  **La Mise en Production (Merge final)**
    Une fois que `develop` est validée (tout le monde cohabite bien), on fusionne `develop` vers **`main`**.
    - C'est là que le résultat est publié officiellement.

### 3. Résumé pour le débutant

- **`main`** : ⛔ **Interdit de toucher**. C'est le produit fini.
- **`develop`** : 🤝 **Le point de rassemblement**. C'est là qu'on fusionne les travaux des développeurs pour tester.
- **`feature/ma-tache`** : 🛠️ **Mon espace de travail**. Je crée cette branche pour travailler tranquille.

### 3. Résumé pour le débutant

- **`main`** : C'est sacré. C'est la version qui marche. On ne code pas directement dessus.
- **Branches** : C'est là où on code. Une branche par fonctionnalité.
- **Merge (Fusion)** : C'est le moment où on valide le travail pour l'intégrer au projet commun.
