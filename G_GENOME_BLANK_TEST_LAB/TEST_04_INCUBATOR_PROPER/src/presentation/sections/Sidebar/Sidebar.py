from PyQt6.QtWidgets import QFrame, QVBoxLayout, QLabel, QButtonGroup
from PyQt6.QtCore import Qt, pyqtSignal
from src.presentation.components.Button.NavButton import NavButton

class Sidebar(QFrame):
    """
    [ARCHITECTURE] : Section Module (Molecule)
    [RÔLE] : Barre de navigation latérale. Contient le Logo et le Menu.
    """
    
    # Signal pour le Layout parent (DashboardLayout)
    navigate_to = pyqtSignal(int)

    def __init__(self, parent=None):
        super().__init__(parent)
        self.setObjectName("Sidebar") # Hook QSS
        self.setFixedWidth(280)
        
        # Flex Column Layout
        self.layout = QVBoxLayout(self)
        self.layout.setContentsMargins(20, 30, 20, 30)
        self.layout.setSpacing(10)
        
        # 1. Header (Logo)
        self._build_header()
        
        # 2. Menu (Navigation)
        self._build_menu()
        
        self.layout.addStretch() # Spacer bottom

    def _build_header(self):
        brand = QLabel("🧬 G-GENOME")
        brand.setObjectName("BrandName") # Hook QSS
        brand.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.layout.addWidget(brand)
        self.layout.addSpacing(30)

    def _build_menu(self):
        self.nav_group = QButtonGroup(self)
        self.nav_group.setExclusive(True)
        
        # Définition du Menu (Données)
        menu_items = [
            ("📊 Dashboard", 0),
            ("💉 DNA Injector", 1),
            ("🛡️ Governor Audit", 2),
            ("🧬 DNA Linter", 3)
        ]
        
        for label, index in menu_items:
            btn = NavButton(label)
            # Signal Wiring
            btn.clicked.connect(lambda checked, idx=index: self.navigate_to.emit(idx))
            
            self.nav_group.addButton(btn)
            self.layout.addWidget(btn)
            
            # Default Active State
            if index == 0:
                btn.setChecked(True)
