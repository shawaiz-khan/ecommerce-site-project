import pages from "../constants/pages.js";
import featuredProducts from "../data/featuredProducts.js";
import products from "../data/products.js";

// Custom Title
const getTitle = () => {
    const path = window.location.pathname.split("/").pop();
    console.log(path);
    document.title = pages[path] ? `EcoMart | ${pages[path]}` : "Page Not Found";
};

// Navbar Template
const loadNavbar = () => {
    const navbarContainer = document.getElementById("navbar-container");

    if (!navbarContainer) {
        console.error("Navbar container not found!");
        return;
    }

    const navbar = document.createElement("nav");

    navbar.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light", "text-dark");

    navbar.innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand" href="../index.html">EcoMart</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link" href="../index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="../pages/about.html">About</a></li>
                <li class="nav-item"><a class="nav-link" href="../pages/shop.html">Shop</a></li>
                <li class="nav-item"><a class="nav-link" href="../pages/contact.html">Contact</a></li>
            </ul>
        </div>
    </div>
`;

    navbarContainer.appendChild(navbar);
}

// Footer Template
const loadFooter = () => {
    const footerContainer = document.getElementById("footer-container");

    if (!footerContainer) {
        console.error("Footer container not found!");
        return;
    }

    const footer = document.createElement("footer");

    footer.classList.add("footer", "bg-light", "text-dark", "py-4");

    footer.innerHTML = `
    <div class="container text-center">
        <h1 class="h4 mb-3">EcoMart</h1>
        <ul class="nav flex-column flex-sm-row justify-content-center mb-3">
            <li class="nav-item">
                <a class="nav-link text-dark" href="../index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="../pages/about.html">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="../pages/shop.html">Shop</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="../pages/contact.html">Contact</a>
            </li>
        </ul>
        <p class="small mb-0">© ${new Date().getFullYear()} EcoMart. All rights reserved.</p>
    </div>
`;

    footerContainer.appendChild(footer);
}

// Load Featured Products
const loadFeaturedProducts = () => {
    const featuredProductsList = document.getElementById("featured-products-list");

    if (!featuredProductsList) {
        console.error("Featured Products not found!");
        return;
    }

    featuredProducts.map((featuredProduct) => {
        const featuredProductCard = document.createElement("div");
        featuredProductCard.className = "card shadow-sm mb-4 h-100 product-cards";

        featuredProductCard.innerHTML = `
        <img src="${featuredProduct.image}" alt="Image of ${featuredProduct.name}" class="card-img-top">
        <div class="card-body product-card-body">
            <h5 class="card-title">${featuredProduct.name}</h5>
            <p class="card-text">${featuredProduct.description}</p>
            <h6 class="card-subtitle mb-3 text-dark fs-6 fw-bold">Price: $${featuredProduct.price}</h6>
            <div class="d-flex justify-content-start gap-2">
                <button class="btn btn-primary btn-sm" aria-label="Buy ${featuredProduct.name} now">Buy Now</button>
                <button class="btn btn-success btn-sm" aria-label="Add ${featuredProduct.name} to cart">Add to Cart</button>
            </div>
        </div>
    `;

        featuredProductsList.appendChild(featuredProductCard);
    });
}

// Load All Products
const loadProducts = () => {
    const productList = document.getElementById("products-list");

    if (!productList) {
        console.error("Product List not found!");
        return;
    }

    products.map((product) => {
        const productCard = document.createElement("div");
        productCard.className = "card shadow-sm mb-4 h-100 product-cards";

        productCard.innerHTML = `
            <img src="${product.image}" alt="Image of ${product.name}" class="card-img-top">
            <div class="card-body product-card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <h6 class="card-subtitle mb-3 text-dark fs-6 fw-bold">Price: $${product.price}</h6>
                <div class="d-flex justify-content-start gap-2">
                    <button class="btn btn-primary btn-sm" aria-label="Buy ${product.name} now">Buy Now</button>
                    <button class="btn btn-success btn-sm" aria-label="Add ${product.name} to cart">Add to Cart</button>
                </div>
            </div>
        `;

        productList.appendChild(productCard);
    });
}

// Initialize DOM
const initializeDOM = () => {
    getTitle();
    loadNavbar();
    loadFooter();
    loadFeaturedProducts();
    loadProducts();
}

// DOM Events
document.addEventListener("DOMContentLoaded", initializeDOM);