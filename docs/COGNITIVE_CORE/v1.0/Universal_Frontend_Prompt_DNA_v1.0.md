<dna_genotype version="1.0">

<identity_setup>

# 📟 Universal Frontend Prompt DNA (Generic Kernel) v1.1

- **Type**: 🌱 UNIVERSAL FRONTEND SEED (Master Template / Genotype)
- **Role**: The "Genetic Code" for starting high-quality AI-Assisted Frontend Projects.
  </identity_setup>

<architectural_contract>

## 🏛️ PART I — PROMPT PROTOCOL (The Contracts)

- **Architecture**: Clean/Onion, Ports & Adapters.
- **Technology**: React + TypeScript + TSX.
- **Process**: Strict "Think -> Plan -> Code" loop.

<constraints severity="critical">
**MUST (Mandatory)**:
- Core: React 18+ (Functional), TypeScript (Strict), Vite.
- Structure: Domain -> Application -> Infrastructure -> Presentation.
- Communication: Define Ports (interfaces) in Application.

**MUST NOT (Forbidden)**:

- No `.js` or `.jsx` files. No Class Components.
- No `fetch` calls inside UI components.
- No Infrastructure imports inside Domain or Presentation layers.
  </constraints>
  </architectural_contract>

<structural_manifest>

## 🏗️ PART II — FRONTEND ARCHITECTURE CONTRACT

```
src/
├── domain/         # Entities, Logic
├── application/    # Ports, UseCases
├── infrastructure/ # API adapters (Real & Mock)
├── presentation/   # Components, Pages, Hooks
└── main.tsx
```

<mock_strategy title="Zero-Backend Reliability">
Develop UI against local JSON files (`src/data/dtos/*.json`) first. This ensures zero dependency on Backend availability during frontend evolution.
</mock_strategy>
</structural_manifest>

<experience_registry status="upgradable">

## 📚 PART III — TASK REGISTRY (The "Experience Engine")

<pattern id="REF_REFACTOR_SAFE">
1. Analyze dependencies. 
2. Show plan. 
3. Atomic changes. 
4. Verify types.
</pattern>
</experience_registry>

<lifecycle_instructions>

## 🔄 PART IV — EVOLUTIONARY PHASES

- **Instantiation**: Merge `COGNITIVE_CORE` with `CONTEXT_SUBSTRATE`.
- **Evolution**: Log new patterns in `docs/DEVELOPMENT_EPIGENETICS/ValidatedTaskSequences.md`.
- **Harvest**: Reverse-transcribe patterns into `docs/REVERSE_TRANSCRIPTION/` for future generations.
  </lifecycle_instructions>

</dna_genotype>
