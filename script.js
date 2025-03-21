document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "Upstox",
            image: "product1.jpg",
            payout: "₹500",
            description: "This is a brief description of Upstox, including details about features and usage.",
            link: "http://sales.gromo.in/up/N9ggBDHxCz",
            terms: `
                <strong>Terms & Conditions:</strong><br>
                - The customer's phone number should be linked with their Aadhaar Card & the customer should have a PAN card.<br>
                - Applicable only for new users. Customers should not have an existing relationship with Upstox.<br>
                - The entire account opening process should be completed in one go.<br>
                - Customers should have the following documents ready for quick account opening:<br>
                &nbsp;&nbsp;&nbsp;• Proof of income<br>
                &nbsp;&nbsp;&nbsp;• Proof of identity<br>
                &nbsp;&nbsp;&nbsp;• Proof of address<br>
                - Tracking time is 10 days after account opening.<br>
                - Intraday trades won't be considered.<br>
                - Customer should be an active user, should have done multiple trades.
            `
        },
        {
            name: "Product 2",
            image: "product2.jpg",
            payout: "₹XXX",
            description: "This is a brief description of Product 2, including details about features and usage.",
            link: "#",
            terms: "Terms & Conditions: By downloading, you agree to our policies."
        }
    ];

    const productsContainer = document.getElementById("products-list");
    productsContainer.innerHTML = ""; // पहले से भरा हुआ कंटेंट हटाएँ

    products.forEach(product => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p><strong>Payout:</strong> ${product.payout}</p>
                    <p>${product.description}</p>
                    <a href="${product.link}" class="download-btn" target="_blank"><i class="fas fa-download"></i>Download</a>
                    <p class="terms">${product.terms}</p>
                </div>
            </div>
        `;
        productsContainer.innerHTML += productHTML;
    });
});
