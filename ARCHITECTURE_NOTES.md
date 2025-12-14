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

### 🎓 Principe Clé à Retenir

> **"Le code doit parler le langage du métier, pas le langage de la technologie."**

Si un expert en rénovation énergétique lit notre code, il doit reconnaître les concepts de son domaine (`Building`, `Renovation`), pas juste voir des structures de données génériques (`ChartData`).

---

## 📚 Ressources

- [Domain-Driven Design (Eric Evans)](https://www.domainlanguage.com/ddd/)
- [Clean Architecture (Robert C. Martin)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

---

## 🔄 Historique des Modifications

| Date | Sujet | Décision |
|------|-------|----------|
| 2025-12-14 | DDD - Entités Métier | Refactoriser `domain` pour inclure `Building`, `Renovation`, `District` |

