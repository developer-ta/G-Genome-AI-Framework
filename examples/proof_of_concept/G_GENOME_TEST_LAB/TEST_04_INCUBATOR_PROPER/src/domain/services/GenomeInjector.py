import os
import shutil
import json
from datetime import datetime


class GenomeInjector:
    """
    [ARCHITECTURE] : Domain Service
    [RÔLE] : Orchestre la réplication de l'ADN G-Genome.
             Il ne connaît pas l'interface graphique (PyQt), il ne connaît que le filesystem.
    """

    def __init__(self, master_dna_path: str):
        # Le chemin racine du framework G-Genome (Source)
        self.master_path = master_dna_path

    def live_inject(self, target_path: str, spec_file_path: str = None):
        """
        [FONCTION] : Exécute la greffe structurelle et logique.
        """
        if not os.path.exists(target_path):
            os.makedirs(target_path)

        # 1. Création de l'arborescence standard G-Genome (Google-Friendly v1.8)
        structure = [
            "docs/01_GENOME_DNA_CORE/LAWS",
            "docs/01_GENOME_DNA_CORE/PROTOCOLS",
            "docs/01_GENOME_DNA_CORE/GUIDES",
            "docs/02_PHENOTYPE_RUNTIME/CONTEXT_SUBSTRATE",
            "docs/03_GENETIC_RELEASES",
            "docs/04_MASTER_HERITAGE_PACK",
            "docs/05_RESEARCH_CENTER",
        ]
        for folder in structure:
            # [SYNTAXE] Utilise 'os.makedirs' avec 'exist_ok=True' pour créer récursivement les dossiers.
            # [RÔLE] Prépare les compartiments cellulaires du nouveau projet selon les 4 Quadrants.
            os.makedirs(os.path.join(target_path, folder), exist_ok=True)

        # 2. Copie des fichiers vitaux (ADN)
        vital_files = [
            (
                "docs/01_GENOME_DNA_CORE/LAWS/Schema_Genome_Core.json",
                "docs/01_GENOME_DNA_CORE/LAWS/Schema_Genome_Core.json",
            ),
            (
                "docs/01_GENOME_DNA_CORE/LAWS/COLLABORATION_GOLDEN_RULES.md",
                "docs/01_GENOME_DNA_CORE/LAWS/COLLABORATION_GOLDEN_RULES.md",
            ),
            (
                "docs/03_GENETIC_RELEASES/Governor_Audit_Engine.py",
                "docs/03_GENETIC_RELEASES/Governor_Audit_Engine.py",
            ),
            (
                "docs/03_GENETIC_RELEASES/Linter_DNA_Enforcer.py",
                "docs/03_GENETIC_RELEASES/Linter_DNA_Enforcer.py",
            ),
        ]

        copied_count = 0
        for src_rel, dest_rel in vital_files:
            src = os.path.join(self.master_path, src_rel)
            dest = os.path.join(target_path, dest_rel)
            if os.path.exists(src):
                # [SYNTAXE] Utilise 'shutil.copy2' pour copier le fichier tout en préservant les métadonnées (date de création, etc.).
                # [RÔLE] Réplique physiquement le code source du framework (DNA) dans le nouvel organisme hôte.
                shutil.copy2(src, dest)
                copied_count += 1

        # 3. Injection du Cahier des Charges (Nutriments métier)
        if spec_file_path and os.path.exists(spec_file_path):
            # [SYNTAXE] Utilise 'shutil.copy2' pour copier le fichier spécifié vers CONTEXT_SUBSTRATE.
            # [RÔLE] Apporte le contexte métier nécessaire à l'IA pour commencer le développement.
            spec_dest = os.path.join(
                target_path,
                "docs/02_PHENOTYPE_RUNTIME/CONTEXT_SUBSTRATE",
                os.path.basename(spec_file_path),
            )
            shutil.copy2(spec_file_path, spec_dest)

        # 4. Création du PHENOTYPE_TRANSCRIPT (Le journal de bord du nouveau projet)
        self._create_transcript(target_path)

        return {
            "status": "SUCCESS",
            "message": f"Injection completed. {copied_count} DNA files replicated.",
            "target": target_path,
        }

    def _create_transcript(self, target_path):
        # [SYNTAXE] Construit le chemin du fichier Markdown via 'os.path.join' pour garantir la compatibilité OS (Windows/Linux).
        # [RÔLE] Initialise le registre de tâches, qui servira de mémoire active (Epigenetic) pour l'agent IA.
        transcript_path = os.path.join(
            target_path, "docs/02_PHENOTYPE_RUNTIME/Registry_Codon_Tasks.md"
        )
        if not os.path.exists(transcript_path):
            with open(transcript_path, "w", encoding="utf-8") as f:
                # [SYNTAXE] Utilise le context manager 'with' pour garantir la fermeture propre du flux d'écriture après l'opération.
                # [RÔLE] Inscrit la signature du framework pour marquer le projet comme officiellement "G-Genome Compliant".
                f.write(
                    "# REGISTRY CODON TASKS\n\n[GENESIS] : Project specialized via G-Genome Incubator.\n\n"
                )
