# 📋 DOCUMENT DE CONCEPTION : G-GENOME DASHBOARD (GUI) v1.6
**Statut** : SPÉCIFICATION TECHNIQUE MAÎTRE
**Design** : Bio-Tech Dark Mode (Gris #1A1A1A, Néo-Bleu #00A3FF, Émeraude #00FF94)

---

## 1. Architecture de Communication (Le Pont Synaptique)
La GUI communique avec le framework via le filesystem (Fichiers Signal) :
- **Input Area** -> `input_brut.tmp` (L'intention brute).
- **Substrate Area** -> `docs/02_PHENOTYPE_RUNTIME/CONTEXT_SUBSTRATE/` (Le savoir).
- **Task List** <- `todo.json` (Le plan généré par l'IA).
- **Immunity List** <- `immune_report.json` (Les alertes du Governor).
- **Console** <- `execution_logs.txt` (Le feedback métabolique).

---

## 2. Flux UX : Les 3 Phases Biologiques
### 🔘 Phase 1 : Gestation (Initialisation)
- Saisie de l'idée brute.
- **Bouton [🌱 GÉNÉRER SUBSTRAT]** : Création automatique des MD.
- **Visualiseur Markdown** : Validation humaine du savoir.

### 🔘 Phase 2 : Organisation (Le Todo)
- **Bouton [📋 CRÉER PLAN D'ACTION]** : Lecture du substrat -> Génération de `todo.json`.
- **Contrôle Immunitaire** : Si `immune_report.json` contient des risques, les tâches passent en **ROUGE**.
- **Blocage de Sécurité** : Pas d'exécution tant que l'audit n'est pas signé.

### 🔘 Phase 3 : Exécution (Efférence)
- **Bouton [🚀 LANCER L'EXÉCUTION]**.
- **Monitoring** : Barre de progression et logs en temps réel.

---

## 3. Structure UI (PyQt6 Layout)
- **Sidebar (Technologie)** : Choix du template génétique (React, Python, etc.).
- **Main View (Le Cortex)** : QTextEdit (Input) et QWebEngineView ou RichText (Visualiseur MD).
- **Console (Le Système Nerveux)** : Terminal de logs en bas.
- **Task Tracker (L'Immunité)** : QListWidget interactive sur le côté droit.

---

## 4. Mécanisme de Polling (QTimer)
Un chronomètre interne (polling) surveille chaque seconde :
1. La présence de `todo.json` pour peupler la liste des tâches.
2. La présence de `immune_report.json` pour mettre à jour les badges de risque.
3. La présence de `execution_logs.txt` pour scroller la console.
