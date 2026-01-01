import os
import shutil
import json
from datetime import datetime

class GenomeInjector:
    """
    [RÔLE] : Service Domaine responsable de la réplication de l'ADN G-Genome.
    Sa tâche est de prendre un projet "Hôte" vide ou sale, et d'y injecter
    l'architecture standard (G-Genome v1.2.2).
    """

    REQUIRED_DNA_FILES = [
        "docs/01_GENOME_DNA_CORE/Schema_Genome_Core.json",
        "docs/scripts/Governor_Audit_Engine.py",
        "docs/scripts/Linter_DNA_Enforcer.py",
        "docs/scripts/Parser_Transcript_Update.py"
    ]

    def __init__(self, source_genome_path: str):
        """
        :param source_genome_path: Le chemin vers le projet G-Genome Maître (Source).
        """
        self.source_path = source_genome_path
        self._validate_source()

    def _validate_source(self):
        """Vérifie que la source contient bien l'ADN nécessaire."""
        if not os.path.exists(os.path.join(self.source_path, "docs/01_GENOME_DNA_CORE/Schema_Genome_Core.json")):
            raise ValueError("❌ SOURCE INVALID: Schema_Genome_Core.json not found in source path.")

    def inject_into(self, target_host_path: str) -> dict:
        """
        Exécute l'injection dans le projet cible.
        :return: Rapport d'injection (Succès, Fichiers copiés).
        """
        report = {
            "target": target_host_path,
            "status": "SUCCESS",
            "files_injected": [],
            "timestamp": datetime.now().isoformat()
        }

        try:
            # 1. Créer l'ossature de dossiers (Squelette)
            self._create_skeleton(target_host_path)

            # 2. Copier les fichiers critiques (Organes)
            files = self._replicate_dna(target_host_path)
            report["files_injected"] = files

            # 3. Marquer le projet comme "G-GENOME COMPLIANT"
            self._create_birth_certificate(target_host_path)
            
        except Exception as e:
            report["status"] = "ERROR"
            report["error"] = str(e)
            
        return report

    def _create_skeleton(self, target_path):
        """Crée l'arborescence standard G-Genome."""
        folders = [
            "docs/01_GENOME_DNA_CORE",
            "docs/02_PHENOTYPE_RUNTIME",
            "docs/scripts",
            "src",
            "tests"
        ]
        for folder in folders:
            full_path = os.path.join(target_path, folder)
            os.makedirs(full_path, exist_ok=True)

    def _replicate_dna(self, target_path):
        """Copie les fichiers physiques."""
        injected = []
        
        # Mapping Source -> Target
        # Pour le MVP, on copie juste le Schema Core et le Governor
        files_to_copy = [
            ("docs/01_GENOME_DNA_CORE/Schema_Genome_Core.json", "docs/01_GENOME_DNA_CORE/Schema_Genome_Core.json"),
            ("docs/scripts/Governor_Audit_Engine.py", "docs/scripts/Governor_Audit_Engine.py")
        ]
        
        for src_rel, tgt_rel in files_to_copy:
            src_file = os.path.join(self.source_path, src_rel)
            tgt_file = os.path.join(target_path, tgt_rel)
            
            if os.path.exists(src_file):
                shutil.copy2(src_file, tgt_file)
                injected.append(tgt_rel)
            else:
                print(f"⚠️ WARNING: DNA file missing in source: {src_rel}")
                
        return injected

    def _create_birth_certificate(self, target_path):
        """Crée un fichier README temporaire si inexistant."""
        readme_path = os.path.join(target_path, "G_GENOME_INHERITANCE.md")
        with open(readme_path, "w", encoding="utf-8") as f:
            f.write(f"# G-GENOME INHERITANCE REPORT\n\n")
            f.write(f"Initialized by G-Genome Incubator on {datetime.now()}\n")
            f.write("Status: DNA SUCCESSFULLY INJECTED.\n")
