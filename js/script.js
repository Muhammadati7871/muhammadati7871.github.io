/* =========================================
   PN-HIMSAT NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

const megaTriggers = document.querySelectorAll(".mega-trigger");


/* =========================================
   MOBILE MAIN MENU
========================================= */

menuToggle.addEventListener("click", function () {

    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );

});


/* =========================================
   MEGA MENUS
========================================= */

megaTriggers.forEach(function (trigger) {

    trigger.addEventListener("click", function (event) {

        event.stopPropagation();

        const currentMenu = trigger.parentElement;

        const isCurrentlyOpen =
            currentMenu.classList.contains("open");


        /* Close all other mega menus */

        document.querySelectorAll(".nav-mega").forEach(function (menu) {

            menu.classList.remove("open");

        });


        /* Open selected menu */

        if (!isCurrentlyOpen) {

            currentMenu.classList.add("open");

        }

    });

});


/* =========================================
   CLOSE WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", function (event) {

    if (!event.target.closest(".nav-mega")) {

        document.querySelectorAll(".nav-mega").forEach(function (menu) {

            menu.classList.remove("open");

        });

    }

});


/* =========================================
   CLOSE MOBILE MENU WHEN A NORMAL LINK
   IS CLICKED
========================================= */

const normalLinks = document.querySelectorAll(
    ".main-nav > .nav-link"
);

normalLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mainNav.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});
