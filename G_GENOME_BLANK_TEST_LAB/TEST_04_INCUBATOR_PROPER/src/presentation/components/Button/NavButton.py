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
        self.setCheckable(True)
        self.setChecked(is_active)
        self.setCursor(Qt.CursorShape.PointingHandCursor)
        self.setProperty("class", "NavButton") # Hook QSS critique
