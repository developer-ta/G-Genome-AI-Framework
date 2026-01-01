# 📋 CAHIER DES CHARGES : G-GENOME INCUBATOR GUI (v1.0)
**Expertise** : Architecture Bio-Digitale / Google Software Engineering
**Statut** : NUTRIMENT MAÎTRE (Context Substrate)

---

## 1. VISION ET OBJECTIF
L'**Incubateur G-Genome** est le "Vecteur de Clonage" du framework. Son but est de transformer n'importe quel dossier vide ou anarchique en un **Organisme G-Genome Certifié** prêt pour le développement assisté par IA.

L'interface doit être le pont entre l'humain (Intention) et l'IA (Exécution).

---

## 2. EXIGENCES FONCTIONNELLES (Les Codons)

### 💉 C1 : Injection de l'ADN (Mito)
- **Action** : Sélection d'un répertoire "Hôte" (Cellule cible).
- **Rôle** : Répliquer la structure `docs/01-02-03-04` et les fichiers de loi (`Schema_Genome_Core.json`, etc.).
- **Validation** : Afficher un rapport de succès après la réplication physique.

### 🧪 C2 : Injection de Nutriments (Contextualisation)
- **Action** : Possibilité de joindre un fichier de spécifications (Cahier des charges).
- **Rôle** : Placer automatiquement ce fichier dans `docs/02_PHENOTYPE_RUNTIME/CONTEXT_SUBSTRATE/`.
- **Impact** : Permettre à l'IA de démarrer le projet en ayant déjà le métier en mémoire vive (L'étape que nous faisons ici).

### 🤖 C3 : Pont de Transcription (AI Prompting)
- **Action** : Générer un "Master Prompt" après injection.
- **Rôle** : Fournir à l'utilisateur le texte exact à copier dans son IA pour activer le protocole G-Genome.

---

## 3. EXIGENCES TECHNIQUES (Le Phénotype)

- **Langage** : Python 3.10+
- **Framework UI** : PyQt6 (Approche Composant Miroir : `sections`, `layouts`, `components`).
- **Design System** : 
    - **Twin Mode** : Copie carbone du Dashboard React (Glassmorphism, Bleu G-Genome `#6EA8FF`).
    - **Aesthetics** : Priorité à une interface premium (Ombres portées, Bordures arrondies 24px-32px).
- **Architecture** : Clean Architecture stricte. Aucun code logique dans la couche de présentation.

---

## 4. WORKFLOW UTILISATEUR (Cycle de Vie)

1. **INITIALISATION** : L'utilisateur lance l'Incubateur.
2. **CONFIGURATION** : 
    - Il pointe le dossier de son projet.
    - Il importe ses spécifications.
3. **FERTILISATION** : Clic sur "Inject".
4. **ACTIVATION** : L'utilisateur copie le prompt généré et commence à collaborer avec son IA sur le nouveau projet sain.

---

## 5. SIGNATURE DE CONFORMITÉ
> "Une structure immuable pour une évolution infinie."
> — *Équipe G-Genome Architecture (Google AI Pattern)*
