document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "Upstox",
            category: "Demat Account",
            image: "https://asset.brandfetch.io/idH_PAk3wi/idhR2wdGPK.jpeg",
            payout: "₹200",
            description: "This is a brief description of Upstox.",
            link: "http://sales.gromo.in/up/N9ggBDHxCz",
            terms: "Upstox account opening T&C apply."
        },
        {
            name: "Groww",
            category: "Demat Account",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Groww_app_logo.svg",
            payout: "₹300",
            description: "This is a brief description of Groww.",
            link: "http://groww.example.com",
            terms: "Groww account opening T&C apply."
        },
        {
            name: "Zerodha",
            category: "Demat Account",
            image: "https://zerodha.com/static/images/logo.svg",
            payout: "₹500",
            description: "This is a brief description of Zerodha.",
            link: "http://zerodha.example.com",
            terms: "Zerodha account opening T&C apply."
        }
    ];

    const productsContainer = document.getElementById("products-list");
    const searchBox = document.getElementById("search");
    const categoryButtons = document.querySelectorAll(".category-btn");

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
    }
    
    displayProducts(products);
    
    searchBox.addEventListener("input", function () {
        const searchTerm = searchBox.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        displayProducts(filteredProducts);
    });

    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            const selectedCategory = this.getAttribute("data-category");
            const filteredProducts = selectedCategory === "All" ? products : products.filter(p => p.category === selectedCategory);
            displayProducts(filteredProducts);
        });
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
    const coinCounter = document.querySelector(".coin-counter");
    const adBanner = document.getElementById("adBanner");

    function getStoredCoins() {
        let storedCoins = localStorage.getItem("coins");
        return storedCoins ? parseInt(storedCoins) || 0 : 0;
    }

    let coins = getStoredCoins();
    coinCounter.textContent = `Coins: ${coins}`;

    function getRandomCoins() {
        return Math.random() < 0.7 ? Math.floor(Math.random() * 4) + 1 : Math.floor(Math.random() * 6) + 5;
    }

    adBanner.addEventListener("click", function () {
        let earnedCoins = getRandomCoins();
        coins += earnedCoins;
        localStorage.setItem("coins", coins);
        coinCounter.textContent = `Coins: ${coins}`;
        alert(`You earned ${earnedCoins} coins!`);
    });
});
