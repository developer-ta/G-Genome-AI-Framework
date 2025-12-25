# 📏 Prompt Ruler: Guide de Collaboration Standard Équipe/IA

> **Définition du Standard** : "Un bon prompt n'est pas long. C'est un prompt qui est **Processus**, **Formaté**, et **Auto-vérifié**."

Ce guide est destiné à tous les développeurs de l'équipe pour standardiser nos interactions avec l'IA.

---

## 🏗️ Les 5 Piliers d'un Prompt "RenovÉnergie"
Pour qu'une tâche soit acceptée par l'IA et le protocole, votre prompt doit contenir :

1.  **Role (Rôle)** : "Tu es l'Expert Frontend..."
2.  **Goal (Objectif)** : "Livre le composant Button..."
3.  **Constraints (Contraintes)** : "Utilise CSS Modules, pas de Tailwind..."
4.  **Steps (Étapes)** : "Analyse d'abord, puis code, puis vérifie..."
5.  **Output (Format)** : "Code final en Markdown + Liste de vérification."

---

## 🔄 Le Workflow Standard (Copier-Coller)

Voici les phrases exactes à utiliser à chaque étape du développement.

### Etape 1 : 🚀 Démarrage de Session (Context Injection)
*À faire au tout début d'une conversation avec l'IA.*

> **Prompt :**
> "Avant de commencer, lis le fichier `/docs/promptPacks/FrontendPromptProtocolPackDNA_v1.1.md`.
> Adopte le rôle de 'Controlled Executor' défini dans ce protocole.
> Confirme quand tu as chargé les **Execution Constraints** et le **Task Registry**."

---

### Etape 2 : ⚡ Exécution d'une Tâche (The Request)
*Pour demander du code. Ne demandez jamais "Fais ça". Utilisez cette structure.*

> **Prompt :**
> "Agis selon le Protocol 1.1.0.
> **Tâche** : [Décrivez votre besoin, ex: Créer le composant Navbar]
> **Pattern ID** : [Voir Protocol, ex: COMPONENT_NEW]
> **Spécifique** : [Détails, ex: Doit être responsive mobile first]
>
> **Livrables attendus** :
> 1. Plan d'implémentation (Steps).
> 2. Code complet (pas de placeholders).
> 3. Validation explicite que les contraintes 'No Any' sont respectées."

---

### Etape 3 : ✅ Clôture & Enregistrement (Logging Idea)
*Quand ça marche. C'est ici qu'on capture l'expérience pour le futur.*

> **Prompt :**
> "Mission accomplie. Ce code fonctionne parfaitement.
> **Action** : Enregistre cette tâche dans `/docs/promptPacks/ValidatedTaskSequences.md`.
> **Format** : Utilise le format 'Archive' standard.
> **Note Clé** : Ajoute que [La petite astuce qui a tout débloqué] était la clé du succès."

---

### Etape 4 : 🔄 Mise à jour du Protocole (Upgrade)
*Quand trop de nouvelles tâches sont dans les séquences.*

> **Prompt :**
> "Analyse `/docs/promptPacks/ValidatedTaskSequences.md`.
> Extrais les patterns récurrents (ceux qui sont validés plusieurs fois).
> Propose un patch pour mettre à jour `/docs/promptPacks/FrontendPromptProtocolPackDNA_v1.1.md` avec ces nouvelles règles.
> Augmente la version du Protocole."

---

## ❌ Anti-Patterns (Ce qu'il ne faut PAS dire)

*   ⛔ **"Peux-tu corriger ça ?"** (Trop vague → L'IA va deviner et casser l'architecture)
    *   ✅ *Mieux : "Analyse l'erreur selon la contrainte 1.2 du Protocole. Propose un fix atomique."*
*   ⛔ **"Fais-moi un bouton bleu."** (Ignore le Design System)
    *   ✅ *Mieux : "Crée un bouton utilisant les variables CSS du thème défini dans `index.css`."*
