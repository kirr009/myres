// Menu toggle functionality
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Scroll functionality
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header .navbar a[href*="${id}"]`).classList.add('active');
            });
        }
    });
};

// Search form functionality
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

// Swiper initialization
var homeSwiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var reviewSwiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        0: { slidesPerView: 1 },
 640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

// Loader functionality
window.onload = function() {
    document.querySelector('.loader-container').classList.add('fade-out');
};

// Shopping cart functionality
const orderForm = document.getElementById('order-form');
const cartItemsContainer = document.getElementById('cart-items');
let cartItems = [];

orderForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const formData = new FormData(orderForm);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const order = formData.get('order');
    const quantity = formData.get('quantity');

    // Create an order object
    const orderItem = {
        name: name,
        phone: phone,
        order: order,
        quantity: quantity
    };

    // Add the order to the cart
    cartItems.push(orderItem);

    // Clear the form fields
    orderForm.reset();

    // Update the cart display
    updateCartDisplay();
});

// Function to update the cart display
function updateCartDisplay() {
    // Clear the current cart display
    cartItemsContainer.innerHTML = '';

    // Display each item in the cart
    cartItems.forEach((order, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <strong>Order #${index + 1}</strong><br>
            Name: ${order.name}<br>
            Phone: ${order.phone}<br>
            Item: ${order.order}<br>
            Quantity: ${order.quantity}
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}