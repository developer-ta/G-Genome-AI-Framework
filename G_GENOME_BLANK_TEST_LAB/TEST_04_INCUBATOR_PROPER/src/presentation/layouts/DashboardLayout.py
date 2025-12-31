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
        
        # Main Flex Row
        self.layout = QHBoxLayout(self)
        self.layout.setContentsMargins(16, 16, 16, 16) # Floating margins
        self.layout.setSpacing(20) # Gap Sidebar/Content
        
        # LEFT: Sidebar
        self.sidebar = Sidebar()
        self.layout.addWidget(self.sidebar)
        
        # RIGHT: Dynamic Content Stack
        self.content_stack = QStackedWidget()
        self.layout.addWidget(self.content_stack)
        
        # Connecter le Système Nerveux (Signaux)
        self.sidebar.navigate_to.connect(self.switch_view)

    def add_page(self, page_widget):
        self.content_stack.addWidget(page_widget)

    def switch_view(self, index):
        self.content_stack.setCurrentIndex(index)
