

export const addToCart = (product) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
        cartItems[existingProductIndex].quantity += 1;
        alert("Ce produit axiste déja dans le panier")

    } else {
        cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("produit ajouté au panier")
};



export const removeFromCart = (productId) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems = cartItems.filter(item => item.id !== productId);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
