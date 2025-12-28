# 🏆 PROTOCOLE DE COLLABORATION G-GENOME (Règles d'Or)
> **Origine** : Standards d'excellence en collaboration IA/Humain (Nutriment absorbé le 2025-12-28).
> **Objectif** : Garantir une sécurité et une qualité industrielle constante à travers tous les projets.

---

## 🏛️ 1. Principes Fondamentaux (Safety First)
1. **L'Humain est le Pilote** : L'IA est un assistant. Toute action destructive ou modification structurelle nécessite une validation humaine explicite (Workflow Codon).
2. **Cycle de Vie des Tâches** : 
   - **Planification** : Définir le format de sortie (JSON/CSV) et le schéma avant de coder.
   - **Few-Shot** : Toujours fournir 2 à 5 exemples concrets avant d'attendre un résultat complexe.
   - **Validation** : Tester systématiquement les sorties sur des jeux d'exemples avant intégration.

---

## 🏗️ 2. Structure et Conventions de Sortie
Pour toute interaction complexe (génération de données, restructuration), l'IA doit respecter ce schéma de pensée :

```json
{
  "intent": "Objectif clair de la modification",
  "confidence_score": 0.0, // Taux de confiance (0 à 1)
  "actions": [
    { "type": "MODIFICATION/CREATION", "target": "chemin/file", "reason": "..." }
  ],
  "warnings": [ "Risques potentiels identifiés" ],
  "validation_criteria": [ "Comment l'humain peut vérifier que c'est correct" ]
}
```

---

## 🧪 3. Checklist du Développeur (Avant envoi à l'IA)
- [ ] L'objectif est clairement défini.
- [ ] Le format de sortie attendu est précisé.
- [ ] Des exemples (Few-shot) sont inclus si la tâche est nouvelle.
- [ ] Les contraintes métiers sont listées.
- [ ] Un plan de validation humaine est prévu.

---

## 🛡️ 4. Sécurité et Rollback
- **Sauvegarde** : Avant toute modification majeure, l'IA doit confirmer qu'un point de sauvegarde (Commit Git) existe.
- **Seuil de Confiance** : Si le `confidence_score` est < 0.8, l'IA doit demander des précisions au lieu d'agir.

---
*G-Genome : La discipline au service de la créativité.*
