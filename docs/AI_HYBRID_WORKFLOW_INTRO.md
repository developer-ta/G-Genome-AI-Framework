# 🤝 Workflow de Développement Hybride : L'Ère de l'IA Assistée

> **Lecture Obligatoire pour toute l'équipe**
> Ce document explique *pourquoi* et *comment* nous codons désormais en binôme avec l'Intelligence Artificielle chez RenovÉnergie.

---

## 1. Le Changement de Paradigme : De Codeur à Architecte
L'arrivée de l'IA ne remplace pas le développeur, **elle change son métier**.
*   **Avant** : 80% écriture de code, 20% conception.
*   **Maintenant** : 40% conception, 20% prompting, 40% review & validation.

⚠️ **Le piège** : Croire que l'IA est un "Expert Autonome".
✅ **La réalité** : L'IA est un **"Exécutant Très Rapide mais Étourdi"**. Elle a besoin de rails solides pour ne pas dérailler. C'est votre rôle de poser ces rails.

---

## 2. Le Cycle de Vie "RenovÉnergie" (Détaillé)
Voici comment nos outils s'imbriquent pour former un "Starter Kit" autonome.

### 🏁 Étape 0 : L'Initialisation (BOOTSTRAP)
**Action** : L'IA doit lire le fichier de configuration maître.
**Outil** : **`docs/DNA_GENOTYPE/v1.0/SEED_BOOTSTRAP_PROTOCOL.md`**
**Pourquoi ?** : C'est la "Téléportation" de l'intelligence. Ce fichier guide l'IA pas à pas pour absorber le noyau universel, la mémoire du projet, et le cahier des charges.

### Phase 1 : L'Intention (100% Humain)
*   **Action** : Vous définissez le besoin fonctionnel.
*   **Outil** : Votre cerveau + Cahier des charges.
*   **Défi** : Si votre idée est floue, le code sera buggé (" Garbage In, Garbage Out ").

### Phase 2 : La Traduction (Humain → IA)
*   **Action** : Transformer le besoin en instructions strictes.
*   **Outil** : **`docs/DNA_GENOTYPE/v1.0/PromptRuler_Workflow.md`**
*   **Pourquoi ?** : Pour éviter que chacun parle "son propre langage" à l'IA. On utilise des templates standardisés pour garantir le résultat.

### Phase 3 : L'Exécution Guidée (IA)
*   **Action** : L'IA génère le code.
*   **Outil** : **`docs/PROJECT_PHENOTYPE/FrontendPromptProtocolPackDNA_v1.1.md`**
*   **Fonctionnement** : L'IA lit ce fichier ("Le Cerveau du Projet") *avant* d'écrire une seule ligne. Elle y trouve nos règles (Pas de `any`, CSS Modules, etc.). Sans ce fichier, l'IA coderait "à la moyenne d'internet", pas "selon nos standards".

### Phase 4 : La Review & Validation (Humain)
*   **Action** : Vous relisez le code. Vous ne faites **jamais** confiance aveuglément.
*   **Checklist** :
    *   Le code compile-t-il ?
    *   Les types TypeScript sont-ils stricts ?
    *   L'IA a-t-elle halluciné des librairies qu'on n'utilise pas ?

### Phase 5 : La Capitalisation (Boucle de Retour)
*   **Action** : Si vous avez résolu un problème complexe, on ne doit pas perdre cette information.
*   **Outil** : **`docs/PROJECT_PHENOTYPE/ValidatedTaskSequences.md`**
*   **Concept** : On "sauvegarde la partie". La prochaine fois, l'IA lira ce fichier et saura déjà comment résoudre ce problème spécifique.

---

## 3. Les Pièges Fréquents (et comment on les évite)

| Problème Rencontré | Cause Racine | Notre Solution Interne |
| :--- | :--- | :--- |
| **"L'IA a tout cassé ailleurs"** | Manque de contexte global ou d'isolation | Le **Protocol** impose "Atomic Design" et "Refactoring Safe Steps". |
| **"Le code ne ressemble pas au nôtre"** | L'IA utilise ses valeurs par défaut | Le **Protocol** impose la Tech Stack (Vite/TS/CSS Modules). |
| **"L'IA a oublié ce qu'on a dit hier"** | Amnésie contextuelle des LLM | **ValidatedTasks** sert de "Mémoire Externe" réinjectée à chaque session. |
| **"Je ne sais pas quoi prompter"** | Manque d'expérience Prompt Engineering | **PromptRuler** fournit des phrases à copier-coller. |
---

## 4. Pour les Nouveaux : La Période de Transition
Passer au développement assisté par IA demande de l'humilité.
1.  **Acceptez ne pas tout écrire**. Votre valeur n'est plus dans la syntaxe `for loop`, mais dans la structure du système.
2.  **Soyez le "Manager" de l'IA**. Soyez exigeant. Si le code n'est pas parfait, demandez une correction en citant le protocole.
3.  **Utilisez le Manque de Connaissances comme une Force**. Si vous ne savez pas faire quelque chose, demandez à l'IA de vous **expliquer** son plan (Phase 2 du Ruler) avant de la laisser coder.

> **En résumé** :
> **Prompt Ruler** = La Commande.
> **Protocol Pack (DNA)** = Le Règlement / L'Héritage.
> **Validated Sequences** = La Mémoire Épigénétique.
> **VOUS** = Le Chef d'Orchestre / L'Architecte Évolutif.

---

## 🧬 Note Finale : L'approche "DNA"
Ce projet suit la philosophie **"Prompt as DNA"**. Chaque tâche accomplie n'est pas juste du code produit, c'est un "gène" de succès qui sera transmis au prochain projet. Nous ne construisons pas seulement une application, nous cultivons une intelligence experte.
