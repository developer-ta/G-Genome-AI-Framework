# ⚡ G-GENOME v2.0 : QUICK START (5 MINUTES)

> **"De Zéro à Premier Projet G-Genome en 300 secondes"**

---

## 🎯 POUR QUI EST CE GUIDE ?

- ✅ **Ingénieurs** : Vous voulez tester rapidement s'il vaut la peine d'investir du temps
- ✅ **Chercheurs** : Vous voulez comprendre l'architecture en manipulant
- ✅ **Équipes R&D** : Vous évaluez des solutions anti-amnésie pour vos agents IA

---

## 📦 ÉTAPE 1 : INSTALLATION (60 secondes)

```bash
# Cloner le repository
git clone https://github.com/developer-ta/G-Genome-AI-Framework.git
cd G-Genome-AI-Framework

# Installer les dépendances (Python 3.10+)
pip install PyQt6
```

**✅ Checkpoint** : Vous devez avoir Python 3.10+ installé.

---

## 🚀 ÉTAPE 2 : LANCER L'ORCHESTRATOR (30 secondes)

```bash
# Naviguer vers la Release Souveraine
cd docs/04_MASTER_HERITAGE_PACK/G_GENOME_V2.0_SOVEREIGN_RELEASE/ORCHESTRATOR

# Lancer l'interface
python main.py
```

**✅ Checkpoint** : Une fenêtre GUI s'ouvre avec le titre "G-GENOME ORCHESTRATOR".

---

## 🧬 ÉTAPE 3 : CRÉER VOTRE PREMIER PROJET (90 secondes)

1. **Dans l'interface**, cliquez sur **"🧬 DNA INJECTOR"**
2. **Cliquez sur "📂 SELECT TARGET FOLDER"** et choisissez un dossier vide (ex: `C:/Mes_Documents/Mon_Premier_Projet`)
3. **Cliquez sur "💉 INJECT GENOME"**
4. **Observez** : Le système crée automatiquement les 4 Quadrants dans votre dossier

**✅ Checkpoint** : Votre dossier contient maintenant :
```
Mon_Premier_Projet/
├── docs/
│   ├── 01_GENOME_DNA_CORE/
│   ├── 02_PHENOTYPE_RUNTIME/
│   ├── 03_GENETIC_RELEASES/
│   └── 04_MASTER_HERITAGE_PACK/
```

---

## 🧠 ÉTAPE 4 : COMPRENDRE CE QUI S'EST PASSÉ (60 secondes)

Votre projet a maintenant un "**ADN de mémoire persistante**" :

### **Quadrant 01 : GENOME_DNA_CORE**
Les **lois immuables** de votre projet (règles architecturales, protocoles)
- Fichier clé : `LAWS/Schema_Genome_Core.json`

### **Quadrant 02 : PHENOTYPE_RUNTIME**
La **mémoire active** de votre projet (tâches, contexte)
- Fichier clé : `Registry_Codon_Tasks.md` (liste des tâches persistantes)

### **Quadrant 03 : GENETIC_RELEASES**
Le **système immunitaire** (scripts de validation automatique)
- Fichier clé : `Governor_Audit_Engine.py` (valide vos tâches automatiquement)

### **Quadrant 04 : MASTER_HERITAGE_PACK**
Vos **releases certifiées** (archives de versions stables)

---

## 🤖 ÉTAPE 5 : TESTER AVEC UN AGENT IA (60 secondes)

1. **Ouvrez** `docs/02_PHENOTYPE_RUNTIME/Registry_Codon_Tasks.md`
2. **Ajoutez une tâche** :
   ```markdown
   | **C01** | Créer une fonction hello_world() | `DRAFT` | Test |
   ```
3. **Lancez le Governor** :
   ```bash
   cd docs/03_GENETIC_RELEASES
   python Governor_Audit_Engine.py
   ```
4. **Observez** : La tâche passe automatiquement en `GOVERNOR_SIGNED` (car faible risque)

**✅ Checkpoint** : Le `Registry_Codon_Tasks.md` est mis à jour automatiquement.

---

## 📊 CE QUE VOUS AVEZ APPRIS

✅ **Mémoire Persistante** : Les tâches sont sur disque, pas dans la RAM du LLM
✅ **Validation Autonome** : Le Governor décide seul pour les tâches simples  
✅ **Architecture Immuable** : Les 4 Quadrants empêchent le chaos

---

## 🔬 ALLER PLUS LOIN

### **Voir les Preuves de Concept**
```bash
cd examples/proof_of_concept/G_GENOME_TEST_LAB
# Voir TEST_01 à TEST_04 (validations empiriques)
```

### **Lire la Documentation Technique**
- 📖 [Architecture Complète](./TECHNICAL_ARCHITECTURE.md)
- 📜 [Contrat de Gouvernance](./FINAL_GENOME_CHARTER.md)
- 🦅 [Manifeste v2.0](./docs/04_MASTER_HERITAGE_PACK/MANIFESTO_TRANSITION_V2.0.md)

### **Tester avec un vrai LLM**
```python
import google.generativeai as genai

# Lire le contexte DNA
with open("docs/01_GENOME_DNA_CORE/LAWS/Schema_Genome_Core.json") as f:
    dna_context = f.read()

# Envoyer à Gemini avec contexte persistant
response = genai.generate(
    prompt="Crée une fonction hello_world()",
    context=dna_context  # Le LLM reçoit les lois du projet
)
```

---

## 🛡️ POUR GOOGLE DEEPMIND / MICROSOFT RESEARCH

**Validation Empirique** : 4/4 Tests Blancs passés (100%)  
**Métriques** : 50% auto-validation, 0.95 compliance, 6 mois stabilité  
**Contact** : ntparis9@gmail.com

---

**Status** : `QUICK_START_v2.0`  
**Durée Totale** : 5 minutes  
**Prochaine Étape** : Lire `TECHNICAL_ARCHITECTURE.md`

