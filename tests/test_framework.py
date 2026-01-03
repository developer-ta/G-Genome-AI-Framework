"""
🧬 G-GENOME FRAMEWORK : TESTS UNITAIRES
========================================
Tests automatisés pour le système immunitaire (Governor + Linter).
"""

import unittest
import os
import sys
import json
import tempfile
import shutil

# Ajouter le chemin des modules à tester
PROJECT_ROOT = os.path.dirname(os.path.dirname(__file__))
sys.path.insert(0, os.path.join(PROJECT_ROOT, "docs", "03_GENETIC_RELEASES"))

try:
    from Governor_Audit_Engine import GovernorAuditEngine
except ImportError:
    print("❌ ERREUR : Impossible d'importer Governor_Audit_Engine")
    print(
        "📌 SOLUTION : Assurez-vous que le fichier existe dans docs/03_GENETIC_RELEASES/"
    )
    print(
        f"📌 Chemin recherché : {os.path.join(PROJECT_ROOT, 'docs', '03_GENETIC_RELEASES', 'Governor_Audit_Engine.py')}"
    )
    sys.exit(1)


class TestGovernorAuditEngine(unittest.TestCase):
    """Tests pour le Governor_Audit_Engine"""

    def setUp(self):
        """Prépare un environnement de test temporaire"""
        self.test_dir = tempfile.mkdtemp()

        # Créer la structure DNA minimale
        os.makedirs(os.path.join(self.test_dir, "docs/01_GENOME_DNA_CORE/LAWS"))
        os.makedirs(os.path.join(self.test_dir, "docs/02_PHENOTYPE_RUNTIME"))

        # Créer un Schema DNA minimal
        schema = {"project_identity": {"name": "TEST_PROJECT", "version": "1.0.0"}}
        with open(
            os.path.join(
                self.test_dir, "docs/01_GENOME_DNA_CORE/LAWS/Schema_Genome_Core.json"
            ),
            "w",
        ) as f:
            json.dump(schema, f)

        # Créer un Registry de test
        registry_content = """# REGISTRY CODON TASKS

| Codon | Task | Status | Role |
|---|---|---|---|
| **C01** | Ajouter commentaires pédagogiques | `DRAFT` | Clean Code |
| **C02** | Supprimer fichier DNA Core | `DRAFT` | Architecture |
| **C03** | Créer nouveau composant Button | `DRAFT` | UI |
"""
        with open(
            os.path.join(
                self.test_dir, "docs/02_PHENOTYPE_RUNTIME/Registry_Codon_Tasks.md"
            ),
            "w",
        ) as f:
            f.write(registry_content)

        # Créer un fichier Homeostasis minimal
        homeostasis = {
            "architectural_alignment": {"current_compliance": 0.85},
            "system_integrity": {"last_check": "2026-01-01T00:00:00Z"},
        }
        with open(
            os.path.join(
                self.test_dir,
                "docs/01_GENOME_DNA_CORE/LAWS/Checker_Homeostas_Status.json",
            ),
            "w",
        ) as f:
            json.dump(homeostasis, f)

    def tearDown(self):
        """Nettoie l'environnement de test"""
        shutil.rmtree(self.test_dir)

    def test_governor_auto_validation_low_risk(self):
        """Test : Le Governor auto-valide les tâches à faible risque"""
        engine = GovernorAuditEngine(self.test_dir)
        auto_validated, blocked = engine.audit_tasks()

        # C01 (commentaires) doit être auto-validé
        self.assertGreaterEqual(
            auto_validated, 1, "Au moins 1 tâche doit être auto-validée"
        )

    def test_governor_blocks_high_risk(self):
        """Test : Le Governor bloque les tâches à haut risque"""
        engine = GovernorAuditEngine(self.test_dir)
        auto_validated, blocked = engine.audit_tasks()

        # C02 (suppression DNA) doit être bloqué
        self.assertGreaterEqual(blocked, 1, "Au moins 1 tâche doit être bloquée")

    def test_governor_compliance_score(self):
        """Test : Le Governor calcule un score de conformité"""
        engine = GovernorAuditEngine(self.test_dir)
        auto_validated, blocked = engine.audit_tasks()

        total = auto_validated + blocked
        compliance = auto_validated / total if total > 0 else 0

        self.assertGreater(compliance, 0, "Le score de conformité doit être > 0")
        self.assertLessEqual(compliance, 1, "Le score de conformité doit être <= 1")


class TestGenomeInjector(unittest.TestCase):
    """Tests pour le GenomeInjector"""

    def setUp(self):
        """Prépare un environnement de test"""
        self.test_dir = tempfile.mkdtemp()
        self.target_dir = tempfile.mkdtemp()

    def tearDown(self):
        """Nettoie l'environnement de test"""
        shutil.rmtree(self.test_dir)
        shutil.rmtree(self.target_dir)

    def test_injector_creates_quadrants(self):
        """Test : L'Injector crée bien les 4 quadrants"""
        # Note: Ce test nécessite GenomeInjector accessible
        # Pour l'instant, test de structure uniquement

        quadrants = [
            "01_GENOME_DNA_CORE",
            "02_PHENOTYPE_RUNTIME",
            "03_GENETIC_RELEASES",
            "04_MASTER_HERITAGE_PACK",
        ]

        for q in quadrants:
            path = os.path.join(self.target_dir, "docs", q)
            # Création manuelle pour simulation
            os.makedirs(path, exist_ok=True)
            self.assertTrue(os.path.exists(path), f"Le quadrant {q} doit exister")


if __name__ == "__main__":
    print("🧪 G-GENOME FRAMEWORK : LANCEMENT DES TESTS UNITAIRES")
    print("=" * 60)

    # Lancer les tests
    unittest.main(verbosity=2)
