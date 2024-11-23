document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelectorAll(".card-body");

    cartItems.forEach(item => {
        const plusButton = item.querySelector(".fa-plus-circle");
        const minusButton = item.querySelector(".fa-minus-circle");
        const deleteButton = item.querySelector(".fa-trash-alt");
        const likeButton = item.querySelector(".fa-heart");
        const quantitySpan = item.querySelector(".quantity");
        const unitPrice = parseFloat(item.querySelector(".unit-price").textContent.replace('$', ''));
        
        plusButton.addEventListener("click", () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
            updateTotal();
        });

        minusButton.addEventListener("click", () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                quantity--;
                quantitySpan.textContent = quantity;
                updateTotal();
            }
        });

        deleteButton.addEventListener("click", () => {
            item.parentElement.removeChild(item);
            updateTotal();
        });

       likeButton.addEventListener("click", () => { likeButton.classList.toggle("liked"); likeButton.style.color = "red";  likeButton.style.boxshadow = "red" ; likeButton.style.transition = "red"
         
         });
    });

    function updateTotal() {
        let total = 0;
        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector(".quantity").textContent);
            const unitPrice = parseFloat(item.querySelector(".unit-price").textContent.replace('$', ''));
            total += quantity * unitPrice;
        });
        document.querySelector(".total").textContent = `${total} $`;
    }
});
