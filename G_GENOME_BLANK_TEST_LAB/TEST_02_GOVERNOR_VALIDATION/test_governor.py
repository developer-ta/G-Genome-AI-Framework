"""
🧬 G-GENOME : GOVERNOR AUDIT ENGINE (Test Blanc 02)
==============================================
Version adaptée pour le Test Blanc 02
==============================================
"""

import json
import os
import re
from datetime import datetime
from typing import Dict, List, Tuple

class GovernorAuditEngine:
    
    def __init__(self, test_mode: bool = False, test_path: str = None):
        if test_mode and test_path:
            # Mode Test Blanc
            self.genome_path = os.path.join(test_path, "01_DNA/Schema_Genome_Core.json")
            self.registry_path = os.path.join(test_path, "02_BODY/Registry_Codon_Tasks.md")
        else:
            # Mode Production
            self.genome_path = "docs/01_GENOME_DNA_CORE/Schema_Genome_Core.json"
            self.registry_path = "docs/02_PHENOTYPE_RUNTIME/Registry_Codon_Tasks.md"
        
        self.genome_schema = self._load_genome()
        
        self.risk_matrix = {
            "LOW_RISK": ["documentation", "refactor", "comment", "test", "style", "commentaires", "utilitaire"],
            "MEDIUM_RISK": ["component", "hook", "utility", "type", "composant", "button"],
            "HIGH_RISK": ["architecture", "delete", "schema", "dna", "core", "migration", "supprimer", "suppression"]
        }
    
    def _load_genome(self) -> Dict:
        if not os.path.exists(self.genome_path):
            print(f"⚠️  DNA Core introuvable : {self.genome_path}")
            return {}
        
        with open(self.genome_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    
    def _assess_risk(self, task_description: str) -> str:
        task_lower = task_description.lower()
        
        for keyword in self.risk_matrix["HIGH_RISK"]:
            if keyword in task_lower:
                return "HIGH_RISK"
        
        for keyword in self.risk_matrix["MEDIUM_RISK"]:
            if keyword in task_lower:
                return "MEDIUM_RISK"
        
        return "LOW_RISK"
    
    def _parse_registry(self) -> List[Dict]:
        if not os.path.exists(self.registry_path):
            print(f"⚠️  Registre introuvable : {self.registry_path}")
            return []
        
        with open(self.registry_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
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
    
    def audit_tasks(self) -> Tuple[int, int]:
        print("🛡️  [GOVERNOR AUDIT ENGINE] Démarrage de la patrouille immunitaire...")
        print(f"📂 Registre : {self.registry_path}\n")
        
        tasks = self._parse_registry()
        
        if not tasks:
            print("✅  Aucune tâche DRAFT détectée. Système sain.")
            return 0, 0
        
        auto_validated = 0
        blocked = 0
        
        for task in tasks:
            risk_level = self._assess_risk(task["name"])
            
            print(f"📋 Analyse : {task['id']} - {task['name']}")
            print(f"   Niveau de risque : {risk_level}")
            
            if risk_level == "LOW_RISK":
                print(f"   ✅ AUTO-PASS : Signature Gouverneur accordée.")
                auto_validated += 1
            elif risk_level == "MEDIUM_RISK":
                print(f"   ⚠️  VALIDATION REQUISE : Risque modéré détecté.")
                blocked += 1
            else:
                print(f"   🚫 BLOCAGE CRITIQUE : Action dangereuse détectée !")
                blocked += 1
            print()
        
        print(f"{'='*60}")
        print(f"📊 RAPPORT D'AUDIT :")
        print(f"{'='*60}")
        print(f"   - Tâches auto-validées (LOW_RISK) : {auto_validated}")
        print(f"   - Tâches bloquées/en attente : {blocked}")
        print(f"   - Taux d'autonomie : {auto_validated/(auto_validated+blocked)*100:.1f}%")
        
        return auto_validated, blocked

if __name__ == "__main__":
    # Test Blanc 02 : Mode Test
    test_path = "G_GENOME_BLANK_TEST_LAB/TEST_02_GOVERNOR_VALIDATION"
    
    if os.path.exists(test_path):
        print("🧪 MODE TEST BLANC 02 ACTIVÉ\n")
        engine = GovernorAuditEngine(test_mode=True, test_path=test_path)
    else:
        print("🏭 MODE PRODUCTION\n")
        engine = GovernorAuditEngine()
    
    engine.audit_tasks()
