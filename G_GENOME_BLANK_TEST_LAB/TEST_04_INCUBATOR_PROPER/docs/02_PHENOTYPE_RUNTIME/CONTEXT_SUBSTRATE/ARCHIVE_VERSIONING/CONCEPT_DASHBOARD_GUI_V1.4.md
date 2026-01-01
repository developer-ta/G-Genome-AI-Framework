# 📋 DOCUMENT DE CONCEPTION : G-GENOME DASHBOARD (GUI) v1.4
**Statut** : NUTRIMENT MAÎTRE (Context Substrate)
**Mise à jour** : Ajout du Module d'Initialisation et de Gestion du Substrat.

---

## 5. Gestion du Contexte (Le Substrat)
L'interface gère l'importation automatique des documents sources vers `docs/02_PHENOTYPE_RUNTIME/CONTEXT_SUBSTRATE/`.

### A. Le Panneau d'Importation
- **Documents requis** : `SPECIFICATIONS_CLIENT.md` (Obligatoire), `USER_STORIES.md`, Annexes.
- **Rôle de l'UI** : 
    - Copie physique vers le répertoire cible.
    - Validation du format (.md, .txt).
    - Feedback visuel : Icône de confirmation 📁✅.

### B. Sélection de la Technologie (Le Génome)
- **Composant** : QComboBox (Menu déroulant).
- **Templates** : React Dashboard, Python Qt Desktop, API Backend.
- **Action** : Prépare l'arborescence et le DNA correspondant.

---

## 6. Flux d'Initialisation (L'UX de démarrage STRICT)

1. **Étape 1 : Création** (Nom et dossier racine).
2. **Étape 2 : Ingestion** (Bouton [+ Importer Spécifications]). 
   - *CONDITION* : Blocage de la suite si SPECIFICATIONS_CLIENT.md est absent.
3. **Étape 3 : Connexion** (Initialisation du Noyau G-GENOME).
4. **Étape 4 : Métabolisme** (Dialogue brut dans le Cortex).

---

## 7. Sécurité & Intégrité
- **Interdiction d'Hallucination** : L'interface graphique désactive la zone de texte "Cortex" tant que le substrat de connaissances n'est pas validé.
