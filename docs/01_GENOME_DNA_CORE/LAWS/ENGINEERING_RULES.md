# 🏗️ ENGINEERING STANDARD RULES v1.0

> **STATUS:** IMMUTABLE
> **SCOPE:** G-GENOME PROJECT

Cette charte définit les standards d'ingénierie non négociables pour maintenir la portabilité et la qualité industrielle du projet.

## 🚫 1. NO ABSOLUTE PATHS (INTERDIT)

**Règle :** Ne jamais coder en dur un chemin contenant `C:\Users\...` ou dépendant de la machine d'un développeur.
**Pourquoi :** Brise la CI/CD, empêche le travail en équipe, crash immédiat sur une autre machine.
**Correction :** Toujours utiliser la découverte dynamique (e.g., `os.path.dirname(__file__)` ou ancrage sur fichier racine).

## 🧩 2. NO "MAGIC NUMBERS" IN PATHS

**Règle :** Éviter les remontées de dossiers fragiles comme `../../../../` si l'architecture est profonde.
**Pourquoi :** Si on déplace le fichier d'un niveau, tout casse.
**Correction :** Utiliser la "Découverte par Ancrage" (rechercher un fichier signature `LAUNCH_G_GENOME.py` en remontant l'arbre).

## 🔒 3. IMMUTABILITY

**Règle :** Les fichiers du DNA Core (`docs/01_...`) ne doivent jamais être modifiés par le code en exécution (Runtime).
**Correction :** Le Runtime écrit uniquement dans `/tmp` ou dans les dossiers cibles de l'utilisateur.

---

_Signed by G-GENOME GOVERNOR_
