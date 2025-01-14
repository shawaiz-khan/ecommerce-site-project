import pages from "../constants/pages.js";

// Change Title based on pages
const getTitle = () => {
    const path = window.location.pathname;

    if (pages[path]) {
        document.title = `EcoMart | ${pages[path]}`;
    } else {
        document.title = "Page Not Found";
    }
};

getTitle();

// NavBar template
const navbarContainer = document.getElementById("navbar-container");
const navbar = document.createElement("nav");

navbar.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light", "text-dark")

navbar.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand">EcoMart</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    `

navbarContainer.appendChild(navbar);