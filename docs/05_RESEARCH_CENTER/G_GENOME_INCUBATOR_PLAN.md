# 🧪 G-GENOME INCUBATOR : GUI PROTOTYPE PLAN

> **Status**: PLANNING
> **Tech**: Python + PyQt6
> **Goal**: Create a visual tool to inject G-Genome DNA (Logic + Design) into new projects.

---

## 1. VISION & PHILOSOPHY

The "Incubator" is the reproductive organ of the G-Genome framework. It allows an "Architect" (User/AI) to take a **Barren Host** (Empty Folder) and impregnate it with **Ancestral DNA**.

### The "Double Helix" Inheritance

We are expanding the biological metaphor. A new project inherits two strands:

1.  **🧬 The Genotype (Internal Logic)**:
    - `Schema_Genome_Core.json` (The Laws)
    - `Governor` & `Linter` scripts (The Immune System)
    - Folder Structure (The Skeleton)
2.  **🎨 The Phenotype (External Morphology)**:
    - **Design System DNA**: Colors, Typography, Spacing, Component Shapes.
    - _Analogy_: Parents pass on eye color and height to children. Projects should pass on their "Look & Feel" to save setup time.

---

## 2. USER SCENARIO (The "Creation" Flow)

### Phase 1: Selection (The Petri Dish)

1.  **Open Incubator GUI**.
2.  **Select Source DNA**: Point to the `G-Genome` master repository (Parent).
3.  **Select Host Target**: Point to the empty `Projet_Tosa` folder (Child).

### Phase 2: Design of the Child (Genetic Selection)

_Dashboard shows "Inheritance Options":_

- [x] **Inject Architecture** (Genotype):
  - Standard Clean Architecture folders.
  - Governor & Linter scripts.
- [x] **Inject Morphology** (Phenotype/Design System):
  - _Anatomy (Structure)_: **ALWAYS INHERITED**. The "Skeleton" of the pages (Header position, Grid layout, Component hierarchy). Just like all humans have eyes in the same place.
  - _Aesthetics (Skin)_: **SELECTABLE**.
    - [ ] **Strict Clone**: Inherit Parent's full styling (Colors, Fonts, Glassmorphism).
    - [ ] **Skeleton Only**: Inherit only the structure (Wireframes). The developer applies their own "Skin".

### Phase 3: Incubation (Injection)

1.  Click **"START MITOSIS"** (Generate Project).
2.  **Visual Feedback**:
    - Progress bar showing file copying.
    - "Waking up Governor..." (Running initial audit).
    - "Waking up Linter..." (Checking integrity).
3.  **Birth**: "Project is alive and healthy. Architecture compliant. Design System ready."

---

## 3. TECHNICAL ARCHITECTURE (PyQt6)

The GUI itself must respect G-Genome standards.

### A. Directory Structure (`docs/06_INCUBATOR_GUI/`)

```text
/src
  /controllers     # Logic (The Brain)
    - DNA_Injector.py   # Handles file copying & JSON generation
    - Governor_Link.py  # Communicates with the Governor script
  /views           # UI (The Body - PyQt6)
    - MainWindow.py     # Main container
    - Dashboard.py      # The visual control panel
    - Components/       # Reusable UI widgets (Buttons, Cards)
  /styles          # The Incubator's own Design System (QSS)
    - theme.qss         # CSS-like styling for Qt
  main.py          # Entry point
```

### B. Design System Translation (React -> Qt)

We will port the existing "Premium Glassmorphism" look from the React project to PyQt6 using QSS (Qt Style Sheets).

- **Colors**: Deep Navy, Neon Blue/Green accents.
- **Shapes**: Rounded corners, subtle borders.
- **Interactions**: Hover effects on buttons.

---

## 4. NEXT STEPS (Implementation)

1.  **Install Dependencies**: `pip install PyQt6`
2.  **Create Skeleton**: Set up the `src` folders and `main.py`.
3.  **Build Main Window**: Create a blank window with the correct dark theme.
4.  **Implement "Injector" Logic**: Write the Python code to copy files from Source to Target.
5.  **Connect UI to Logic**: Wire the buttons to the functions.

---

_Author: Tayierjiang Tayier (Architect)_
_Date: 31/12/2025_
