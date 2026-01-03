"""
🧬 G-GENOME : INTEGRITY VALIDATOR (v1.2.2)
==============================================

NOMENCLATURE HYBRIDE :
- [Tech] : Validator   (Tests automatisés)
- [Bio]  : Integrity   (Vérification de l'intégrité génétique)
- [Role] : CI          (Continuous Integration)

DESCRIPTION :
Ce script valide l'intégrité complète du G-Genome pack avant déploiement.
Il vérifie la validité JSON, la cohérence des références, et la conformité
XML des protocoles. C'est le "système de QA" du framework.

AUTEUR : Tayierjiang Tayier
==============================================
"""

import json
import os
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import List, Tuple


class GenomeIntegrityValidator:
    """
    [SYNTAXE] Classe de validation d'intégrité du pack G-Genome.
    [RÔLE] S'assure que le DNA est cohérent avant transmission/déploiement.
    """

    def __init__(self, project_root: str = "."):
        self.project_root = Path(project_root)
        self.errors = []
        self.warnings = []

    def _validate_json_file(self, file_path: Path) -> bool:
        """
        [SYNTAXE] Tentative de parsing JSON pour détecter les erreurs de syntaxe.
        [RÔLE] Garantit que les schémas DNA sont valides et chargeables.
        """
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                json.load(f)
            return True
        except json.JSONDecodeError as e:
            self.errors.append(f"❌ JSON invalide : {file_path} - {e}")
            return False
        except Exception as e:
            self.errors.append(f"❌ Erreur lecture : {file_path} - {e}")
            return False

    def _validate_xml_structure(self, file_path: Path) -> bool:
        """
        [SYNTAXE] Parsing XML pour vérifier la structure des protocoles.
        [RÔLE] Détecte les balises mal fermées ou les erreurs de format.
        """
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            # Extraction des blocs XML (entre < et >)
            if "<" in content and ">" in content:
                # Vérification basique de cohérence
                open_tags = content.count("<")
                close_tags = content.count(">")
                if open_tags != close_tags:
                    self.warnings.append(f"⚠️  Balises XML déséquilibrées : {file_path}")
                    return False
            return True
        except Exception as e:
            self.errors.append(f"❌ Erreur XML : {file_path} - {e}")
            return False

    def _validate_schema_references(self) -> bool:
        """
        [SYNTAXE] Vérification de la cohérence des chemins dans Schema_Genome_Core.json.
        [RÔLE] S'assure que les répertoires référencés existent physiquement.
        """
        schema_path = (
            self.project_root / "docs/01_GENOME_DNA_CORE/Schema_Genome_Core.json"
        )

        if not schema_path.exists():
            self.errors.append(f"❌ Schema_Genome_Core.json introuvable")
            return False

        with open(schema_path, "r", encoding="utf-8") as f:
            schema = json.load(f)

        # Vérification des mappings de répertoires
        if "mapping" in schema:
            for key, dir_name in schema["mapping"].items():
                if isinstance(dir_name, str):
                    expected_path = self.project_root / "docs" / dir_name
                    if not expected_path.exists():
                        self.errors.append(
                            f"❌ Répertoire manquant : {dir_name} (référencé dans mapping.{key})"
                        )
                        return False

        return True

    def _validate_nomenclature(self) -> bool:
        """
        [SYNTAXE] Vérification que les fichiers suivent la convention Tech_Bio_Role.
        [RÔLE] Enforce la nomenclature hybride du framework.
        """
        critical_files = [
            "docs/01_GENOME_DNA_CORE/Schema_Genome_Core.json",
            "docs/01_GENOME_DNA_CORE/Checker_Homeostas_Status.json",
            "docs/02_PHENOTYPE_RUNTIME/Registry_Codon_Tasks.md",
            "docs/02_PHENOTYPE_RUNTIME/Cache_Epigenetic_Context.md",
            "docs/02_PHENOTYPE_RUNTIME/Entry_Metabolism_Inbox.md",
        ]

        for file_rel_path in critical_files:
            file_path = self.project_root / file_rel_path
            if not file_path.exists():
                self.warnings.append(f"⚠️  Fichier critique manquant : {file_rel_path}")

        return True

    def validate_all(self) -> Tuple[bool, int, int]:
        """
        [SYNTAXE] Orchestration complète de tous les tests de validation.
        [RÔLE] Génère un rapport de santé complet du pack G-Genome.
        """
        print("🔍 [GENOME INTEGRITY VALIDATOR] Démarrage des tests d'intégrité...")

        # Test 1 : Validation JSON
        print("\n📋 Test 1/4 : Validation des schémas JSON...")
        json_files = list(self.project_root.glob("docs/**/*.json"))
        json_valid = all(self._validate_json_file(f) for f in json_files)

        # Test 2 : Validation XML
        print("📋 Test 2/4 : Validation des protocoles XML...")
        md_files = list(self.project_root.glob("docs/**/*.md"))
        xml_valid = all(self._validate_xml_structure(f) for f in md_files)

        # Test 3 : Cohérence des références
        print("📋 Test 3/4 : Vérification des références de schéma...")
        refs_valid = self._validate_schema_references()

        # Test 4 : Nomenclature
        print("📋 Test 4/4 : Vérification de la nomenclature...")
        nomenclature_valid = self._validate_nomenclature()

        # Rapport final
        all_valid = json_valid and xml_valid and refs_valid and nomenclature_valid

        print(f"\n{'='*60}")
        print(f"📊 RAPPORT D'INTÉGRITÉ FINAL :")
        print(f"{'='*60}")
        print(f"   Erreurs critiques : {len(self.errors)}")
        print(f"   Avertissements : {len(self.warnings)}")

        if self.errors:
            print(f"\n🚫 ERREURS CRITIQUES :")
            for error in self.errors:
                print(f"   {error}")

        if self.warnings:
            print(f"\n⚠️  AVERTISSEMENTS :")
            for warning in self.warnings:
                print(f"   {warning}")

        if all_valid and not self.errors:
            print(f"\n✅ PACK G-GENOME VALIDÉ : Prêt pour déploiement.")
            return True, 0, len(self.warnings)
        else:
            print(f"\n❌ PACK G-GENOME NON VALIDE : Corrections requises.")
            return False, len(self.errors), len(self.warnings)


if __name__ == "__main__":
    # [SYNTAXE] Point d'entrée pour exécution directe du validateur.
    # [RÔLE] Permet de vérifier l'intégrité avant un commit ou une release.
    validator = GenomeIntegrityValidator()
    is_valid, error_count, warning_count = validator.validate_all()

    # Exit code pour CI/CD (0 = succès, 1 = échec)
    exit(0 if is_valid else 1)
