from PyQt6.QtWidgets import QFrame, QVBoxLayout, QLabel, QPushButton, QButtonGroup
from PyQt6.QtCore import Qt, pyqtSignal

class Sidebar(QFrame):
    """
    [RÔLE] : Barre de navigation latérale (Gauche).
    Equivalent React : src/presentation/sections/Sidebar/Sidebar.tsx
    """
    
    # Signal émis quand on change de page (Index de la page)
    navigation_signal = pyqtSignal(int)

    def __init__(self, parent=None):
        super().__init__(parent)
        self.setObjectName("Sidebar") # Pour le style QSS
        self.setFixedWidth(280)
        
        # Layout interne de la sidebar
        self.layout = QVBoxLayout(self)
        self.layout.setContentsMargins(20, 30, 20, 30) # Padding interne
        self.layout.setSpacing(10)
        
        self.setup_header()
        self.setup_navigation()
        self.layout.addStretch() # Pousse tout vers le haut

    def setup_header(self):
        """[RÔLE] : Affiche le Logo et le Nom de la marque."""
        brand_label = QLabel("🧬 G-GENOME")
        brand_label.setObjectName("BrandName")
        brand_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.layout.addWidget(brand_label)
        self.layout.addSpacing(30)

    def setup_navigation(self):
        """[RÔLE] : Crée les boutons de navigation."""
        self.nav_group = QButtonGroup(self)
        self.nav_group.setExclusive(True)
        
        # Liste des pages (Titre, Index)
        pages = [
            ("📊 Dashboard", 0),
            ("💉 DNA Injector", 1),
            ("🛡️ Governor Audit", 2),
            ("🧬 DNA Linter", 3)
        ]
        
        for title, index in pages:
            btn = self.create_nav_button(title, index)
            self.layout.addWidget(btn)
            # Activer le premier bouton par défaut
            if index == 0:
                btn.setChecked(True)

    def create_nav_button(self, text, index):
        """[RÔLE] : Factory pour créer un bouton stylisé."""
        btn = QPushButton(text)
        btn.setCheckable(True)
        btn.setProperty("class", "NavButton") # Selecteur CSS
        btn.clicked.connect(lambda: self.navigation_signal.emit(index))
        self.nav_group.addButton(btn)
        return btn
