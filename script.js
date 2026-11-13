// ==========================================================================
// VISHAL KATHAR - DIGITAL DEVELOPER PROFILE CARD
// Executive Professional Edition: Clean White SaaS Theme
// Interactive Core Script: Themes, CLI Terminal, QR Sharing & vCard Engine
// ==========================================================================

// Global Theme State
let currentTheme = "light";

// Typewriter Roles List
const ROLES = [
    "Java Full Stack Developer",
    "Spring Boot & Microservices Specialist",
    "AI & Data Science Enthusiast",
    "Scalable Systems Architect",
    "Clean Code Advocate"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterSpeed = 90;

// --------------------------------------------------------------------------
// 1. INITIALIZATION ON DOM READY
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initTypewriter();
    initTerminal();
    initShareUrl();
});

// --------------------------------------------------------------------------
// 2. THEME SWITCHING ENGINE (Default: Clean White / Light)
// --------------------------------------------------------------------------
function initTheme() {
    const savedTheme = localStorage.getItem("dev_profile_theme") || "light";
    setTheme(savedTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("dev_profile_theme", theme);

    const themeIcon = document.getElementById("themeIcon");
    const themeLabel = document.getElementById("themeLabel");

    if (theme === "dark") {
        if (themeIcon) themeIcon.className = "fa-solid fa-sun";
        if (themeLabel) themeLabel.textContent = "Light";
    } else {
        if (themeIcon) themeIcon.className = "fa-solid fa-moon";
        if (themeLabel) themeLabel.textContent = "";
    }
}

function toggleTheme() {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    showToast(`Switched to ${nextTheme === "light" ? "Professional Light" : "Dark"} mode`, "info");
}

function cycleTheme() {
    toggleTheme();
}

// --------------------------------------------------------------------------
// 3. TYPEWRITER EFFECT FOR DEVELOPER ROLES
// --------------------------------------------------------------------------
function initTypewriter() {
    const el = document.getElementById("typewriterText");
    if (!el) return;

    function type() {
        const currentRole = ROLES[roleIndex];

        if (isDeleting) {
            el.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typewriterSpeed = 45;
        } else {
            el.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typewriterSpeed = 90;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typewriterSpeed = 1600; // Pause when word complete
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % ROLES.length;
            typewriterSpeed = 350; // Pause before new word
        }

        setTimeout(type, typewriterSpeed);
    }

    type();
}

// --------------------------------------------------------------------------
// 4. TAB NAVIGATION SYSTEM
// --------------------------------------------------------------------------
function showTab(tabName, button) {
    // Hide all tab sections
    document.querySelectorAll(".content-section").forEach(section => {
        section.classList.remove("active");
    });

    // Remove active state from top tab buttons
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    // Show target section
    const targetSection = document.getElementById(tabName);
    if (targetSection) {
        targetSection.classList.add("active");
    }

    // Set active button
    if (button) {
        button.classList.add("active");
    }

    // Update bottom nav state
    updateBottomNavState(tabName);

    // Smooth scroll into view on mobile screens
    if (window.innerWidth <= 768 && targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

function showTabById(tabName) {
    const button = [...document.querySelectorAll(".tab-btn")]
        .find(btn => btn.getAttribute("onclick") && btn.getAttribute("onclick").includes(tabName));

    if (button) {
        showTab(tabName, button);
    } else {
        showTab(tabName);
    }
}

function handleNavClick(target, element) {
    document.querySelectorAll(".bottom-nav a").forEach(link => link.classList.remove("active"));
    if (element) element.classList.add("active");

    if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        showTabById(target);
    }
}

function updateBottomNavState(tabName) {
    document.querySelectorAll(".bottom-nav a").forEach(link => {
        const href = link.getAttribute("href") || "";
        if (href.replace("#", "") === tabName) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

function showHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const firstTabBtn = document.querySelector(".tab-btn");
    showTab("stack", firstTabBtn);
}

// --------------------------------------------------------------------------
// 5. INTERACTIVE DEVELOPER CLI TERMINAL
// --------------------------------------------------------------------------
const terminalCommands = {
    help: `Available commands:
  • skills     : View categorized technical stack & proficiencies
  • projects   : List featured production software projects
  • whoami     : Display developer profile and engineering philosophy
  • contact    : View direct contact endpoints & communications
  • sudo hire  : Initialize candidate recruitment sequence!
  • clear      : Clear the terminal output`,

    skills: `================ TECHNICAL ARSENAL ================
[Backend]    : Java 17+, Spring Boot, Spring Security, Hibernate JPA, REST
[AI & ML]    : Python 3, Machine Learning, Scikit-Learn, Pandas, NumPy
[Frontend]   : React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind
[Databases]  : PostgreSQL, MySQL, MongoDB, Redis
[DevOps]     : Docker, Git, GitHub Actions, Linux, Postman
===================================================`,

    projects: `================ FEATURED PROJECTS ================
1. Blockchain Online Voting System
   └─ Tech: Java, Spring Boot, Solidity, Cryptography, MySQL
   └─ Status: Live / Verified SHA-256 Tamper Proof

2. Customer Churn Prediction Engine
   └─ Tech: Python, Scikit-Learn, FastAPI, React Dashboard
   └─ Metric: 94% ROC-AUC Accuracy

3. Distributed Microservices Banking Gateway
   └─ Tech: Spring Cloud, Docker, JWT Auth, Eureka, PostgreSQL
===================================================`,

    whoami: `Name        : Vishal Kathar
Title       : Java Full Stack & AI Developer
Location    : Maharashtra, India (Open to Remote / Hybrid)
Focus       : Scalable backends, resilient microservices & clean design.
Principles  : Test-driven development, modular code, high performance.`,

    contact: `================ CONTACT ENDPOINTS ================
Email       : vishalkathar.dev@example.com
WhatsApp    : +91 98765 43210
LinkedIn    : linkedin.com/in/vishalkathar
GitHub      : github.com/vishalkathar
===================================================`,

    "sudo hire": `[ACCESS GRANTED: ROOT]
Initializing onboarding protocol...
>> Candidate: Vishal Kathar
>> Technical Fit: 100%
>> Status: Available for Immediate Joining / Contracts!
>> Signal transmitted. Let's build exceptional software together! 🚀`
};

function initTerminal() {
    const input = document.getElementById("terminalInput");
    if (!input) return;

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const rawCmd = input.value.trim();
            if (rawCmd) {
                execCmd(rawCmd);
                input.value = "";
            }
        }
    });
}

function execCmd(command) {
    const output = document.getElementById("terminalOutput");
    const body = document.getElementById("terminalBody");
    if (!output || !body) return;

    const lowerCmd = command.toLowerCase().trim();

    if (lowerCmd === "clear") {
        output.textContent = "vishal@dev:~$ Shell ready.";
        return;
    }

    let response = "";

    if (terminalCommands[lowerCmd]) {
        response = terminalCommands[lowerCmd];
    } else {
        response = `zsh: command not found: ${command}. Type 'help' for available commands.`;
    }

    output.textContent += `\n\nvishal@dev:~$ ${command}\n${response}`;
    body.scrollTop = body.scrollHeight;
}

// --------------------------------------------------------------------------
// 6. TOAST NOTIFICATION SYSTEM
// --------------------------------------------------------------------------
function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";

    let icon = "fa-solid fa-circle-check";
    if (type === "warning") icon = "fa-solid fa-triangle-exclamation";
    if (type === "error") icon = "fa-solid fa-circle-xmark";
    if (type === "info") icon = "fa-solid fa-circle-info";

    toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("fade-out");
        setTimeout(() => toast.remove(), 250);
    }, 2800);
}

