import pages from "../constants/pages.js";
import featuredProducts from "../data/featuredProducts.js";

// Change Title based on pages
const getTitle = () => {
    const path = window.location.pathname;
    console.log(path);

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
                    <li class="nav-item"><a class="nav-link" href="../index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="../pages/about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="../pages/shop.html">Shop</a></li>
                    <li class="nav-item"><a class="nav-link" href="../pages/contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
    `

navbarContainer.appendChild(navbar);

// Get Featured Products
const featuredProductsList = document.getElementById("featured-products-list");


featuredProducts.map((featuredProduct) => {
    const featuredProductCard = document.createElement("div");
    featuredProductCard.className = "featured-product-card bg-light p-4";
    console.log(featuredProduct);

    featuredProductCard.innerHTML = `
            <img src=${featuredProduct.image} alt=${featuredProduct.name}>
            <div>
                <h1 class="fs-4">${featuredProduct.name}</h1>
                <p>${featuredProduct.description}</p>
                <h5>$ ${featuredProduct.price} </h5>
            </div>
            <div>
                <button class="btn btn-primary">Buy Now</button>
                <button class="btn btn-success">Add to Cart</button>
            </div>
        `
    featuredProductsList.appendChild(featuredProductCard);
})
