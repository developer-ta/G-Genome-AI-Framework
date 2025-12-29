# 📟 AI <-> Human Promp Interface Protocol (FrontendPack)

> **Protocol Version**: 1.1.0
> **Context**: Frontend Development (React/Vite/TS)
> **Role**: Controlled Executor

## 🧠 Philosophy

This document is not just a guide; it is the **Interface Protocol** (like HTTP) between the Human Architect and the AI Executor.

- **Prompts** are the Protocol.
- **Architecture** is the Execution Constraint.
- **Experience** is the Upgradable Task Library.
- **DNA Inheritance**: Every successful task updates the global "Genome" for future projects.

---

## 🧬 Genetic Purpose
This project is an **evolved organism**. The AI must treat current instructions as **Phenotypic Adaptation** (local adjustments) while protecting the core **Genotype** (Universal Standards). Your goal is to produce "Fruit" (Working Code) and "New Seeds" (Validated Patterns) for the next generation.

## 1. � Execution Constraints (The "Architecture")

_Critères non-négociables. Si une requête viole ces règles, l'IA doit rejeter ou demander confirmation._

### 1.1 Tech Stack Strict

- **Core**: React 18+ (Functional), TypeScript (Strict Mode).
- **Build**: Vite.
- **State**: Zustand (Préféré) ou Context API.
- **Style**: CSS Modules (Standard).

### 1.2 Code Integrity

- **No `any`**: TypeScript strict typing is mandatory.
- **Atomic Design**: Components must be small, focused, and isolated.
- **Self-Documenting**: Variable names must explain intent.

### 1.3 Documentation Standard
- **Double Annotation**: Any complex logic (Regex, File I/O, Algorithms) MUST use the following format:
  ```typescript
  // [SYNTAXE] Technical explanation (e.g., "Iterates over array")
  // [RÔLE] Business context (e.g., "Filters active users")
  ```
- **Context**: Refer to `/docs/GUIDE_COMMENTAIRES.md` for examples.

---

## 2. 📚 Task Registry (The "Experience Engine")

_Cette section transforme l'expérience passée en "Code Exécutable" pour le futur. Chaque entrée est un pattern validé._

### ✅ Pattern ID: COMPONENT_NEW

**Trigger**: "Créer un nouveau composant X"
**Execution Steps**:

1. Check `/components` for duplicates.
2. Create folder `components/[Name]`.
3. Generate `index.tsx` (export), `[Name].tsx` (logic), `[Name].module.css` (style).
4. **Validation**: Ensure no hardcoded colors (use CSS variables).

### ✅ Pattern ID: REF_REFACTOR_SAFE

**Trigger**: "Refactor ce fichier"
**Execution Steps**:

1. **Analyze**: List all dependencies/imports.
2. **Plan**: Show step-by-step plan before writing code.
3. **Execute**: Atomic changes.
4. **Verify**: Check for regression in TypeScript types.

### ✅ Pattern ID: BUG_FIX_MEMO (Exemple)

**Context**: Problème de rendu conditionnel
**Solution Validée**: Toujours utiliser `Boolean(condition) && <Component />` au lieu de `condition && <Component />` pour éviter le rendu de `0` en React.

---

## 3. 🔄 Protocol Upgrade Mechanism (Self-Improvement)

_Comment l'IA doit mettre à jour ce fichier après un succès._

**Instruction Critique pour l'IA :**
À la fin de chaque session ou tâche réussie significativement, l'IA doit proposer une mise à jour de ce bloc "Task Registry" si un nouveau pattern a été découvert.

**Format de mise à jour (Prompt à générer par l'IA) :**

```markdown
### ✅ Pattern ID: [TYPE]\_[NAME]

**Trigger**: "[La demande utilisateur qui a déclenché ça]"
**Context**: [Pourquoi c'était dur/nouveau]
**Solution Validée**: [La stratégie exacte qui a marché]
```

---

## 4. � Communication Protocol

- **Input (User)**: Markdown Prompts referencing this Protocol.
- **Output (AI)**: Code implementation following Constraints + appropriate Pattern ID application.
