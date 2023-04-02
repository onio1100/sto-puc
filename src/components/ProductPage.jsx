import { useState } from "react";
import "../styles/ProductPage.css";
export default function ProductPage(props){
    const [quantity, setQuantity] = useState(1);
    
    function changeQuantity(add = true){
       let quantityModifier = add ? 1 : -1;
       setQuantity((prevQuantity) => (
        prevQuantity + quantityModifier > 0 ? prevQuantity + quantityModifier : 1
       ))
    }

    return(
        <div className="product-page">
        <p>{props.product.title}</p>
        <button onClick={() => props.handleClosing(false)}>wróć</button>
        <button onClick={changeQuantity}>+</button>
        <div>{quantity}</div>
        <button onClick={() => changeQuantity(false)}>-</button>
        <button onClick={() => props.handleCart(props.product, quantity)}>add to cart</button>
        </div>
    )
}