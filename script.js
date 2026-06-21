
/* ==========================================
   PORTFOLIO WEBSITE JAVASCRIPT
========================================== */

/* ==========================================
   MOBILE MENU TOGGLE
========================================== */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close mobile menu when a link is clicked */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* ==========================================
   DARK / LIGHT THEME TOGGLE
========================================== */

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

/* Load saved theme */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    body.classList.add("light-theme");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

/* Toggle Theme */
themeToggle.addEventListener("click", () => {

    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollTopBtn =
    document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==========================================
   REVEAL ANIMATION ON SCROLL
========================================== */

const reveals =
    document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    /* Email Pattern */
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 3) {
        alert(
            "Please enter a valid name (minimum 3 characters)."
        );
        return;
    }

    if (!emailPattern.test(email)) {
        alert(
            "Please enter a valid email address."
        );
        return;
    }

    if (message.length < 10) {
        alert(
            "Message should contain at least 10 characters."
        );
        return;
    }

    alert(
        "Thank you! Your message has been submitted successfully."
    );

    contactForm.reset();

});

/* ==========================================
   ACTIVE NAVIGATION LINK ON SCROLL
========================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active-link");
        }

    });

});

/* ==========================================
   SMOOTH FADE-IN FOR HERO
========================================== */

window.addEventListener("load", () => {

    const heroText =
        document.querySelector(".hero-text");

    const heroImage =
        document.querySelector(".hero-image");

    heroText.style.opacity = "0";
    heroImage.style.opacity = "0";

    heroText.style.transform =
        "translateY(40px)";
    heroImage.style.transform =
        "translateY(40px)";

    setTimeout(() => {

        heroText.style.transition =
            "all 1s ease";

        heroImage.style.transition =
            "all 1s ease";

        heroText.style.opacity = "1";
        heroImage.style.opacity = "1";

        heroText.style.transform =
            "translateY(0)";

        heroImage.style.transform =
            "translateY(0)";

    }, 200);

});

/* ==========================================
   PROJECT CARD HOVER EFFECT
========================================== */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform =
            "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "translateY(0) scale(1)";
    });

});

/* ==========================================
   YEAR AUTO UPDATE (OPTIONAL)
========================================== */

const footerText =
    document.querySelector(".footer p");

if (footerText) {

    const year =
        new Date().getFullYear();

    footerText.innerHTML =
        `© ${year} Rahul Yadav. All Rights Reserved.`;

}

/* ==========================================
   PORTFOLIO READY
========================================== */

console.log(
    "Portfolio Website Loaded Successfully 🚀"
);

