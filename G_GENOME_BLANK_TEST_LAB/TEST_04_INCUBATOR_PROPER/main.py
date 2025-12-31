import sys
import os
from PyQt6.QtWidgets import QApplication, QMainWindow, QLabel, QWidget, QVBoxLayout
from PyQt6.QtCore import QFile, QTextStream, Qt

# [ARCHITECTURE] Import Layouts & Components
from src.presentation.layouts.DashboardLayout import DashboardLayout
from src.presentation.components.Card.Card import Card

class IncubatorApp(QMainWindow):
    """
    [ARCHITECTURE] : Entry Point (Main Window)
    [RÔLE] : Initialise le contexte de l'application et charge le thème global.
    """
    def __init__(self):
        super().__init__()
        self.setWindowTitle("G-GENOME INCUBATOR v2.2 (Official Architecture)")
        self.resize(1024, 768)
        
        # 1. Charger le Thème (Phénotype)
        self._load_theme()
        
        # 2. Initialiser le Layout Principal (Organisme)
        self.dashboard = DashboardLayout()
        self.setCentralWidget(self.dashboard)
        
        # 3. Injecter les Pages (Vues)
        self.dashboard.add_page(self._create_home_view())
        self.dashboard.add_page(self._create_injector_view())
        self.dashboard.add_page(self._create_placeholder("🛡️ Governor Audit"))
        self.dashboard.add_page(self._create_placeholder("🧬 DNA Linter"))

    def _load_theme(self):
        # Chemin relatif vers config/theme.qss
        theme_path = os.path.join(os.path.dirname(__file__), "src/presentation/config/theme.qss")
        qss_file = QFile(theme_path)
        if qss_file.open(QFile.OpenModeFlag.ReadOnly | QFile.OpenModeFlag.Text):
            stream = QTextStream(qss_file)
            qss = stream.readAll()
            # Patch dynamique pour les sélecteurs custom
            qss = qss.replace(".NavButton", "QPushButton[class='NavButton']")
            self.setStyleSheet(qss)
        else:
            print(f"⚠️ WARNING: Theme not found at {theme_path}")

    def _create_home_view(self):
        page = QWidget()
        layout = QVBoxLayout(page)
        layout.setAlignment(Qt.AlignmentFlag.AlignCenter)
        
        card = Card()
        card.setFixedSize(600, 300)
        
        title = QLabel("Welcome to G-Genome Incubator")
        title.setObjectName("Title")
        title.setAlignment(Qt.AlignmentFlag.AlignCenter)
        
        card.add_child(title)
        layout.addWidget(card)
        return page

    def _create_injector_view(self):
         page = QWidget()
         layout = QVBoxLayout(page)
         layout.setAlignment(Qt.AlignmentFlag.AlignCenter)
         
         card = Card()
         card.setFixedSize(600, 400)
         title = QLabel("💉 DNA INJECTOR")
         title.setObjectName("Title")
         card.add_child(title)
         
         layout.addWidget(card)
         return page

    def _create_placeholder(self, text):
        lbl = QLabel(text)
        lbl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        return lbl

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = IncubatorApp()
    window.show()
    sys.exit(app.exec())
