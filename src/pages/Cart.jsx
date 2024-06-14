import React, { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem";
import CartSummary from "../components/CartSummary"

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const loadCartItems = () => {
        const items = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(items);
    };

    useEffect(() => {
        loadCartItems();
    }, []);

    const removeFromCart = (productId) => {
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems = cartItems.filter(item => item.id !== productId);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        setCartItems(cartItems);
    };

    const handleQuantityChange = (productId, quantity) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === productId) {
                return { ...item, quantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
    };

    return (
        <div className="p-20 ">
            <h1 className="text-4xl">Votre panier</h1>
            <div className=" flex gap-10" >
            {cartItems.length === 0 ? (
                
                <p className="text-2xl w-[800px]">Votre panier est vide.</p>
            ) : (
                <div className="w-[800px] ">
                    {cartItems.map((item) => (
                        <ProductItem
                            key={item.id}
                            product={item}
                            showRemoveFromCartButton={true}
                            showQuantityButton={true}
                            removeFromCart={() => removeFromCart(item.id)}
                            onQuantityChange={handleQuantityChange}
                            classNameProduct={"flex my-3 bg-gray-200 p-3 rounded relative"}
                            classNameImg={"h-[150px] w-[150px] mr-10 rounded "}
                        />
                    ))}
                </div>
            )}
            <CartSummary 
            totalItems={cartItems.length} totalPrice={calculateTotalPrice()} 
            classNameCS={"bg-gray-200 p-6 w-[350px] h-[70vh] rounded "}
            />
        </div>
        </div>
        
    );
};

export default Cart;
