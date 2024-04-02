//infinite scroll
window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log('Reached the bottom of the page!');

        setTimeout(function() {
            loadMoreItems();
        }, 1000);
      }
});

function loadMoreItems() {
    const newProduct1 = createProductElement('New Product 1', 'Description 1', '$100');
    const newProduct2 = createProductElement('New Product 2', 'Description 2', '$150');

    const productsSection = document.querySelector('.products');
    productsSection.appendChild(newProduct1);
    productsSection.appendChild(newProduct2);
}

function createProductElement(name, description, price) {
    const product = document.createElement('div');
    product.classList.add('product');
    product.innerHTML = `
        <div class="product-wrapper">
            <div class="product-image"></div>
            <div class="product-details">
                <div class="product-name">${name}</div>
                <div class="product-description">${description}</div>
                <div class="product-price">${price}</div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
    `;
    return product;
}

  //scroll up
     // JavaScript for scroll-to-top button with debounce
        window.addEventListener('scroll', _.debounce(function() {scrollFunction()}, 300));


        function scrollFunction() {
            var scrollToTopBtn = document.querySelector(".scroll-to-top");

            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }

            // Show scroll back button if scrolled down
            if (window.scrollY > 0) {
                scrollBackBtn.style.display = "block";
            } else {
                scrollBackBtn.style.display = "none";
            }

            // Store scroll position in sessionStorage
            sessionStorage.setItem('lastScrollPosition', window.scrollY);
        }

        function scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }

