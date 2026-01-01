# 📋 DOCUMENT DE CONCEPTION : G-GENOME DASHBOARD (GUI) v1.3
**Rôle** : Spécifications UI/UX pour l'Orchestrateur Bio-Digital.

---

## 1. Philosophie de l'Interface (UX)
L'interface doit agir comme un organisateur d'intentions. Elle transforme le langage naturel humain (imprécis) en un plan d'action machine (structuré).

- **Utilisateur cible** : Développeurs ou utilisateurs finaux.
- **Objectif** : Réduire la friction entre l'idée et l'exécution.

---

## 2. Parcours Utilisateur (User Flow)
1. **Phase d'Afférence (Input)** : Dépôt de l'idée brute (Cortex).
2. **Phase de Traduction (Noyau IA)** : Génération du `todo.json`.
3. **Phase de Visualisation (Todo List)** : Affichage structuré avec indicateur de risque (Immune System).
4. **Phase d'Audit & Validation** : Signature humaine pour les risques élevés.
5. **Phase d'Exécution (Efference)** : Exécution et logs en temps réel (Nervous System).

---

## 3. Spécifications de l'Interface (UI)

### A. Le Panneau d'Entrée (The Cortex)
- **Composant** : Rich Text Edit.
- **Actionneur** : Bouton "Générer Protocole G-GENOME".
- **Lien Technique** : Écrit dans `input_brut.tmp`.

### B. Le Moniteur de Tâches (The Immune System)
- **Composant** : QListWidget interactif.
- **Indicateurs** : 🟢 (Low Risk), 🟡 (Audit Required), 🔴 (High Risk/Block).

### C. Le Console d'Exécution (The Nervous System)
- **Composant** : Terminal de log (Read-only).
- **Rôle** : Feedback du métabolisme en cours.

---

## 4. Interaction Technique (Le Polling)
- Surveillance active de `todo.json`.
- Communication framework/GUI via fichiers tampons.