// --------------------------------------------------------------------------
// 7. WHATSAPP CONNECTION
// --------------------------------------------------------------------------
function connectWhatsApp() {
    let input = document.getElementById("whatsappNumber");
    let number = input ? input.value : "";
    number = number.replace(/\D/g, "");

    if (!number || number.length < 7) {
        showToast("Please enter a valid phone number with country code", "warning");
        return;
    }

    const defaultMsg = encodeURIComponent("Hi Vishal! Viewed your digital profile card and would like to connect regarding an opportunity.");
    window.open(`https://wa.me/${number}?text=${defaultMsg}`, "_blank");
    showToast("Opening WhatsApp...", "info");
}

// --------------------------------------------------------------------------
// 8. VCARD DOWNLOAD GENERATOR
// --------------------------------------------------------------------------
function saveContact() {
    const vcard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "FN:Vishal Kathar",
        "N:Kathar;Vishal;;;",
        "TITLE:Software Engineer / Java Full Stack Developer",
        "ROLE:Software Developer & AI Specialist",
        "TEL;TYPE=CELL,VOICE:+919876543210",
        "EMAIL;TYPE=PREF,INTERNET:vishalkathar.dev@example.com",
        "URL;TYPE=WORK:https://github.com/vishalkathar",
        "ADR;TYPE=HOME:;;Maharashtra;India;;;",
        "NOTE:Specialized in Enterprise Java, Spring Boot, Microservices, and Machine Learning.",
        "END:VCARD"
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Vishal_Kathar_Profile.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast("Contact card (.vcf) downloaded to your device!", "info");
}

