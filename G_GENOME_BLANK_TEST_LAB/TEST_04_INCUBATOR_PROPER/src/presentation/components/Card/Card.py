from PyQt6.QtWidgets import (
    QFrame,
    QVBoxLayout,
    QPushButton,
    QMessageBox,
    QHBoxLayout,
    QLabel,
    QDialog,
    QTextBrowser,
)
from PyQt6.QtCore import Qt


class HelpDialog(QDialog):
    """[PHÉNOTYPE] Dialogue d'aide stylisé Bio-Tech Dark."""

    def __init__(self, title, text, parent=None):
        super().__init__(parent)
        self.setWindowTitle("🧬 G-GENOME Documentation")
        self.setMinimumSize(600, 450)
        self.setStyleSheet(
            """
            QDialog {
                background-color: #0D1117;
                border: 2px solid #30363D;
            }
            QLabel#HelpTitle {
                color: #00A3FF;
                font-family: 'Poppins', sans-serif;
                font-size: 22px;
                font-weight: 800;
                margin-bottom: 5px;
            }
            QTextBrowser {
                background-color: #161B22;
                color: #C9D1D9;
                border: 1px solid #30363D;
                border-radius: 12px;
                padding: 20px;
                font-size: 15px;
                line-height: 1.6;
            }
            QPushButton {
                background-color: #00A3FF;
                color: white;
                font-weight: bold;
                border-radius: 8px;
                padding: 10px 25px;
            }
            QPushButton:hover {
                background-color: #1F6FEB;
            }
        """
        )

        layout = QVBoxLayout(self)
        layout.setContentsMargins(25, 25, 25, 25)

        lbl_title = QLabel(f"📖 {title}")
        lbl_title.setObjectName("HelpTitle")
        layout.addWidget(lbl_title)

        browser = QTextBrowser()
        # On utilise setHtml pour permettre un rendu riche (gras, listes)
        browser.setHtml(text.replace("\n", "<br>"))
        layout.addWidget(browser)

        btn_close = QPushButton("FERMER LE GUIDE")
        btn_close.clicked.connect(self.accept)
        layout.addWidget(btn_close, alignment=Qt.AlignmentFlag.AlignRight)


class Card(QFrame):
    """
    [ARCHITECTURE] : Atomic Component (Atom)
    [RÔLE] : Conteneur visuel standard avec support d'aide contextuelle.
    """

    def __init__(self, parent=None, width=None, height=None, title=None):
        super().__init__(parent)
        self.setObjectName("Card")
        self.title = title or "Guide G-Genome"
        self.help_text = "Guide indisponible pour cette section."

        if width: self.setFixedWidth(width)
        if height: self.setFixedHeight(height)

        self.main_layout = QVBoxLayout(self)
        self.main_layout.setContentsMargins(20, 20, 20, 20)
        self.main_layout.setSpacing(15)

        # Header with Title and Help Button
        if title:
            header_layout = QHBoxLayout()
            lbl_title = QLabel(title)
            lbl_title.setObjectName("Title")
            header_layout.addWidget(lbl_title)

            header_layout.addStretch()

            self.btn_help = QPushButton("?")
            self.btn_help.setFixedSize(26, 26)
            self.btn_help.setStyleSheet(
                """
                QPushButton {
                    background-color: #30363D;
                    color: #00A3FF;
                    border-radius: 13px;
                    font-weight: bold;
                    font-size: 14px;
                    border: 1px solid #8B949E;
                }
                QPushButton:hover {
                    background-color: #00A3FF;
                    color: white;
                }
            """
            )
            self.btn_help.clicked.connect(self._show_help)
            header_layout.addWidget(self.btn_help)
            self.main_layout.addLayout(header_layout)

    def set_help(self, text):
        self.help_text = text

    def _show_help(self):
        dialog = HelpDialog(self.title, self.help_text, self)
        dialog.exec()

    def add_child(self, widget):
        self.main_layout.addWidget(widget)

    def add_layout(self, layout):
        self.main_layout.addLayout(layout)
