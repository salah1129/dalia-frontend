import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from '@fortawesome/free-solid-svg-icons';

const CartSummary = ({ totalPrice, totalItems, classNameCS }) => {
    return (
        <div className={`${classNameCS}`}>
            <h3 className="text-lg font-bold text-center mb-4">Résumé du panier</h3>
            <p className="flex justify-between font-bold">Nombre de produits : <span>{totalItems} articles</span> </p>
            <p className="flex justify-between font-bold">Total Price : <span> {totalPrice} DH</span> </p>
            <h4>Vous avez une réduction ?</h4>
            <input placeholder="Code promo" className="h-[30px] w-[80%] p-1 "/>
            <Button children={"ok"} btnStyles={"bg-gray-600 text-white py-1 px-2 rounded ml-5"}/>
            <Link to={"/checkout"}>
                <Button children={"Passer votre commande"}
                btnStyles={"bg-gray-600 text-white py-1 px-16 rounded my-3"}
                />
            </Link>
            <p>✓ 100 jours pour changer d'avis</p>
            <p>✓ Valable sur la totalité de la commande</p>
            <p>✓ Frais de retour 100% gratuits</p>
            <h4 className="flex justify-center items-center m-5 font-bold"><FontAwesomeIcon icon={faLock} className='lockIcon mr-1'/>Paiement securisé</h4>
            <img src="/paiement.PNG" alt="" />
        </div>
    );
};
export default CartSummary;
