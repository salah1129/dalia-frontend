import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ProductItem = ({
    product, 
    removeFromCart, 
    addToCart, 
    classNameProduct, 
    classNameImg, 
    cartBtnStyles,
    showCartButton = false, 
    showRemoveFromCartButton = false, 
    showQuantityButton = false,
    onQuantityChange
}) => {
    const handleQuantityChange = (event) => {
        const quantity = parseInt(event.target.value, 10);
        onQuantityChange(product.id, quantity);
    };

    return (
        <div className={`${classNameProduct} `}>
            <Link to={`/productsDetails/${product.id}`} data-aos="zoom-in">
            <img src={`/products/${product.productImage}`} alt={product.productName} className={`${classNameImg}`} />
            </Link>
            <div className="px-3 py-1">
                <h5 className={"font-bold"}>{product.productName}</h5>
                <p className="text-sm opacity-90">Marque: {product.brand} - Ref: {product.ref}</p>
                <p className="text-sm font-bold text-red-600"> MAD <span className="text-3xl">{product.price}</span></p>
                {showCartButton && <Button children={"Ajouter au panier"} onClick={addToCart} btnStyles={cartBtnStyles} />}
                {showQuantityButton && (
                <div>
                    <label>Quantity : </label>
                    <input type="number" min={"1"} defaultValue={"1"} onChange={handleQuantityChange} className="" />
                </div>                
                )}
                {showRemoveFromCartButton && <Button children={"X"} onClick={removeFromCart} btnStyles={"bg-gray-900 text-white font-bold hover:opacity-90 px-3 py-1 rounded ml-auto absolute top-3 right-3"}/>}
            </div>
        </div>
    );
};
export default ProductItem;
