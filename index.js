const products = {
nike: {
    name: "Nike Shoes",

    images: [
        {
            src: "./images.jpe",
            price: 120
        },
        {
            src: "./images (1).jpe",
            price: 130
        },
        {
            src: "./images (2).jpe",
            price: 140
        },
        {
            src: "./images (3).jpe",
            price: 150
        }
    ]
},

    adidas: {
        name: "Adidas Shoes",

        images: [
            {
                src:"./images (4).jpe",
                price:135
            },
            {
                src:"./images (5).jpe",
                price:145
            },
            {
                src: "./images (6).jpe",
                price:150
            },
            {
                src:"./images (7).jpe",
                price:127
            }                 
        ],

        prices: [150, 160, 170, 180]
    }
};

let selectedProduct = products.nike;
let currentImage = 0;
let cartTotal = 0;
const productName = document.getElementById("productName");
const productImage = document.getElementById("productImage");
const productPrice = document.getElementById("productPrice");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const quantity = document.getElementById("quantity");
const addBtn = document.getElementById("addBtn");
const result = document.getElementById("result");
const productSelect = document.getElementById("productSelected");
const clearBtn = document.getElementById("clearBtn");

function showImage() {
    productImage.src = selectedProduct.images[currentImage].src;
    productPrice.textContent = selectedProduct.images[currentImage].price;
}
prevBtn.addEventListener("click", function() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = selectedProduct.images.length - 1;
    }
    showImage();
});
nextBtn.addEventListener("click", function() {
    currentImage++;
    if (currentImage >= selectedProduct.images.length) {
    currentImage = 0;
   }
    showImage();
});
productSelect.addEventListener("change", function() {
    selectedProduct = products[productSelect.value];
    currentImage = 0;
    productName.textContent = selectedProduct.name;
    productPrice.textContent = selectedProduct.price;
    showImage();
    result.textContent = "";
});
addBtn.addEventListener("click", function() {
    const amount = Number(quantity.value);
    if (amount <= 0) {
        result.textContent = "შეცდომა: რაოდენობა უნდა იყოს 1 ან მეტი.";
        result.style.color = "red";
        return;
    }
    const currentPrice = selectedProduct.images[currentImage].price;
    const totalPrice = currentPrice * amount;
    cartTotal += totalPrice;
    result.textContent =
        `პროდუქტი დაემატა კალათაში. სრული თანხა: ${totalPrice} ₾`;
    result.style.color = "green";
});
clearBtn.addEventListener("click", function() {
    quantity.value = 1;
    result.textContent = "კალათა გასუფთავდა.";
    result.style.color = "black";
});