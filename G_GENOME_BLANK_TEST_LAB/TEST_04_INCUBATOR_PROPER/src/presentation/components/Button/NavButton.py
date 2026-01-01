from PyQt6.QtWidgets import QPushButton
from PyQt6.QtCore import Qt

class NavButton(QPushButton):
    """
    [ARCHITECTURE] : Atomic Component (Atom)
    [RÔLE] : Bouton de navigation pour la Sidebar.
             Miroir du style '.nav-item' de React.
    """
    def __init__(self, text, parent=None, is_active=False):
        super().__init__(text, parent)
        # [SYNTAXE] Active le mode 'Checkable' pour que le bouton garde son état enfoncé/activé après le clic.
        # [RÔLE] Simule l'état 'Active' du router React pour montrer quelle section est consultée.
        self.setCheckable(True)
        self.setChecked(is_active)

        # [SYNTAXE] Change le curseur en pointeur (main) lors du survol.
        # [RÔLE] Améliore l'Affordance visuelle pour indiquer clairement que l'élément est cliquable.
        self.setCursor(Qt.CursorShape.PointingHandCursor)

        # [SYNTAXE] Utilise 'setProperty' pour injecter une classe CSS virtuelle nommée 'NavButton'.
        # [RÔLE] Permet au moteur de style QSS de cibler spécifiquement ces boutons sans affecter les boutons standards.
        self.setProperty("class", "NavButton")
