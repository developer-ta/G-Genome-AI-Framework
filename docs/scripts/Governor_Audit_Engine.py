"""
🛡️ G-GENOME : GOVERNOR AUDIT ENGINE (v1.2.2)
==============================================

NOMENCLATURE HYBRIDE :
- [Tech] : Governor     (Système de gouvernance et validation)
- [Bio]  : Audit        (Inspection immunitaire type leucocytes)
- [Role] : Engine       (Moteur d'exécution automatique)

DESCRIPTION :
Ce script est le "système immunitaire" du G-Genome. Il lit les tâches
en état DRAFT, les compare au DNA Core, et décide automatiquement si
elles peuvent être auto-validées (GOVERNOR_SIGNED) ou nécessitent une
validation humaine (NEED_HUMAN_SIGNATURE).

AUTEUR : Tayierjiang Tayier
==============================================
"""

import json
import os
import re
from datetime import datetime
from typing import Dict, List, Tuple

class GovernorAuditEngine:
    """
    [SYNTAXE] Classe principale gérant l'audit automatique des Codons.
    [RÔLE] Agit comme un "leucocyte" numérique qui patrouille le registre des tâches.
    """
    
    def __init__(self):
        # [SYNTAXE] Définition des chemins vers les fichiers critiques du framework.
        # [RÔLE] Établit les connexions avec le DNA (lois) et le Phénotype (tâches actives).
        self.genome_path = "docs/01_GENOME_DNA_CORE/Schema_Genome_Core.json"
        self.homeostasis_path = "docs/01_GENOME_DNA_CORE/Checker_Homeostas_Status.json"
        self.registry_path = "docs/02_PHENOTYPE_RUNTIME/Registry_Codon_Tasks.md"
        
        # [SYNTAXE] Chargement du schéma DNA en mémoire.
        # [RÔLE] Permet de comparer chaque tâche aux lois architecturales du projet.
        self.genome_schema = self._load_genome()
        
        # [SYNTAXE] Définition de la matrice de risque (Risk Matrix).
        # [RÔLE] Détermine quelles actions sont "sûres" (auto-pass) vs "dangereuses" (blocage).
        self.risk_matrix = {
            "LOW_RISK": ["documentation", "refactor", "comment", "test", "style"],
            "MEDIUM_RISK": ["component", "hook", "utility", "type"],
            "HIGH_RISK": ["architecture", "delete", "schema", "dna", "core", "migration"]
        }
    
    def _load_genome(self) -> Dict:
        """
        [SYNTAXE] Lecture du fichier JSON contenant le contrat d'intelligence.
        [RÔLE] Charge les lois fondamentales pour l'audit de conformité.
        """
        if not os.path.exists(self.genome_path):
            raise FileNotFoundError(f"DNA Core introuvable : {self.genome_path}")
        
        with open(self.genome_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    
    def _assess_risk(self, task_description: str) -> str:
        """
        [SYNTAXE] Analyse textuelle de la description de la tâche via pattern matching.
        [RÔLE] Détermine le niveau de risque (LOW/MEDIUM/HIGH) pour décider de l'autonomie.
        """
        task_lower = task_description.lower()
        
        # [SYNTAXE] Vérification de présence de mots-clés critiques.
        # [RÔLE] Détecte les "pathogènes" (actions dangereuses) dans la tâche.
        for keyword in self.risk_matrix["HIGH_RISK"]:
            if keyword in task_lower:
                return "HIGH_RISK"
        
        for keyword in self.risk_matrix["MEDIUM_RISK"]:
            if keyword in task_lower:
                return "MEDIUM_RISK"
        
        return "LOW_RISK"
    
    def _parse_registry(self) -> List[Dict]:
        """
        [SYNTAXE] Lecture et parsing du fichier Markdown contenant les Codons.
        [RÔLE] Extrait les tâches en état DRAFT pour les soumettre à l'audit.
        """
        if not os.path.exists(self.registry_path):
            print(f"⚠️  Registre introuvable : {self.registry_path}")
            return []
        
        with open(self.registry_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # [SYNTAXE] Regex pour extraire les lignes de tableau Markdown.
        # [RÔLE] Identifie les Codons en attente de validation (état DRAFT).
        tasks = []
        pattern = r'\|\s*\*\*([^*]+)\*\*\s*\|\s*([^|]+)\|\s*`([^`]+)`\s*\|'
        
        for match in re.finditer(pattern, content):
            task_id = match.group(1).strip()
            task_name = match.group(2).strip()
            task_status = match.group(3).strip()
            
            if task_status == "DRAFT":
                tasks.append({
                    "id": task_id,
                    "name": task_name,
                    "status": task_status
                })
        
        return tasks
    
    def _update_homeostasis(self, compliance_score: float):
        """
        [SYNTAXE] Mise à jour du fichier JSON de santé du système.
        [RÔLE] Enregistre l'état de conformité actuel (Homéostasie dynamique).
        """
        if not os.path.exists(self.homeostasis_path):
            print(f"⚠️  Checker Homeostasis introuvable : {self.homeostasis_path}")
            return
        
        with open(self.homeostasis_path, 'r+', encoding='utf-8') as f:
            homeostasis = json.load(f)
            homeostasis["architectural_alignment"]["current_compliance"] = compliance_score
            homeostasis["system_integrity"]["last_check"] = datetime.now().isoformat() + "Z"
            
            # [SYNTAXE] Réinitialisation du curseur et écriture du JSON mis à jour.
            # [RÔLE] Persiste l'état de santé pour les prochaines sessions.
            f.seek(0)
            json.dump(homeostasis, f, indent=2, ensure_ascii=False)
            f.truncate()
    
    def audit_tasks(self) -> Tuple[int, int]:
        """
        [SYNTAXE] Fonction principale orchestrant l'audit complet.
        [RÔLE] Patrouille le registre, applique la matrice de risque, signe ou bloque.
        """
        print("🛡️  [GOVERNOR AUDIT ENGINE] Démarrage de la patrouille immunitaire...")
        
        tasks = self._parse_registry()
        
        if not tasks:
            print("✅  Aucune tâche DRAFT détectée. Système sain.")
            return 0, 0
        
        auto_validated = 0
        blocked = 0
        
        for task in tasks:
            risk_level = self._assess_risk(task["name"])
            
            print(f"\n📋 Analyse : {task['id']} - {task['name']}")
            print(f"   Niveau de risque : {risk_level}")
            
            if risk_level == "LOW_RISK":
                print(f"   ✅ AUTO-PASS : Signature Gouverneur accordée.")
                # TODO: Mettre à jour le Registry avec GOVERNOR_SIGNED
                auto_validated += 1
            else:
                print(f"   🚫 BLOCAGE : Validation humaine requise (Risque {risk_level}).")
                # TODO: Marquer comme NEED_HUMAN_SIGNATURE
                blocked += 1
        
        # [SYNTAXE] Calcul du score de conformité basé sur le ratio de validation.
        # [RÔLE] Met à jour l'homéostasie pour refléter l'état réel du système.
        total = auto_validated + blocked
        compliance_score = auto_validated / total if total > 0 else 1.0
        self._update_homeostasis(compliance_score)
        
        print(f"\n📊 RAPPORT D'AUDIT :")
        print(f"   - Tâches auto-validées : {auto_validated}")
        print(f"   - Tâches bloquées : {blocked}")
        print(f"   - Score de conformité : {compliance_score:.2f}")
        
        return auto_validated, blocked

if __name__ == "__main__":
    # [SYNTAXE] Point d'entrée pour exécution directe du script.
    # [RÔLE] Permet au développeur de lancer manuellement l'audit du système.
    engine = GovernorAuditEngine()
    engine.audit_tasks()
