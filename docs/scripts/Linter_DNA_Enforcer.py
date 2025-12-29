"""
🧬 G-GENOME : DNA LINTER (v1.2.2)
==============================================

NOMENCLATURE HYBRIDE : 
- [Tech] : Linter      (Validation statique de code)
- [Bio]  : DNA         (Vérification de conformité génétique)
- [Role] : Enforcer    (Application stricte des lois)

DESCRIPTION :
Ce script scanne le code généré pour détecter les violations de la
Clean Architecture. Il met à jour le Checker_Homeostas_Status.json
avec le score réel de conformité (compliance dynamique).

AUTEUR : ARCHITECTE & IA_AGENT
==============================================
"""

import os
import json
import re
from pathlib import Path
from typing import List, Dict

class DNALinterEnforcer:
    """
    [SYNTAXE] Classe de validation architecturale automatique.
    [RÔLE] Détecte les violations du DNA (imports interdits, structure incorrecte).
    """
    
    def __init__(self, project_root: str = "."):
        self.project_root = Path(project_root)
        self.homeostasis_path = "docs/01_GENOME_DNA_CORE/Checker_Homeostas_Status.json"
        
        # [SYNTAXE] Définition des règles de violation (Forbidden Patterns).
        # [RÔLE] Liste les "mutations génétiques" interdites par le DNA.
        self.violations_rules = {
            "FETCH_IN_COMPONENT": {
                "pattern": r"fetch\s*\(",
                "paths": ["**/presentation/**/*.tsx", "**/presentation/**/*.ts"],
                "message": "Appel fetch() détecté dans la couche Presentation (violation Clean Arch)"
            },
            "DOMAIN_IMPORT_INFRA": {
                "pattern": r"from\s+['\"].*infrastructure",
                "paths": ["**/domain/**/*.ts"],
                "message": "Import d'Infrastructure dans Domain (violation de dépendance)"
            },
            "PRESENTATION_IMPORT_INFRA": {
                "pattern": r"from\s+['\"].*infrastructure",
                "paths": ["**/presentation/**/*.tsx", "**/presentation/**/*.ts"],
                "message": "Import direct d'Infrastructure dans Presentation (manque de Port)"
            }
        }
        
        self.violations_found = []
    
    def _scan_file(self, file_path: Path, rule_name: str, rule: Dict):
        """
        [SYNTAXE] Lecture et analyse d'un fichier via regex.
        [RÔLE] Détecte les "pathogènes" (code non-conforme) dans le fichier.
        """
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            matches = re.finditer(rule["pattern"], content)
            for match in matches:
                line_num = content[:match.start()].count('\n') + 1
                self.violations_found.append({
                    "file": str(file_path.relative_to(self.project_root)),
                    "line": line_num,
                    "rule": rule_name,
                    "message": rule["message"]
                })
        except Exception as e:
            print(f"⚠️  Erreur lors du scan de {file_path}: {e}")
    
    def _update_homeostasis(self, compliance_score: float):
        """
        [SYNTAXE] Mise à jour du fichier de santé avec le score réel.
        [RÔLE] Persiste l'état de conformité pour surveillance continue.
        """
        homeostasis_full_path = self.project_root / self.homeostasis_path
        
        if not homeostasis_full_path.exists():
            print(f"⚠️  Checker Homeostasis introuvable : {homeostasis_full_path}")
            return
        
        with open(homeostasis_full_path, 'r+', encoding='utf-8') as f:
            homeostasis = json.load(f)
            homeostasis["architectural_alignment"]["current_compliance"] = compliance_score
            homeostasis["architectural_alignment"]["violations"] = [
                f"{v['file']}:{v['line']} - {v['rule']}" for v in self.violations_found[:5]
            ]
            
            f.seek(0)
            json.dump(homeostasis, f, indent=2, ensure_ascii=False)
            f.truncate()
    
    def lint_project(self) -> float:
        """
        [SYNTAXE] Fonction principale orchestrant le scan complet.
        [RÔLE] Patrouille le code source et calcule le score de santé.
        """
        print("🔬 [DNA LINTER] Démarrage de l'analyse de conformité...")
        
        total_files_scanned = 0
        
        for rule_name, rule in self.violations_rules.items():
            for path_pattern in rule["paths"]:
                for file_path in self.project_root.glob(path_pattern):
                    if file_path.is_file():
                        self._scan_file(file_path, rule_name, rule)
                        total_files_scanned += 1
        
        # [SYNTAXE] Calcul du score de conformité (1.0 = parfait, 0.0 = catastrophique).
        # [RÔLE] Quantifie la "santé génétique" du projet.
        if total_files_scanned == 0:
            compliance_score = 1.0
        else:
            # Pénalité de 0.1 par violation, minimum 0.0
            compliance_score = max(0.0, 1.0 - (len(self.violations_found) * 0.1))
        
        self._update_homeostasis(compliance_score)
        
        print(f"\n📊 RAPPORT DE CONFORMITÉ DNA :")
        print(f"   - Fichiers scannés : {total_files_scanned}")
        print(f"   - Violations détectées : {len(self.violations_found)}")
        print(f"   - Score de conformité : {compliance_score:.2f}")
        
        if self.violations_found:
            print(f"\n🚫 VIOLATIONS CRITIQUES :")
            for v in self.violations_found[:10]:  # Limite à 10 pour lisibilité
                print(f"   - {v['file']}:{v['line']} → {v['message']}")
        else:
            print(f"\n✅ Aucune violation détectée. DNA respecté.")
        
        return compliance_score

if __name__ == "__main__":
    # [SYNTAXE] Point d'entrée pour exécution directe du linter.
    # [RÔLE] Permet au développeur de vérifier la santé du projet manuellement.
    linter = DNALinterEnforcer()
    linter.lint_project()
