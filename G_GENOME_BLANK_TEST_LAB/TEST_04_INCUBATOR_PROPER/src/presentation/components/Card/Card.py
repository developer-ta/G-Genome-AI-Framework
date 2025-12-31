from PyQt6.QtWidgets import QFrame, QVBoxLayout
from PyQt6.QtCore import Qt

class Card(QFrame):
    """
    [ARCHITECTURE] : Atomic Component (Atom)
    [RÔLE] : Conteneur visuel standard (Fond blanc, Ombres, Arrondis).
             Réplique exacte du composant React 'Card' en PyQt6.
    """
    def __init__(self, parent=None, width=None, height=None):
        super().__init__(parent)
        self.setObjectName("Card")  # Hook pour le QSS (Style System)
        
        # Dimensions optionnelles (comme props en React)
        if width: self.setFixedWidth(width)
        if height: self.setFixedHeight(height)
        
        # Layout Interne (Children Container)
        self.layout = QVBoxLayout(self)
        self.layout.setContentsMargins(20, 20, 20, 20) # Padding standard
        self.layout.setSpacing(15) # Gap standard
        
    def add_child(self, widget):
        """Equivalent de {children} en React"""
        self.layout.addWidget(widget)

    def add_layout(self, layout):
        self.layout.addLayout(layout)