// --------------------------------------------------------------------------
// 9. SHARE & QR CODE MODAL
// --------------------------------------------------------------------------
let qrCodeInstance = null;

function initShareUrl() {
    const input = document.getElementById("shareUrlInput");
    if (input) {
        input.value = window.location.href;
    }
}

function openShareModal() {
    initShareUrl();
    const modal = document.getElementById("shareModal");
    if (modal) {
        modal.classList.add("show");
    }

    // Generate clean QR code
    const qrContainer = document.getElementById("qrContainer");
    if (qrContainer && typeof QRCode !== "undefined") {
        qrContainer.innerHTML = "";
        qrCodeInstance = new QRCode(qrContainer, {
            text: window.location.href,
            width: 145,
            height: 145,
            colorDark: "#0f172a",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.M
        });
    }
}

function closeShareModal() {
    const modal = document.getElementById("shareModal");
    if (modal) modal.classList.remove("show");
}

function copyProfileLink() {
    const url = window.location.href;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showToast("Profile link copied to clipboard!", "info");
        });
    } else {
        const input = document.getElementById("shareUrlInput");
        if (input) {
            input.select();
            document.execCommand("copy");
            showToast("Profile link copied!", "info");
        }
    }
}

function shareViaNative() {
    if (navigator.share) {
        navigator.share({
            title: "Vishal Kathar - Software Engineer & Full Stack Developer",
            text: "Check out Vishal Kathar's professional profile card!",
            url: window.location.href
        }).catch(() => {});
    } else {
        copyProfileLink();
    }
}

function shareProfile() {
    openShareModal();
}

// --------------------------------------------------------------------------
// 10. EXCHANGE CONTACT MODAL & STORAGE
// --------------------------------------------------------------------------
function openExchange() {
    const modal = document.getElementById("exchangeModal");
    if (modal) modal.classList.add("show");
}

function closeExchange() {
    const modal = document.getElementById("exchangeModal");
    if (modal) modal.classList.remove("show");
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("visitorName")?.value || "";
        const email = document.getElementById("visitorEmail")?.value || "";
        const phone = document.getElementById("visitorPhone")?.value || "";
        const company = document.getElementById("visitorCompany")?.value || "";
        const message = document.getElementById("visitorMessage")?.value || "";

        const newContact = {
            name,
            email,
            phone,
            company,
            message,
            timestamp: new Date().toISOString()
        };

        try {
            const saved = JSON.parse(localStorage.getItem("dev_exchanged_contacts") || "[]");
            saved.push(newContact);
            localStorage.setItem("dev_exchanged_contacts", JSON.stringify(saved));
        } catch (err) {
            console.error("Storage error:", err);
        }

        showToast(`Thank you, ${name}! Your contact has been submitted.`, "info");
        contactForm.reset();
        closeExchange();
    });
}

// Close modals when clicking outside
window.addEventListener("click", (e) => {
    const exchangeModal = document.getElementById("exchangeModal");
    const shareModal = document.getElementById("shareModal");

    if (e.target === exchangeModal) closeExchange();
    if (e.target === shareModal) closeShareModal();
});
