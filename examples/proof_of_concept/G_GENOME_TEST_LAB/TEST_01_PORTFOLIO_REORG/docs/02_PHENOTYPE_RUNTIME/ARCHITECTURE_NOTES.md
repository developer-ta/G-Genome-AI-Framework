# 🏛️ Architecture Design Notes - RenovÉnergie

Ce document enregistre nos discussions et décisions architecturales pour référence future.

---

## 📅 2025-12-14 : Domain-Driven Design (DDD) - 领域驱动设计

### 💡 Constat Initial
Le projet utilise actuellement une **Clean Architecture**, mais la couche `domain` contient principalement des DTOs (Data Transfer Objects) pour l'affichage plutôt que de véritables **entités métier**.

**Fichiers concernés :**
- `domain/models.ts` - Contient `ChartData`, `PieData` (orientés UI)

### 🎯 Principe DDD à Appliquer

#### 1. **Le Domaine au Centre**
Le système doit être construit autour des **entités métier** (Domain Entities), pas autour des besoins d'affichage.

**Analogie :** 
- ❌ **Mauvais** : "J'ai besoin d'afficher un graphique, donc je crée `ChartData`"
- ✅ **Bon** : "Mon métier concerne des Bâtiments et des Rénovations, donc je crée `Building` et `Renovation`"

#### 2. **Entités Métier pour RenovÉnergie**

Pour notre projet "Rénovation Énergétique à Paris", les entités centrales devraient être :

##### 🏢 **Building (Bâtiment)**
```typescript
interface Building {
  id: string;
  address: string;
  arrondissement: number;  // 1-20 (Paris)
  type: 'PRIVATE' | 'SOCIAL';  // Logement privé ou social (HLM)
  energyClass: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';  // DPE
  totalUnits: number;  // Nombre de logements
  renovatedUnits: number;  // Nombre de logements rénovés
}
```

##### 🔧 **Renovation (Rénovation)**
```typescript
interface Renovation {
  id: string;
  buildingId: string;
  type: 'INSULATION' | 'HEATING' | 'WINDOWS' | 'VENTILATION';
  completionDate: Date;
  year: number;
  unitsAffected: number;
}
```

##### 📊 **District (Arrondissement)**
```typescript
interface District {
  number: number;  // 1-20
  name: string;  // "1er", "2e", etc.
  totalBuildings: number;
  renovatedBuildings: number;
}
```

#### 3. **Flux de Données (Data Flow)**

```
[Infrastructure] → [Domain Entities] → [Application Services] → [Presentation]
     ↓                    ↓                      ↓                      ↓
  API/Mock          Building, Renovation    Transformation      ChartData (DTO)
```

**Explication :**
1. **Infrastructure** récupère les données brutes (JSON, API)
2. Les transforme en **Entités Métier** (`Building`, `Renovation`)
3. **Application Services** applique la logique métier (filtrage, agrégation)
4. **Presentation** convertit en DTOs pour l'affichage (`ChartData` pour Recharts)

### 📝 Décision Architecturale

**Objectif :** Refactoriser le `domain` pour qu'il contienne les vraies entités métier.

**Plan d'action :**
1. ✅ Créer les interfaces `Building`, `Renovation`, `District` dans `domain/entities/`
2. ⏳ Modifier `infrastructure/data` pour retourner ces entités
3. ⏳ Adapter `application/services` pour transformer Entités → DTOs
4. ⏳ Garder `ChartData` dans `presentation/types/` (car c'est un détail d'UI)

---

### ⚠️ 重构策略（安全第一 - Safety First）

**重要原则：不破坏现有功能！**

#### 当前状态
- ✅ 系统正常运行
- ✅ 4个图表都能正确显示模拟数据
- ⚠️ 数据结构是面向UI的（`ChartData`, `PieData`），不是面向业务的

#### 错误的做法 ❌
```
直接删除 ChartData → 创建 Building 实体 → 全部重写
结果：系统崩溃，图表无法显示
```

#### 正确的做法 ✅（渐进式重构 - Incremental Refactoring）

**阶段 1：并行存在（不影响现有代码）**
```
domain/
  ├── models.ts          # 保留！（ChartData, PieData）
  └── entities/          # 新增！
      ├── Building.ts
      ├── Renovation.ts
      └── District.ts
```

**阶段 2：创建新的数据流（与旧流程并行）**
```
infrastructure/data/
  ├── renovationData.ts       # 保留！（返回 ChartData）
  └── buildingRepository.ts   # 新增！（返回 Building[]）
```

**阶段 3：逐个图表迁移**
- 先迁移 1 个图表使用新实体
- 测试通过后，再迁移下一个
- 最后删除旧代码

**阶段 4：清理**
- 所有图表都迁移完成后
- 删除 `ChartData` 等旧类型
- 删除旧的数据流

#### 核心原则

> **"先添加新代码，再删除旧代码。永远不要同时做两件事。"**
> 
> **"每次提交都应该是一个可运行的版本。"**

#### Git 提交策略

每个阶段都要提交：
```bash
git commit -m "feat: Add Building entity (parallel to existing ChartData)"
git commit -m "feat: Add buildingRepository (not used yet)"
git commit -m "refactor: Migrate RenovationStats to use Building entity"
git commit -m "cleanup: Remove deprecated ChartData (all charts migrated)"
```

这样如果出问题，可以随时回退到上一个可用版本。

