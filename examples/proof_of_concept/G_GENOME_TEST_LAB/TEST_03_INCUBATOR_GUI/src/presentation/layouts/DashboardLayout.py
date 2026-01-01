from PyQt6.QtWidgets import QWidget, QHBoxLayout, QStackedWidget
from src.presentation.sections.Sidebar.Sidebar import Sidebar

class DashboardLayout(QWidget):
    """
    [RÔLE] : Layout principal (Squelette de la page).
    Equivalent React : src/presentation/layouts/DashboardLayout.tsx
    Structure : [ Sidebar | ContentStack ]
    """
    def __init__(self, parent=None):
        super().__init__(parent)
        
        # Le Layout Horizontal Principal
        self.main_layout = QHBoxLayout(self)
        self.main_layout.setContentsMargins(16, 16, 16, 16) # Marges externes (flottant)
        self.main_layout.setSpacing(20) # Espace entre Sidebar et Contenu
        
        # 1. La Sidebar (Gauche)
        self.sidebar = Sidebar()
        self.main_layout.addWidget(self.sidebar)
        
        # 2. La Stack de Contenu (Droite - Dynamique)
        self.content_stack = QStackedWidget()
        self.main_layout.addWidget(self.content_stack)
        
        # Connecter la Sidebar au changement de page
        self.sidebar.navigation_signal.connect(self.switch_content)

    def add_page(self, widget):
        """[RÔLE] : Ajoute une page au stack de droite."""
        self.content_stack.addWidget(widget)

    def switch_content(self, index):
        """[RÔLE] : Change la page visible."""
        self.content_stack.setCurrentIndex(index)
