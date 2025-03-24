document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "Upstox",
            image: "https://asset.brandfetch.io/idH_PAk3wi/idhR2wdGPK.jpeg",
            payout: "₹500",
            description: "This is a brief description of Upstox.",
            link: "http://sales.gromo.in/up/N9ggBDHxCz",
            terms: "Upstox account opening T&C apply."
        },
        {
            name: "Groww",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Groww_app_logo.svg",
            payout: "₹300",
            description: "This is a brief description of Groww.",
            link: "http://groww.example.com",
            terms: "Groww account opening T&C apply."
        },
        {
            name: "Zerodha",
            image: "https://zerodha.com/static/images/logo.svg",
            payout: "₹500",
            description: "This is a brief description of Zerodha.",
            link: "http://zerodha.example.com",
            terms: "Zerodha account opening T&C apply."
        }
    ];

    const productsContainer = document.getElementById("products-list");
    const searchBox = document.getElementById("search");

    function displayProducts(filteredProducts) {
        productsContainer.innerHTML = filteredProducts.map((product, index) => `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <div>
                    <h3>${product.name}</h3>
                    <p><strong>Payout:</strong> ${product.payout}</p>
                    <p>${product.description}</p>
                    <a href="${product.link}" class="download-btn" target="_blank">Download</a>
                    <button class="toggle-terms" data-index="${index}">View Terms</button>
                    <p class="terms" id="terms-${index}" style="display: none;">${product.terms}</p>
                </div>
            </div>
        `).join("");
        
        document.querySelectorAll(".toggle-terms").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                const termsElement = document.getElementById(`terms-${index}`);
                termsElement.style.display = termsElement.style.display === "none" ? "block" : "none";
                this.textContent = termsElement.style.display === "none" ? "View Terms" : "Hide Terms";
            });
        });
    }
    
    displayProducts(products);
    
    searchBox.addEventListener("input", function () {
        const searchTerm = searchBox.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        displayProducts(filteredProducts);
    });

    // Dark Mode Toggle
    const darkModeToggle = document.querySelector(".toggle-dark-mode");
    const body = document.body;

    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });

    // Coin and Ad System
    let coins = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 0;
    const coinCounter = document.querySelector(".coin-counter");
    const adBanner = document.getElementById("adBanner");

    coinCounter.textContent = `Coins: ${coins}`;

    adBanner.addEventListener("click", function () {
        coins += 10;
        localStorage.setItem("coins", coins);
        coinCounter.textContent = `Coins: ${coins}`;
        alert("You earned 10 coins!");
    });
});
