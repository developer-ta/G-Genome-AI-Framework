# 🕵️ Rapport d'Audit : Projet Local vs Universal DNA v1.1

> **Status** : ⚠️ PARTIAL COMPLIANCE (Conformité Partielle)
> **Date** : 2025-12-25
> **Objectif** : Identifier les écarts entre le code actuel et le nouveau standard "Mock DTO / Onion Strict".
> **Cycle DNA** : Phase de **Mutation & Adaptation** (Diagnostic du Phénotype actuel).

---

## 🛑 1. Violations Majeures (Architecture)

### ❌ Manque de "Ports" & "Adapters" explicites
*   **Standard** : `application/ports/` (Interfaces) et `infrastructure/api/` (Implementations).
*   **Actuel** :
    *   `application/services/` contient la logique mais pas d'interfaces strictes.
    *   `infrastructure/data/renovationData.ts` est un fichier hybride (Mock + Logique).
*   **Risque** : Impossible de passer sur une vraie API sans tout casser.
*   **Action requise** : Créer `application/ports/IRenovationRepository.ts`.

### ❌ Absence de stratégie "Mock DTO" (JSON)
*   **Standard** : Données brutes dans `src/data/dtos/*.json`.
*   **Actuel** : Données générées par code (fonctions aléatoires) dans `renovationData.ts`.
*   **Risque** : Pas de contrat de données clair avec le Backend.
*   **Action requise** : Extraire les données de test vers des fichiers JSON statiques.

---

## ⚠️ 2. Violations Mineures (Structure)

### 📁 Dossiers Manquants
*   `src/data/dtos/` (N'existe pas).
*   `src/application/ports/` (N'existe pas).
*   `src/application/mappers/` (N'existe pas, ou implicite dans les services).

---

## ✅ 3. Ce qui est Conforme
*   **Tech Stack** : React + TS + Vite (OK).
*   **Clean Architecture (Base)** : Séparation Domain / Infra / Presentation existe déjà (OK).
*   **Styling** : CSS Modules / Variables (OK).

---

## 🚀 Plan de Remédiation (Upgrade Plan)

Pour s'aligner sur le DNA v1.1, nous devons exécuter la séquence suivante :

1.  **Refactor Infra** : Convertir le générateur aléatoire `renovationData.ts` en adaptateur propre `MockRenovationAdapter` qui implémente une interface.
2.  **Create Ports** : Définir l'interface `IRenovationRepository` dans `application`.
3.  **Dependency Injection** : Connecter le tout proprement (via un hook ou un context).
