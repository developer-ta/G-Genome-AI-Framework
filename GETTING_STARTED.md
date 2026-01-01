# 🚀 GETTING STARTED : NAVIGATION POUR DÉVELOPPEURS

> **"Vous êtes nouveau ? Commencez ici."**

---

## 📚 QUE LIRE EN FONCTION DE VOTRE RÔLE ?

### **👨‍💻 Vous êtes DÉVELOPPEUR / INGÉNIEUR**
**Objectif** : Comprendre rapidement et tester

1. **[QUICKSTART.md](./QUICKSTART.md)** (5 min) ← **COMMENCEZ ICI**
2. **[RD_SYNTHESIS.md](./RD_SYNTHESIS.md)** (10 min) ← Vue d'ensemble technique
3. **[TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md)** (20 min) ← Détails complets

---

### **🔬 Vous êtes CHERCHEUR / R&D**
**Objectif** : Évaluer la valeur scientifique

1. **[RD_SYNTHESIS.md](./RD_SYNTHESIS.md)** (10 min) ← **COMMENCEZ ICI**
2. **[TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md)** (20 min) ← Workflow détaillé
3. **[FINAL_GENOME_CHARTER.md](./FINAL_GENOME_CHARTER.md)** (15 min) ← Gouvernance formelle

---

### **👔 Vous êtes MANAGER / DÉCIDEUR**
**Objectif** : Comprendre le ROI business

1. **[RD_SYNTHESIS.md](./RD_SYNTHESIS.md)** (10 min) ← **COMMENCEZ ICI**
2. **[README.md](./README.md)** (5 min) ← Aperçu général
3. **Contact Direct** : ntparis9@gmail.com ← Démo personnalisée

---

### **🧪 Vous êtes CONTRIBUTEUR OPEN SOURCE**
**Objectif** : Participer au développement

1. **[QUICKSTART.md](./QUICKSTART.md)** (5 min) ← Setup local
2. **[TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md)** (20 min) ← Architecture
3. **`tests/test_framework.py`** ← Lancer les tests
4. **Contributing Guide** : Voir issues GitHub

---

## 🎬 DÉMONSTRATIONS RAPIDES

### **Test Visuel (Interface GUI)**
```bash
cd docs/04_MASTER_HERITAGE_PACK/G_GENOME_V2.0_SOVEREIGN_RELEASE/ORCHESTRATOR
python main.py
```

### **Test Technique (Governor)**
```bash
cd docs/03_GENETIC_RELEASES
python Governor_Audit_Engine.py ../../../examples/proof_of_concept/G_GENOME_TEST_LAB/TEST_02_GOVERNOR_VALIDATION
```

### **Test Automatisé (Pytest)**
```bash
pip install -r requirements.txt
python tests/test_framework.py
```

---

## 📂 STRUCTURE DU REPOSITORY

```
paris-renovation-energetique/
├── QUICKSTART.md              ← ⭐ Guide 5 minutes
├── RD_SYNTHESIS.md            ← ⭐ Synthèse R&D
├── TECHNICAL_ARCHITECTURE.md  ← Documentation complète
├── requirements.txt           ← Dépendances Python
│
├── docs/                      ← Framework G-Genome
│   ├── 01_GENOME_DNA_CORE/
│   ├── 02_PHENOTYPE_RUNTIME/
│   ├── 03_GENETIC_RELEASES/
│   └── 04_MASTER_HERITAGE_PACK/
│       └── G_GENOME_V2.0_SOVEREIGN_RELEASE/  ← 🦅 Release officielle
│
├── examples/                  ← Preuves de concept
│   ├── TEST_00_ORIGINAL_DASHBOARD_REACT/
│   └── proof_of_concept/G_GENOME_TEST_LAB/
│
└── tests/                     ← Tests automatisés
    └── test_framework.py
```

---

## ❓ FAQ RAPIDE

**Q : Quelle est la différence avec RAG ?**
→ Voir [RD_SYNTHESIS.md > Tableau comparatif](./RD_SYNTHESIS.md)

**Q : Ça marche avec quel LLM ?**
→ Tous (Gemini, GPT, Claude, Llama). Le Framework est agnostique.

**Q : C'est ready pour production ?**
→ v2.0 est "Évaluation-Ready". Production nécessite tests de charge (roadmap Q2 2026).

**Q : Comment contribuer ?**
→ Issues GitHub + Fork + Pull Request. Voir TECHNICAL_ARCHITECTURE.md pour architecture.

---

**Status** : `NAVIGATION_GUIDE_v2.0`  
**Mise à jour** : 01 Janvier 2026
