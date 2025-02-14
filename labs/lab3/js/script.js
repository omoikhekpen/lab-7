document.addEventListener("DOMContentLoaded", function () {
    let invenList = []; // Inventory array renamed

    function displayInven() {
        const invenContainer = document.getElementById("inventory-container");
        invenContainer.innerHTML = "";
        invenList.forEach(prod => {
            const prodCard = document.createElement("div");
            prodCard.classList.add("inventory-item");
            prodCard.innerHTML = `
                <p><strong>Name:</strong> ${prod.prodName}</p>
                <p><strong>Type:</strong> ${prod.prodType}</p>
                <p><strong>Price:</strong> $${prod.prodPrice}</p>
                <p><strong>Quantity:</strong> ${prod.prodQty}</p>
                <p><strong>Description:</strong> ${prod.prodDesc}</p>
                <button onclick="removeInvenItem('${prod.prodName}')">Remove</button>
            `;
            invenContainer.appendChild(prodCard);
        });

        calculateInvenTotal();
    }

    function addInvenItem(evt) {
        evt.preventDefault();
        const prodName = document.getElementById("name").value;
        const prodType = document.getElementById("type").value;
        const prodPrice = parseFloat(document.getElementById("price").value);
        const prodQty = parseInt(document.getElementById("quantity").value);
        const prodDesc = document.getElementById("description").value;

        invenList.push({ prodName, prodType, prodPrice, prodQty, prodDesc });
        displayInven();
    }

    function removeInvenItem(prodName) {
        invenList = invenList.filter(prod => prod.prodName !== prodName);
        displayInven();
    }

    function searchInven() {
        const searchQuery = document.getElementById("searchQuery").value.toLowerCase();
        const filteredProds = invenList.filter(prod => 
            prod.prodName.toLowerCase().includes(searchQuery) || 
            prod.prodType.toLowerCase().includes(searchQuery)
        );

        const invenContainer = document.getElementById("inventory-container");
        invenContainer.innerHTML = "";
        filteredProds.forEach(prod => {
            const prodCard = document.createElement("div");
            prodCard.classList.add("inventory-item");
            prodCard.innerHTML = `
                <p><strong>Name:</strong> ${prod.prodName}</p>
                <p><strong>Type:</strong> ${prod.prodType}</p>
                <p><strong>Price:</strong> $${prod.prodPrice}</p>
                <p><strong>Quantity:</strong> ${prod.prodQty}</p>
                <p><strong>Description:</strong> ${prod.prodDesc}</p>
                <button onclick="removeInvenItem('${prod.prodName}')">Remove</button>
            `;
            invenContainer.appendChild(prodCard);
        });
    }

    function calculateInvenTotal() {
        const totalVal = invenList.reduce((sum, prod) => sum + (prod.prodPrice * prod.prodQty), 0);
        document.getElementById("totalValue").textContent = `Total Inventory Value: $${totalVal}`;
    }

    document.getElementById("addItemForm").addEventListener("submit", addInvenItem);
    document.getElementById("searchButton").addEventListener("click", searchInven);
});
