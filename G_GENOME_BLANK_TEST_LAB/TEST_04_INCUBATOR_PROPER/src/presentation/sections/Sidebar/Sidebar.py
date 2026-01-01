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
            ("🧠 The Cortex", 2),
            ("📚 Bio-Library", 3),
            ("🛡️ Immunity Logs", 4),
        ]

        for label, index in menu_items:
            # [SYNTAXE] Instancie un composant personnalisé 'NavButton' pour chaque entrée du menu.
            # [RÔLE] Crée les briques de navigation individuelle héritant du Design System.
            btn = NavButton(label)

            # [SYNTAXE] Utilise une fonction 'lambda' capturant l'index actuel ('idx=index') pour émettre le signal 'navigate_to'.
            # [RÔLE] Transforme un clic générique sur un bouton en une commande de navigation spécifique vers une page précise.
            btn.clicked.connect(lambda checked, idx=index: self.navigate_to.emit(idx))

            self.nav_group.addButton(btn)
            self.layout.addWidget(btn)

            # [SYNTAXE] Force l'état 'Checked' (activé) si l'index est 0 (la page par défaut).
            # [RÔLE] Garantit que l'utilisateur sait où il se trouve dès le démarrage de l'Incubateur.
            if index == 0:
                btn.setChecked(True)