### 🎓 Principe Clé à Retenir

> **"Le code doit parler le langage du métier, pas le langage de la technologie."**

Si un expert en rénovation énergétique lit notre code, il doit reconnaître les concepts de son domaine (`Building`, `Renovation`), pas juste voir des structures de données génériques (`ChartData`).

---

## 📚 Ressources

- [Domain-Driven Design (Eric Evans)](https://www.domainlanguage.com/ddd/)
- [Clean Architecture (Robert C. Martin)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

---

## � 2025-12-14 (Après-midi) : Séparation Données / Configuration UI

### 🔍 Problème Identifié

**Constat :** Les données métier (mock data) et les configurations UI (couleurs, styles) étaient mélangées dans la couche `infrastructure`.

**Fichier problématique :** `infrastructure/data/renovationData.ts`

**Ce qui était mélangé :**
```typescript
// ❌ AVANT : Tout dans infrastructure/data/renovationData.ts
const COLORS = ['#3b82f6', ...];  // Configuration UI !
const convertToPieData = (data) => {
  // Logique de transformation + couleurs
  color: COLORS[i % COLORS.length]  // UI dans Infrastructure !
};
```

### ⚠️ Pourquoi c'était un problème ?

1. **Violation de la Clean Architecture** - Infrastructure ne devrait pas connaître les détails UI
2. **Difficile à maintenir** - Changer une couleur nécessitait de modifier la couche Infrastructure
3. **Impossible de remplacer la source de données** - Le mock et l'UI étaient couplés
4. **Pas de réutilisabilité** - Les couleurs étaient dupliquées (aussi dans `RenovationStats/Data/chartConfig.ts`)

### ✅ Solution Appliquée : Séparation en 3 Couches

#### 1. Infrastructure (Données Pures)
**Fichier :** `infrastructure/data/renovationData.ts`

**Responsabilité :** Générer/récupérer les données métier brutes
```typescript
// ✅ APRÈS : Seulement les données
export const getRenovationData = (year: YearFilter) => {
  return generateDataForYear(year);  // Retourne { private, social }
};
```

**Ce qui a été supprimé :**
- ❌ Constante `COLORS` (déplacée vers Presentation)
- ❌ Fonction `convertToPieData` (déplacée vers Application)

#### 2. Application (Transformation)
**Fichier :** `application/services/RenovationService.ts`

**Responsabilité :** Transformer les données métier en formats utilisables
```typescript
// ✅ APRÈS : Logique de transformation
import { PIE_CHART_COLORS } from '../../presentation/config/chartConfig';

const convertToPieData = (data: ChartData[]): PieData[] => {
  return data.map((d, i) => ({
    name: d.name,
    value: d.renovated,
    color: PIE_CHART_COLORS[i % PIE_CHART_COLORS.length]
  }));
};
```

**Ce qui a été ajouté :**
- ✅ Fonction `convertToPieData` (déplacée depuis Infrastructure)
- ✅ Import des couleurs depuis `presentation/config`

#### 3. Presentation (Configuration UI)
**Fichier :** `presentation/config/chartConfig.ts` (nouveau)

**Responsabilité :** Centraliser toutes les configurations visuelles
```typescript
// ✅ NOUVEAU FICHIER
export const PIE_CHART_COLORS = [
  '#3b82f6', '#10b981', '#f59e0b', ...
];

export const BAR_CHART_COLORS = {
  total: '#87CEEB',
  renovated: '#C4B5FD',
  ...
};
```

### 📊 Comparaison Avant / Après

| Aspect | ❌ Avant | ✅ Après |
|--------|---------|---------|
| **Couleurs** | Dans `infrastructure/data` | Dans `presentation/config` |
| **Transformation** | Dans `infrastructure/data` | Dans `application/services` |
| **Données Mock** | Mélangées avec UI | Pures, sans UI |
| **Réutilisabilité** | Couleurs dupliquées | Centralisées |
| **Maintenabilité** | Difficile (tout mélangé) | Facile (séparé) |

### 🎯 Résultat

**Flux de données clarifié :**
```
[Infrastructure]  →  [Application]  →  [Presentation]
     ↓                    ↓                  ↓
Données brutes    Transformation      Affichage + Style
ChartData[]       → PieData[]         + Couleurs
```

**Avantages obtenus :**
1. ✅ **Clean Architecture respectée** - Chaque couche a sa responsabilité
2. ✅ **Facile de changer la source** - Remplacer mock par API ne touche que `infrastructure/data`
3. ✅ **Thème centralisé** - Toutes les couleurs dans `presentation/config`
4. ✅ **Tests plus faciles** - Chaque fonction est isolée

### 🧪 Validation

**Test effectué :** Vérification visuelle sur http://localhost:3000
- ✅ Les 4 graphiques s'affichent correctement
- ✅ Les couleurs sont identiques (pas de régression visuelle)
- ✅ Le filtrage par année fonctionne toujours

**Commit :** À faire après validation finale

---

## �🔄 Historique des Modifications

| Date | Sujet | Décision |
|------|-------|----------|
| 2025-12-14 (AM) | DDD - Entités Métier | Refactoriser `domain` pour inclure `Building`, `Renovation`, `District` |
| 2025-12-14 (PM) | Séparation Données/UI | Extraire couleurs et transformations de `infrastructure` vers `application` et `presentation` |

