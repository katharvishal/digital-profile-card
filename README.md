# 📇 Digital Profile Card | Vishal Kathar

<p align="center">
  <img src="https://img.shields.io/badge/Live_Demo-GitHub_Pages-2563eb?style=for-the-badge&logo=github" alt="Live Demo">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

A modern, high-performance, and responsive **Digital Business & Developer Profile Card** crafted with clean SaaS aesthetics. Built specifically for software engineers, full-stack developers, and tech professionals to showcase their engineering identity, projects, technical skills, and contact channels.

🔗 **Live Website:** [https://katharvishal.github.io/digital-profile-card/](https://katharvishal.github.io/digital-profile-card/)

---

## 🌟 Key Features

* **🎨 Executive Clean SaaS UI**: Minimalist white canvas with subtle grid elevation, high-contrast typography, and fluid micro-interactions.
* **🌓 Instant Theme Switcher**: Toggle seamlessly between **Light Mode** and **Dark Mode** with preference persistence in `localStorage`.
* **💻 Interactive CLI Terminal**: A built-in developer shell (`vishal@workstation:~$ `) where visitors can execute interactive commands:
  * `skills`, `projects`, `whoami`, `contact`, `sudo hire`, and `clear`.
* **⚡ Typewriter Headline**: Dynamic animated headline cycling through core developer specialties and architectural roles.
* **📱 Instant QR Code & Share Modal**: Generates dynamic client-side QR codes so anyone can scan and view/save the card directly on their mobile device.
* **📇 One-Click vCard (.vcf) Export**: Download a standardized contact file directly into iOS / Android address books with a single tap.
* **💬 Direct WhatsApp Connect**: Pre-formatted direct messaging link with international country code support and pre-filled greeting.
* **📁 Segmented Tab Navigation**:
  * **Stack & Bio**: Categorized backend, frontend, AI/ML skills, and educational milestones.
  * **Projects**: Production-ready project cards with tech tags, live demo, and GitHub repository links.
  * **CLI Terminal**: Interactive command-line shell for tech recruiters and engineers.
  * **Contact**: Direct communication channels, location info, and an interactive contact exchange form.
* **📱 100% Responsive**: Ergonomically optimized for mobile screens with a floating glassmorphic bottom navigation dock.

---

## 🛠️ Built With

* **HTML5**: Semantic and accessible markup structure.
* **CSS3**: Custom design system, CSS variables, flexbox, grid, glassmorphism, and responsive breakpoints.
* **Vanilla JavaScript (ES6+)**: Typewriter animation, terminal emulator, theme switching engine, vCard generator, and DOM interactions.
* **[Font Awesome 6](https://fontawesome.com/)**: Modern vector icon set.
* **[QRCode.js](https://davidshimjs.github.io/qrcodejs/)**: Client-side QR code rendering without third-party server dependencies.
* **[Google Fonts](https://fonts.google.com/)**: Clean typographic pairings using **Inter** & **JetBrains Mono**.

---

## 📂 Project Structure

```text
Digital_Profile_Card/
├── index.html        # Main HTML structure and semantic markup
├── style.css         # Complete styling, CSS variables & responsive rules
├── script.js         # Interactive logic (tabs, terminal, theme, vCard, QR)
├── img.jpg           # Profile picture
├── background.jpg    # Card header background cover
└── README.md         # Project documentation
```

---

## 🚀 Quick Start / Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/katharvishal/digital-profile-card.git
   ```

2. **Navigate into the folder:**
   ```bash
   cd digital-profile-card
   ```

3. **Open the project:**
   * Double-click `index.html` to open it directly in your browser.
   * Or use VS Code Live Server (`Right-click index.html` ➔ `Open with Live Server`).

---

## ⚙️ Customization Guide

To personalize this profile card with your own information:

1. **Profile Photo & Cover**: Replace `img.jpg` and `background.jpg` with your own photos.
2. **Personal Details (`index.html`)**: Update your name, job title, bio, and social links (GitHub, LinkedIn, WhatsApp, Email).
3. **vCard Details (`script.js`)**: Search for `function saveContact()` and update your phone number, email, and location.
4. **Interactive Terminal (`script.js`)**: Modify the `terminalCommands` object to showcase your custom skills, achievements, and project links.

---

## 🌐 Deploy to GitHub Pages

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Add README and project updates"
   git push origin main
   ```
2. Navigate to your repository on GitHub.
3. Go to **Settings** ➔ **Pages**.
4. Under **Build and deployment > Branch**, select `main` and `/ (root)`.
5. Click **Save**. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## 👤 Author

**Vishal Kathar**
* **Role**: Java Full Stack Developer & AI Enthusiast
* **GitHub**: [@katharvishal](https://github.com/katharvishal)
* **LinkedIn**: [linkedin.com/in/vishalkathar](https://linkedin.com/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
