import sys
import os
from PyQt6.QtWidgets import (
    QApplication,
    QMainWindow,
    QLabel,
    QWidget,
    QVBoxLayout,
    QFrame,
    QPushButton,
    QLineEdit,
    QHBoxLayout,
    QFileDialog,
)
from PyQt6.QtCore import Qt, QFile, QTextStream

# Import Architecture Components
from src.presentation.layouts.DashboardLayout import DashboardLayout
from src.presentation.components.Card.Card import Card


class IncubatorApp(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("G-Genome Incubator v2.0 (Architectured)")
        self.resize(1024, 768)

        # Le Layout Principal
        self.dashboard = DashboardLayout()
        self.setCentralWidget(self.dashboard)

        # --- CREATION DES PAGES ---
        self.dashboard.add_page(self.create_home_page())  # Index 0
        self.dashboard.add_page(self.create_injector_page())  # Index 1
        self.dashboard.add_page(self.create_placeholder("🛡️ Governor Audit"))  # Index 2
        self.dashboard.add_page(self.create_placeholder("🧬 DNA Linter"))  # Index 3

        # Chargement du Thème
        self.load_theme()

    def load_theme(self):
        qss_file = QFile("theme.qss")
        if qss_file.open(QFile.OpenModeFlag.ReadOnly | QFile.OpenModeFlag.Text):
            stream = QTextStream(qss_file)
            qss = stream.readAll()
            # Patch pour compatibilité sélecteur
            qss = qss.replace(".NavButton", "QPushButton[class='NavButton']")
            self.setStyleSheet(qss)

    # --- PAGES BUILDERS (A terme, à déplacer dans des fichiers séparés) ---

    def create_home_page(self):
        page = QWidget()
        layout = QVBoxLayout(page)
        layout.setAlignment(Qt.AlignmentFlag.AlignCenter)

        card = Card()
        card.setFixedSize(600, 300)

        title = QLabel("Welcome to G-Genome Incubator")
        title.setObjectName("Title")
        title.setAlignment(Qt.AlignmentFlag.AlignCenter)

        subtitle = QLabel("Select 'DNA Injector' from the sidebar to begin.")
        subtitle.setObjectName("Subtitle")
        subtitle.setAlignment(Qt.AlignmentFlag.AlignCenter)

        card.add_widget(title)
        card.add_widget(subtitle)

        layout.addWidget(card)
        return page

    def create_injector_page(self):
        page = QWidget()
        layout = QVBoxLayout(page)
        layout.setAlignment(Qt.AlignmentFlag.AlignCenter)

        card = Card()
        card.setFixedSize(600, 400)

        title = QLabel("💉 DNA INJECTOR")
        title.setObjectName("Title")
        card.add_widget(title)

        # Input Logic
        path_input = QLineEdit()
        path_input.setPlaceholderText("Select Host Project Folder...")
        self.injector_path_input = path_input  # Keep ref

        browse_btn = QPushButton("Browse")
        browse_btn.clicked.connect(self.browse_folder_action)

        h_layout = QHBoxLayout()
        h_layout.addWidget(path_input)
        h_layout.addWidget(browse_btn)
        card.add_layout(h_layout)

        # Status & Action
        self.injector_status = QLabel("Waiting for target...")
        card.add_widget(self.injector_status)

        self.inject_btn = QPushButton("START INJECTION")
        self.inject_btn.setDisabled(True)
        self.inject_btn.clicked.connect(self.run_injection_simulation)
        card.add_widget(self.inject_btn)

        layout.addWidget(card)
        return page

    def create_placeholder(self, text):
        lbl = QLabel(text)
        lbl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        return lbl

    # --- LOGIC ACTIONS ---

    def browse_folder_action(self):
        folder = QFileDialog.getExistingDirectory(self, "Select Host Project")
        if folder:
            self.injector_path_input.setText(folder)
            self.injector_status.setText(f"Target Selected: {os.path.basename(folder)}")
            self.inject_btn.setDisabled(False)

    def run_injection_simulation(self):
        self.injector_status.setText("💉 Injections in progress... (Simulation)")
        self.injector_status.setStyleSheet("color: green; font-weight: bold;")


if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = IncubatorApp()
    window.show()
    sys.exit(app.exec())
