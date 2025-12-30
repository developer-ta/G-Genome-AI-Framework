"""
🧬 G-GENOME : PARSER TRANSCRIPT UPDATE (v1.2.2)
==============================================

NOMENCLATURE HYBRIDE :
- [Tech] : Parser      (Analyse et traite les données)
- [Bio]  : Transcript  (Simule le passage de l'ARN au DNA - l'apprentissage)
- [Role] : Update      (Met à jour le cœur du système)

DESCRIPTION :
Ce script est la manifestation technique de la "Transcription Inverse".
Dans le vivant, c'est le processus où une information temporaire (ARN)
est gravée dans le patrimoine génétique (DNA). Ici, le script lit les
succès enregistrés dans le "Cache Epigenetic" pour mettre à jour la
loi centrale du projet (Schema Genome Core).

AUTEUR : Tayierjiang Tayier
==============================================
"""

import json
import os

def harvest_experience():
    """
    Fonction principale de 'Récolte'.
    Simule le mécanisme de rétroaction (Feedback Loop) essentiel.
    """

    # [SYNTAXE] Définition des variables de chemin de fichiers (Strings) pointant vers les ressources locales.
    # [RÔLE] Identifie la source de la mémoire (Cache) et la destination de la loi (Genome) pour l'opération de transcription.
    cache_path = "docs/02_PHENOTYPE_RUNTIME/Cache_Epigenetic_Context.md"
    genome_path = "docs/01_GENOME_DNA_CORE/Schema_Genome_Core.json"

    print(f"--- [DEBUT DE LA TRANSCRIPTION INVERSE] ---")

    # [SYNTAXE] Utilise 'os.path.exists()' pour vérifier la présence physique du fichier sur le disque avant toute lecture.
    # [RÔLE] S'assure qu'une expérience (Phénotype) a bien été vécue et enregistrée avant de tenter d'en extraire des leçons.
    if os.path.exists(cache_path):
        print(f"LECTURE DE L'EXPÉRIENCE : {cache_path}")

        # [SYNTAXE] Création d'une liste de chaînes de caractères simulant les données extraites par une analyse sémantique.
        # [RÔLE] Représente les "Gènes de succès" (Best Practices) que l'IA a validés durant le projet actuel.
        success_patterns = [
            "Application de la Clean Architecture",
            "Découplage des Hooks React (useHeader)",
        ]
        print(f"PATTERNS DÉTECTÉS (Gènes de succès) : {success_patterns}")

        # [SYNTAXE] Vérification de l'existence du fichier DNA avant modification.
        # [RÔLE] Évite les erreurs si le schéma n'a pas encore été initialisé.
        if os.path.exists(genome_path):
            # [SYNTAXE] Ouverture du fichier JSON en mode lecture/écriture ('r+').
            # [RÔLE] Permet de charger, modifier et persister le DNA en une seule opération.
            with open(genome_path, "r+", encoding="utf-8") as f:
                genome = json.load(f)

                # [SYNTAXE] Ajout d'une nouvelle clé 'learned_patterns' dans le dictionnaire JSON.
                # [RÔLE] Grave l'expérience du projet actuel dans le DNA pour transmission aux futurs projets.
                if "learned_patterns" not in genome:
                    genome["learned_patterns"] = []

                genome["learned_patterns"].extend(success_patterns)

                # [SYNTAXE] Réinitialisation du curseur de fichier à la position 0.
                # [RÔLE] Prépare l'écriture complète du JSON mis à jour.
                f.seek(0)
                json.dump(genome, f, indent=2, ensure_ascii=False)
                f.truncate()

            print(f"✅ MISE À JOUR DU GÉNOME RÉUSSIE : {genome_path}")
        else:
            print(f"⚠️  Schéma DNA introuvable. Transcription annulée.")

        # Note technique : C'est ici que l'intelligence devient cumulative.
        # Le prochain projet héritera de ces "success_patterns" automatiquement.

    else:
        print(f"⚠️  Aucune expérience trouvée dans : {cache_path}")

    print(
        f"--- [TRANSCRIPTION TERMINÉE : DNA v1.2.2 EST PRÊT POUR LA TRANSMISSION] ---"
    )

if __name__ == "__main__":
    # [SYNTAXE] Bloc standard Python vérifiant si le script est exécuté directement (et non importé comme module).
    # [RÔLE] Point d'entrée sécurisé pour déclencher la récolte manuellement par le développeur.
    harvest_experience()
