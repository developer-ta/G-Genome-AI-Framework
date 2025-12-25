# 📚 Validated Task Sequences (Log des Tâches Validées)

> **Role**: Raw Data Log (Raw Experience)
> **Purpose**: Capturer "ce qui a été fait" et "ce qui a marché" avant de le distiller dans le protocole.
> **Flow**: Tâche Terminée -> ValidatedTaskSequences.md -> (Review) -> FrontendPromptProtocolPack.md

## 📥 Inbox (Dernières Tâches)

### [TASK-DATE] ID: [NomDescriptif]

- **Context**: [Description courte du problème ou de la feature]
- **Files Changed**:
  - `src/...`
- **Prompt Used** (Success Trigger):
  > "[La commande qui a donné le bon résultat]"
- **Key Variable Verified**: [Qu'est-ce qui prouve que c'est un succès ? ex: "Le test X passe" ou "Le build ne casse pas"]

---

## 💾 Archives (Historique)

### [2025-12-14] ARCH-DDD-001: Incremental Refactoring Strategy

- **Context**: Transition from "ChartData" (UI-driven) to "Building/Renovation" (Domain-driven) without breaking the app.
- **Files Changed**: `domain/entities/*.ts`, `infrastructure/data/*.ts`
- **Lesson Learned**: "Never delete old code before the new one is working in parallel."
- **Pattern**:
  1. Create new entities alongside old models.
  2. Build new data flow parallel to old one.
  3. Migrate components one by one.
  4. Cleanup old code.

### [2025-12-14] ARCH-CLEAN-002: UI Config Separation

- **Context**: Colors and styles were mixed inside `infrastructure/data`.
- **Files Changed**: `presentation/config/chartConfig.ts`
- **Lesson Learned**: Keep `infrastructure` pure (data only). Move hardcoded colors/styles to `presentation/config`.
- **Key Variable Verified**: Visual regression test on charts (colors stayed the same).

### [2025-12-16] GIT-FORCE-001: Conflict Resolution Strategy

- **Context**: Merging a completely new local architecture into a legacy remote repo caused massive unrelated history conflicts.
- **Solution**: `git checkout --ours .`
- **Lesson Learned**: When replacing an architecture entirely, prioritize local changes aggressively over remote legacy code.

### [2025-12-25] INIT-001: Protocol Genesis

- **Context**: Création initiale de l'architecture de mémoire externe pour l'IA.
- **Files Changed**:
  - `docs/promptPacks/FrontendPromptProtocolPack.md`
  - `docs/promptPacks/ValidatedTaskSequences.md`
- **Outcome**: Système de gestion de connaissances mis en place.
