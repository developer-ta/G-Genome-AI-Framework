from PyQt6.QtWidgets import QFrame, QVBoxLayout
from PyQt6.QtCore import Qt

class Card(QFrame):
    """
    [RÔLE] : Composant atomique de base (Cellule Blanche).
    Equivalent React : src/presentation/components/Card/Card.tsx
    """
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setObjectName("Card") # Pour le QSS
        
        # Layout interne par défaut (Vertical)
        self.layout = QVBoxLayout(self)
        self.layout.setContentsMargins(20, 20, 20, 20) # Padding interne de la carte
        self.layout.setSpacing(15)
    
    def add_widget(self, widget):
        self.layout.addWidget(widget)
        
    def add_layout(self, layout):
        self.layout.addLayout(layout)
