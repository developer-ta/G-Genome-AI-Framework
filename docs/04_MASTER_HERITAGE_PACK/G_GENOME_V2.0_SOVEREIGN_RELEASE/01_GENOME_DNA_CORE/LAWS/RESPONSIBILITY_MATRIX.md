# 👔 MATRICE DE RESPONSABILITÉ G-GENOME (RACI)
> **Objectif** : Définir qui fait quoi pour transformer l'IA d'un "chatbot" en un "partenaire industriel".

---

## 👥 1. Les Rôles
| Entité | Responsabilité Majeure | État d'Esprit |
| :--- | :--- | :--- |
| **Humain (Architecte)** | Validation des intentions, Revue de sécurité, Déclenchement des Releases. | **Gouvernance & Audit** |
| **IA (Agent G-Genome)** | **Synthèse Cognitive** (Traduction du langage naturel), Exécution, Auto-test, Logging. | **Exécution & Rigueur** |

---

## 🛠️ 2. Workflow de Tâche Industriel (Le Cycle du Codon)

Pour chaque fonctionnalité, l'équipe suit ce cycle immuable dans `docs/02_BODY/COGNITIVE_TASK_REGISTRY.md` :

### 🔘 Phase A : Planification (IA → Humain)
1. **IA** : Analyse le besoin et propose une liste de tâches atomiques.
2. **IA** : Assigne un ID unique et définit les critères de succès (Definition of Done).
3. **Humain** : Valide la liste (Passe l'état de `DRAFT` à `TODO`).

### 🔘 Phase B : Exécution (IA)
1. **IA** : Passe la tâche en `IN_PROGRESS`.
2. **IA** : Produit le code en respectant le DNA (`docs/01_DNA`).
3. **IA** : Documente les changements dans `.pack_trace` (Trace temporelle).

### 🔘 Phase C : Validation (Humain + IA)
1. **IA** : Présente une preuve de fonctionnement (Tests, screenshots, logs).
2. **Humain** : Vérifie la tâche. Si OK, passage à `VALIDATED`.
3. **Système** : Une tâche `VALIDATED` génère automatiquement une ligne dans `CHANGELOG.md`.

---

## 🚀 3. Augmenter l'Efficacité (效率)
Pour maximiser la vitesse sans perdre le contrôle :
- **Pré-Validation** : L'IA doit toujours demander "Est-ce que ma compréhension de la tâche X est correcte ?" avant de modifier un seul fichier.
- **Micro-Releases** : Ne pas attendre la fin du mois. Chaque lot de 5 tâches `VALIDATED` doit générer une **Release Intermédiaire** (Snapshot).
- **Auto-Réparation** : Si une tâche échoue, l'IA doit analyser le `ValidatedTaskSequences.md` pour comparer avec les succès passés.

---
*G-Genome : L'efficacité par la discipline, pas par la puissance brute.*
