import sys
import os
import json
from PyQt6.QtWidgets import (
    QApplication,
    QMainWindow,
    QLabel,
    QWidget,
    QVBoxLayout,
    QHBoxLayout,
    QLineEdit,
    QTextEdit,
    QPushButton,
    QFileDialog,
    QMessageBox,
    QStackedWidget,
    QListWidget,
    QPlainTextEdit,
    QProgressBar,
    QFrame,
    QComboBox,
    QTextBrowser,
)
from PyQt6.QtCore import Qt, QFile, QTextStream, QTimer
from PyQt6.QtGui import QIcon, QFont

# [ARCHITECTURE] Imports Miroir
from src.presentation.layouts.DashboardLayout import DashboardLayout
from src.presentation.components.Card.Card import Card
from src.domain.services.GenomeInjector import GenomeInjector

class IncubatorApp(QMainWindow):
    """
    [ARCHITECTURE] : Entry Point (Main Window)
    [RÔLE] : Orchestrateur G-Genome v1.7.
    """
    def __init__(self):
        super().__init__()
        self.setWindowTitle("G-GENOME ORCHESTRATOR v1.7")
        self.resize(1200, 850)

        # 1. Chemins des Synapses (Communication Filesystem)
        self.tmp_path = os.path.join(os.path.dirname(__file__), "tmp")
        os.makedirs(self.tmp_path, exist_ok=True)
        self.file_input = os.path.join(self.tmp_path, "input_brut.tmp")
        self.file_todo = os.path.join(self.tmp_path, "todo.json")
        self.file_logs = os.path.join(self.tmp_path, "execution_logs.txt")
        self.file_immune = os.path.join(self.tmp_path, "immune_report.json")

        # 2. Initialisation du Service
        self.master_path = (
            r"c:\Users\ntpar\Dev_IT\OpenClassRoom Projet\renovénergie mini projet_15"
        )
        self.injector = GenomeInjector(self.master_path)

        # 3. Charger le Thème (Phénotype Bio-Tech Dark)
        self._load_theme()

        # 4. Layout Principal
        self.dashboard = DashboardLayout()
        self.setCentralWidget(self.dashboard)

        # 5. Création des Vues
        self.dashboard.add_page(self._view_home())  # Index 0
        self.dashboard.add_page(self._view_injector())  # Index 1
        self.dashboard.add_page(self._view_cortex())  # Index 2
        self.dashboard.add_page(self._view_library())  # Index 3
        self.dashboard.add_page(self._view_logs())  # Index 4
        self.dashboard.add_page(self._view_success())  # Index 5
        self.dashboard.add_page(self._view_genesis())  # Index 6

        # 6. Vérification d'Intégrité (Sécurité G-Genome)
        self._verify_integrity()

        # 7. Activation du Pont Synaptique (Polling)
        self.timer = QTimer()
        self.timer.timeout.connect(self._synaptic_polling)
        self.timer.start(1000)

    def _verify_integrity(self):
        """[RÔLE] S'assure que les piliers du projet sont présents au démarrage."""
        critical_files = [
            "docs/01_GENOME_DNA_CORE/LAWS/Schema_Genome_Core.json",
            "docs/01_GENOME_DNA_CORE/LAWS/COLLABORATION_GOLDEN_RULES.md",
            "docs/03_GENETIC_RELEASES/Governor_Audit_Engine.py",
        ]
        missing = []
        for f in critical_files:
            full_path = os.path.join(
                self.master_path, "G_GENOME_BLANK_TEST_LAB/TEST_04_INCUBATOR_PROPER", f
            )
            if not os.path.exists(full_path):
                missing.append(f)

        if missing:
            msg = (
                f"🧬 ANOMALIE DÉTECTÉE !\n\nCertains fichiers DNA sont manquants ou déraillés :\n"
                + "\n".join(missing)
            )
            QMessageBox.warning(self, "🛡️ IMMUNE SYSTEM ALERT", msg)

    def _load_theme(self):
        theme_path = os.path.join(os.path.dirname(__file__), "src/presentation/config/theme.qss")
        qss_file = QFile(theme_path)
        if qss_file.open(QFile.OpenModeFlag.ReadOnly | QFile.OpenModeFlag.Text):
            self.setStyleSheet(
                qss_file.readAll()
                .data()
                .decode("utf-8")
                .replace(".NavButton", "QPushButton[class='NavButton']")
            )

    # --- VIEWS (Les Phénotypes) ---

    def _view_home(self):
        # [SYNTAXE] Utilise un 'QHBoxLayout' pour créer une structure en deux colonnes (Dashboard moderne).
        # [RÔLE] Présente l'identité du projet et le guide du cycle de vie à l'utilisateur dès l'ouverture.
        page = QWidget()
        layout = QVBoxLayout(page)
        dash_layout = QHBoxLayout()

        # COLUMN 1: Introduction
        intro_card = Card(width=580, height=580, title="🧬 G-GENOME ORCHESTRATOR")

        # [SYNTAXE] Titre plus explicite pour le Dashboard
        intro_card.set_help("Bienvenue. Choisissez votre mode de démarrage ci-dessous.")

        subtitle = QLabel("Artificial Intelligence Context Engineering")
        subtitle.setObjectName("Subtitle")

        # [SYNTAXE] Zone de boutons d'action rapide (Quick Actions)
        # [RÔLE] Guide l'utilisateur vers les différents modes d'initialisation (Genesis vs Injector).
        actions_frame = QFrame()
        actions_layout = QVBoxLayout(actions_frame)

        btn_bootstrap = QPushButton("🚀 PROJECT BOOTSTRAP (AI ASSISTED)")
        btn_bootstrap.setObjectName("ActionButton")
        btn_bootstrap.setFixedHeight(50)
        btn_bootstrap.clicked.connect(lambda: self.dashboard.switch_view(6))

        btn_manual = QPushButton("💉 MANUAL INJECTION (EXPERT)")
        btn_manual.setObjectName("SecondaryButton")
        btn_manual.setFixedHeight(40)
        btn_manual.clicked.connect(lambda: self.dashboard.switch_view(1))

        actions_layout.addWidget(btn_bootstrap)
        actions_layout.addWidget(btn_manual)

        # [SYNTAXE] Ajout des boutons d'aide distincts
        help_layout = QHBoxLayout()
        btn_guide = QPushButton("📘 OPEN GUIDE")
        btn_guide.setFixedHeight(30)
        btn_guide.clicked.connect(lambda: self.dashboard.switch_view(3))

        btn_help = QPushButton("❓ HELP")
        btn_help.setFixedHeight(30)
        btn_help.clicked.connect(
            lambda: QMessageBox.information(
                self, "Help", "Select a mode to initialize your project."
            )
        )

        help_layout.addWidget(btn_guide)
        help_layout.addWidget(btn_help)
        actions_layout.addLayout(help_layout)

        intro_text = QLabel(
            "Transformation d'idées brutes en architectures logicielles validées.\n\n"
            "Centralise la gestion de l'ADN (Lois) et du Phénotype (État réel)."
        )
        intro_text.setWordWrap(True)
        intro_text.setStyleSheet(
            "font-size: 15px; color: #C9D1D9; line-height: 1.6; margin-bottom: 20px;"
        )

        intro_card.add_child(subtitle)
        intro_card.add_child(intro_text)
        intro_card.add_child(actions_frame)

        dash_layout.addWidget(intro_card)

        # COLUMN 2: Guide
        guide_card = Card(width=500, height=580, title="📚 THE LIFECYCLE GUIDE")
        lifecycle_content = QTextBrowser()
        lifecycle_content.setStyleSheet("background: transparent; border: none;")
        lifecycle_content.setHtml(
            "<h3>Phase 0 : Genesis</h3><p>Transformez une idée vague en ADN solide grâce à l'Architecte IA.</p>"
            "<h3>Phase 1 : DNA Injection</h3><p>Créez le squelette.</p>"
            "<h3>Phase 2 : Gestation</h3><p>Métabolisez votre idée.</p>"
        )
        guide_card.add_child(lifecycle_content)
        dash_layout.addWidget(guide_card)

        layout.addLayout(dash_layout)
        return page

    def _view_genesis(self):
        # [SYNTAXE] Vue dédiée au 'Genesis Lab' (Zone de conception initiale).
        # [RÔLE] Permet à l'utilisateur de générer son ADN de projet via un prompt expert (Bootstrap d'immunité).
        page = QWidget()
        layout = QVBoxLayout(page)

        card = Card(width=900, height=600, title="🧪 GENESIS LAB (Idea Incubator)")
        card.set_help(
            "GENESIS MODE :\n\n- Step 1: Décrivez votre projet ici.\n- Step 2: Cliquez 'Generate Prompt'.\n- Step 3: Collez le résultat dans votre Agent IA (ChatGPT/Copilot) pour obtenir votre ADN."
        )

        # Input Zone
        lbl_input = QLabel("1. DESCRIBE YOUR PROJECT IDEA:")
        lbl_input.setStyleSheet("color: #8B949E; font-weight: bold; margin-top: 10px;")

        self.genesis_input = QTextEdit()
        self.genesis_input.setPlaceholderText(
            "Example: 'I want a secure extensive E-Commerce platform for B2B shoes with Python Backend...'"
        )
        self.genesis_input.setStyleSheet(
            "background-color: #0D1117; color: #C9D1D9; border: 1px solid #30363D; padding: 10px;"
        )

        # Action Button
        btn_gen = QPushButton("✨ GENERATE IMMUNITY PROMPT")
        btn_gen.setObjectName("ActionButton")
        btn_gen.setFixedHeight(50)
        btn_gen.clicked.connect(self._action_generate_genesis_prompt)

        # Output/Instruction Zone
        lbl_output = QLabel("2. YOUR ARCHITECT PROMPT (Ready to Copy):")
        lbl_output.setStyleSheet("color: #8B949E; font-weight: bold; margin-top: 20px;")

        self.genesis_output = QTextEdit()
        self.genesis_output.setReadOnly(True)
        self.genesis_output.setStyleSheet(
            "background-color: #010409; color: #58A6FF; font-family: 'Consolas'; border: 1px dashed #30363D;"
        )

        btn_copy = QPushButton("📋 COPY TO CLIPBOARD")
        btn_copy.setObjectName("SecondaryButton")
        btn_copy.clicked.connect(self._copy_genesis_clipboard)

        card.add_child(lbl_input)
        card.add_child(self.genesis_input)
        card.add_child(btn_gen)
        card.add_child(lbl_output)
        card.add_child(self.genesis_output)
        card.add_child(btn_copy)

        layout.addWidget(card)
        layout.setAlignment(Qt.AlignmentFlag.AlignCenter)
        return page

    def _action_generate_genesis_prompt(self):
        # [SYNTAXE] Lecture du Template Maître et injection de l'idée utilisateur.
        # [RÔLE] Crée le prompt final que l'utilisateur donnera à son LLM.
        user_idea = self.genesis_input.toPlainText()
        if not user_idea.strip():
            QMessageBox.warning(
                self, "Input Empty", "Please describe your project first."
            )
            return

        # Load Template
        template_path = os.path.join(
            self.master_path,
            "docs/01_GENOME_DNA_CORE/PROTOCOLS/GENESIS_PROMPT_MASTER.md",
        )
        if os.path.exists(template_path):
            with open(template_path, "r", encoding="utf-8") as f:
                template = f.read()
                # Inject User Idea at the end
                final_prompt = template.replace(
                    '[DÉCRIVEZ VOTRE PROJET ICI : "Je veux créer une app de..." ]',
                    user_idea,
                )
                self.genesis_output.setPlainText(final_prompt)
        else:
            self.genesis_output.setPlainText(
                "ERROR: GENESIS_PROMPT_MASTER.md not found."
            )

    def _copy_genesis_clipboard(self):
        clipboard = QApplication.clipboard()
        clipboard.setText(self.genesis_output.toPlainText())
        QMessageBox.information(
            self, "Copied", "Genesis Prompt copied! Paste it into your AI Agent now."
        )

    def _view_injector(self):
        page = QWidget()
        layout = QVBoxLayout(page)
        layout.setAlignment(Qt.AlignmentFlag.AlignCenter)
        card = Card(width=600, height=400, title="💉 DNA INJECTOR")
        card.set_help(
            "OUTIL D'INJECTION :\n\n- Browse Folder : Choisissez le dossier CIBLE de votre nouveau projet.\n- Browse File : Importez votre cahier des charges existant.\n- Start Injection : Crée l'arborescence G-Genome complète dans votre dossier."
        )

        self.path_input = QLineEdit()
        self.path_input.setPlaceholderText("Select destination folder...")
        browse_btn = QPushButton("Browse Folder")
        browse_btn.clicked.connect(self._select_folder)

        h1 = QHBoxLayout()
        h1.addWidget(self.path_input)
        h1.addWidget(browse_btn)
        card.add_layout(h1)

        self.spec_input = QLineEdit()
        self.spec_input.setPlaceholderText(
            "Select Specifications (Cahier des charges)..."
        )
        browse_spec_btn = QPushButton("Browse File")
        browse_spec_btn.clicked.connect(self._select_spec_file)

        h2 = QHBoxLayout()
        h2.addWidget(self.spec_input)
        h2.addWidget(browse_spec_btn)
        card.add_layout(h2)

        self.btn_run = QPushButton("START INJECTION")
        self.btn_run.setObjectName("ActionButton")
        self.btn_run.clicked.connect(self._run_injection)
        card.add_child(self.btn_run)

        layout.addWidget(card)
        return page

    def _view_cortex(self):
        page = QWidget()
        layout = QVBoxLayout(page)

        top_layout = QHBoxLayout()

        # A. Cortex
        cortex_card = Card(width=600, height=450, title="🧠 THE CORTEX")
        cortex_card.set_help(
            "ZONE D'INTENTION :\n\n- Tapez ou dictez votre idée ici (Win+H).\n- 🌱 GÉNÉRER SUBSTRAT : L'IA transforme votre texte en documentation structurée (Cahier des charges)."
        )

        self.cortex_input = QTextEdit()
        self.cortex_input.setPlaceholderText("Type your chaotic idea here...")
        cortex_card.add_child(self.cortex_input)

        btn_gen = QPushButton("🌱 GENERATE SUBSTRATE")
        btn_gen.setObjectName("ActionButton")
        btn_gen.clicked.connect(self._action_generate_substrate)
        cortex_card.add_child(btn_gen)
        top_layout.addWidget(cortex_card)

        # B. Immune
        immune_card = Card(width=400, height=450, title="🛡️ IMMUNE SYSTEM")
        immune_card.set_help(
            "CONTRÔLE DE SÉCURITÉ :\n\n- 🟢 LOW RISK : Tâches validées automatiquement.\n- 🔴 HIGH RISK : Tâches nécessitant une signature humaine.\n- 🚀 LAUNCH : Démarre l'exécution une fois les risques levés."
        )

        self.task_list = QListWidget()
        immune_card.add_child(self.task_list)

        self.btn_execute = QPushButton("🚀 LAUNCH EXECUTION")
        self.btn_execute.setObjectName("ActionButton")
        self.btn_execute.setDisabled(True)
        self.btn_execute.clicked.connect(self._action_launch_execution)
        immune_card.add_child(self.btn_execute)
        top_layout.addWidget(immune_card)

        layout.addLayout(top_layout)

        # C. Nervous System
        nervous_card = Card(width=1000, height=250, title="⚡ NERVOUS SYSTEM")
        nervous_card.set_help(
            "MONITEUR D'EXÉCUTION :\n\nAffiche les logs techniques et la progression réelle de la création des fichiers."
        )

        self.terminal = QPlainTextEdit()
        self.terminal.setObjectName("Terminal")
        self.terminal.setReadOnly(True)
        nervous_card.add_child(self.terminal)

        self.progress_bar = QProgressBar()
        nervous_card.add_child(self.progress_bar)
        layout.addWidget(nervous_card)

        return page

    def _view_library(self):
        # [SYNTAXE] Crée une navigation secondaire (Navbar horizontale) couplée à un 'QTextBrowser'.
        # [RÔLE] Centralise l'accès aux documents de référence (ADN) sans forcer l'utilisateur à naviguer dans les fichiers.
        page = QWidget()
        layout = QVBoxLayout(page)

        # Horizontal Navbar
        navbar_card = QFrame()
        navbar_card.setObjectName("NavbarCard")
        nav_layout = QHBoxLayout(navbar_card)

        docs = [
            (
                "📜 DNA LAWS",
                "docs/01_GENOME_DNA_CORE/LAWS/COLLABORATION_GOLDEN_RULES.md",
            ),
            (
                "⚙️ CORE PROTOCOLS",
                "docs/01_GENOME_DNA_CORE/PROTOCOLS/SEED_BOOTSTRAP_PROTOCOL.md",
            ),
            (
                "📖 USER GUIDE",
                "docs/01_GENOME_DNA_CORE/GUIDES/USER_GUIDE_ORCHESTRATOR.md",
            ),
        ]

        self.library_browser = QTextBrowser()
        self.library_browser.setObjectName("LibraryViewer")

        for label, path in docs:
            btn = QPushButton(label)
            # [SYNTAXE] Utilisation d'une lambda 'p=path' pour capturer le chemin au moment de la création du bouton.
            abs_path = os.path.join(
                self.master_path,
                "G_GENOME_BLANK_TEST_LAB/TEST_04_INCUBATOR_PROPER",
                path,
            )
            btn.clicked.connect(lambda checked, p=abs_path: self._load_doc(p))
            nav_layout.addWidget(btn)

        layout.addWidget(navbar_card)
        layout.addWidget(self.library_browser)
        return page

    def _load_doc(self, path):
        # [SYNTAXE] Lecture 'UTF-8' simple et conversion Markdown brute vers HTML (Tags H1/H2).
        # [RÔLE] Injecte le contenu textuel d'un document DNA dans l'interface pour consultation immédiate.
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
                html = (
                    content.replace("\n", "<br>")
                    .replace("# ", "<h1>")
                    .replace("## ", "<h2>")
                )
                self.library_browser.setHtml(
                    f"<style>h1, h2 {{ color: #00A3FF; }}</style>{html}"
                )

    def _view_success(self):
        page = QWidget()
        layout = QVBoxLayout(page)
        layout.setAlignment(Qt.AlignmentFlag.AlignCenter)
        card = Card(width=800, height=600, title="🚀 GENOME READY")
        card.set_help(
            "VOTRE MÉTABOLISME EST PRÊT :\n\nL'architecture a été injectée. Le prompt ci-dessous contient toute l'intelligence nécessaire pour que votre agent IA comprenne le projet instantanément."
        )

        lbl = QLabel("The biological structure is stable. Direct your Agent now:")
        lbl.setStyleSheet("font-size: 16px; color: #8B949E; margin-bottom: 10px;")
        card.add_child(lbl)

        # The Master Prompt Box
        self.master_prompt = QTextEdit()
        self.master_prompt.setReadOnly(True)
        self.master_prompt.setPlainText(
            "I AM USING THE G-GENOME FRAMEWORK v1.7\n\n"
            "1. Location: docs/01_DNA_CORE/LAWS/Schema_Genome_Core.json\n"
            "2. Current Task: docs/02_PHENOTYPE_RUNTIME/Registry_Codon_Tasks.md\n\n"
            "INSTRUCTION: Act as a G-Genome Controlled Executor. Read the DNA Laws before any code modification."
        )
        self.master_prompt.setStyleSheet(
            """
            background-color: #010409;
            color: #58A6FF;
            font-family: 'Consolas', monospace;
            border: 1px dashed #30363D;
            padding: 15px;
            border-radius: 8px;
        """
        )
        self.master_prompt.setFixedHeight(180)
        card.add_child(self.master_prompt)

        # Action Buttons
        btn_layout = QHBoxLayout()

        btn_copy = QPushButton("📋 COPY MASTER PROMPT")
        btn_copy.setObjectName("ActionButton")
        btn_copy.setFixedHeight(50)
        btn_copy.clicked.connect(self._copy_prompt)
        btn_layout.addWidget(btn_copy)

        btn_finish = QPushButton("🏠 RETURN TO HUB")
        btn_finish.setObjectName("SecondaryButton")
        btn_finish.setFixedHeight(50)
        btn_finish.clicked.connect(lambda: self.dashboard.switch_view(0))
        btn_layout.addWidget(btn_finish)

        card.add_layout(btn_layout)
        layout.addWidget(card)
        return page

    def _copy_prompt(self):
        clipboard = QApplication.clipboard()
        clipboard.setText(self.master_prompt.toPlainText())
        QMessageBox.information(
            self,
            "🧬 BIO-LINK",
            "Master Prompt copied to clipboard!\nYour AI Agent is now ready.",
        )

    # --- LOGIC ---

    def _action_generate_substrate(self):
        raw = self.cortex_input.toPlainText()
        if not raw.strip():
            return

        with open(self.file_input, "w", encoding="utf-8") as f:
            f.write(raw)

        self.terminal.appendPlainText(f"🧬 Gestation: Ingesting '{raw[:20]}...'")
        self.terminal.appendPlainText("🧠 AI Kernel: Synthesizing Substrate...")

        # Mocking the AI response (todo.json creation)
        mock_tasks = [
            {"id": "G1", "name": "Synthesize DNA Core", "risk": "LOW"},
            {"id": "G2", "name": "Inject Phenotype Layout", "risk": "LOW"},
            {"id": "G3", "name": "Mutate Security Protocols", "risk": "HIGH"},
        ]
        with open(self.file_todo, "w", encoding="utf-8") as f:
            json.dump(mock_tasks, f)

    def _action_launch_execution(self):
        self.terminal.appendPlainText("🚀 Efference: Executing Plan Action...")
        self.progress_bar.setValue(20)

    def _synaptic_polling(self):
        if os.path.exists(self.file_todo):
            try:
                with open(self.file_todo, "r", encoding="utf-8") as f:
                    tasks = json.load(f)
                    if self.task_list.count() == 0:
                        for t in tasks:
                            self.task_list.addItem(
                                f"[{t['risk']}] {t['id']}: {t['name']}"
                            )
                        self.btn_execute.setDisabled(False)
            except:
                pass

    def _view_logs(self):
        page = QWidget()
        layout = QVBoxLayout(page)
        card = Card(width=1000, height=700, title="🛡️ IMMUNITY LOGS (Technical Audit)")
        card.set_help(
            "LOGS IMMUNITAIRES :\n\nCette section affiche le Registre des tâches et les rapports d'audit technique. C'est ici que vous vérifiez la conformité de l'ADN de votre projet."
        )

        self.log_browser = QTextBrowser()
        self.log_browser.setStyleSheet(
            "background-color: #0D1117; color: #00FF94; font-family: 'Consolas'; padding: 20px;"
        )

        btn_refresh = QPushButton("🔄 REFRESH AUDIT LOGS")
        btn_refresh.setObjectName("ActionButton")
        btn_refresh.clicked.connect(self._refresh_logs)

        card.add_child(self.log_browser)
        card.add_child(btn_refresh)
        layout.addWidget(card)

        self._refresh_logs()
        return page

    def _refresh_logs(self):
        registry_path = os.path.join(
            self.master_path,
            "G_GENOME_BLANK_TEST_LAB/TEST_04_INCUBATOR_PROPER/docs/02_PHENOTYPE_RUNTIME/Registry_Codon_Tasks.md",
        )
        if os.path.exists(registry_path):
            with open(registry_path, "r", encoding="utf-8") as f:
                self.log_browser.setHtml(f.read().replace("\n", "<br>"))
        else:
            self.log_browser.setHtml("Registry missing.")

    def _select_folder(self):
        path = QFileDialog.getExistingDirectory(self, "Select Target")
        if path:
            self.path_input.setText(path)

    def _select_spec_file(self):
        path, _ = QFileDialog.getOpenFileName(self, "Select Spec")
        if path:
            self.spec_input.setText(path)

    def _run_injection(self):
        try:
            target = self.path_input.text()
            spec = self.spec_input.text()
            self.injector.live_inject(target, spec if spec else None)
            self.dashboard.switch_view(5)
        except Exception as e:
            QMessageBox.critical(self, "Error", str(e))


if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = IncubatorApp()
    window.show()
    sys.exit(app.exec())
