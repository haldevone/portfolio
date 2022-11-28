const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");


window.location.href = "https://haldevone.com/";

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        // const el = document.getElementById(link.getAttribute("data-link"));
        // el.scrollIntoView()
    });
});

// {behavior:"smooth", block:"start"}

// cardToogle.addEventListener("click", () => {
//     cardToogle.classList.toggle("card-item-figcaption");
// });



