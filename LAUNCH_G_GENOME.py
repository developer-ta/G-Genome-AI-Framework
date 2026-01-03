import os
import sys
import subprocess

def launch():
    print("🧬 G-GENOME FRAMEWORK v2.3 - SOVEREIGN LAUNCHER")
    print("-----------------------------------------------")
    
    # Chemin vers l'Orchestrateur (toujours indexé sur la version stable)
    orchestrator_path = os.path.join(
        os.path.dirname(__file__), 
        "docs/04_MASTER_HERITAGE_PACK/G_GENOME_V2.0_SOVEREIGN_RELEASE/ORCHESTRATOR/main.py"
    )
    
    if os.path.exists(orchestrator_path):
        print(f"🚀 Démarrage de l'Interface Souveraine...")
        try:
            subprocess.run([sys.executable, orchestrator_path])
        except Exception as e:
            print(f"❌ Erreur lors du lancement : {e}")
    else:
        print(f"⚠️ Erreur : Orchestrateur introuvable à {orchestrator_path}")
        print("Vérifiez l'intégrité de votre installation G-Genome.")

if __name__ == "__main__":
    launch()
