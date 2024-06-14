export const addToCart = (p) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingProductIndex = cartItems.findIndex(item => item.id === p.id);

    if (existingProductIndex !== -1) {
      cartItems[existingProductIndex].quantity += 1;
      alert("Ce produit existe déjà dans le panier");
    } else {
      cartItems.push({ ...p, quantity: 1 });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      alert("Produit ajouté au panier");
    }
};