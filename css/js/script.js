/* ==========================================
   FYA Financial JavaScript
========================================== */

// Sticky Header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "#111";
        header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.2)";
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade In Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".card, .why-card").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.7s";

    observer.observe(item);

});

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// Mobile Menu (future-ready)
const navToggle = document.querySelector(".menu-toggle");

if (navToggle) {

    navToggle.addEventListener("click", () => {

        document.querySelector("nav").classList.toggle("active");

    });

}

console.log("FYA Financial Website Loaded Successfully");
