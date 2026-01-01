from PyQt6.QtWidgets import QWidget, QHBoxLayout, QStackedWidget
from src.presentation.sections.Sidebar.Sidebar import Sidebar

class DashboardLayout(QWidget):
    """
    [ARCHITECTURE] : Page Layout (Organism)
    [RÔLE] : Squelette principal de l'application.
             Divise l'écran en deux : [ Sidebar (Fixe) | Content (Dynamique) ]
    """
    def __init__(self, parent=None):
        super().__init__(parent)

        # [SYNTAXE] Utilise 'QHBoxLayout' pour aligner les widgets horizontalement le long de l'axe X.
        # [RÔLE] Définit la structure maîtresse : la Sidebar à gauche et la zone de travail à droite.
        self.layout = QHBoxLayout(self)
        self.layout.setContentsMargins(16, 16, 16, 16) # Floating margins
        self.layout.setSpacing(20) # Gap Sidebar/Content

        # LEFT: Sidebar
        self.sidebar = Sidebar()
        self.layout.addWidget(self.sidebar)

        # [SYNTAXE] 'QStackedWidget' permet d'empiler plusieurs widgets et d'en afficher un seul à la fois.
        # [RÔLE] Agit comme un "Routeur" (Router) pour changer de vue sans recharger la fenêtre.
        self.content_stack = QStackedWidget()
        self.layout.addWidget(self.content_stack)

        # [SYNTAXE] Connecte le signal personnalisé 'navigate_to' de la Sidebar à la méthode locale.
        # [RÔLE] Établit la connexion nerveuse entre l'intention de l'utilisateur (clic) et l'action système (changement de vue).
        self.sidebar.navigate_to.connect(self.switch_view)

    def add_page(self, page_widget):
        self.content_stack.addWidget(page_widget)

    def switch_view(self, index):
        # [SYNTAXE] Appelle 'setCurrentIndex' pour basculer l'affichage vers le widget situé à l'index donné.
        # [RÔLE] Met à jour l'état visuel du Dashboard selon la section choisie par le développeur.
        self.content_stack.setCurrentIndex(index)
