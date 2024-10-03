// Hamburger Menu JavaScript
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const menuLinks = document.querySelectorAll(".off-screen-menu a");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

// Close the off-screen menu and scroll to the section when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior
        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");

        // Scroll to the section
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});