import { useEffect, useState } from "react";
import "../styles/ProductPage.css";
import BenefitsBar from "./BenefitsBar";
import SmallBanner from "./SmallBanner";
import InfoBar from "./InfoBar";
export default function ProductPage(props){
    const [quantity, setQuantity] = useState(1);
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
      }, []);

    function changeQuantity(add = true){
       let quantityModifier = add ? 1 : -1;
       setQuantity((prevQuantity) => (
        prevQuantity + quantityModifier > 0 ? prevQuantity + quantityModifier : 1
       ))
    }

    return(
        <div className="product">
            <div className="product__back--wraper" onClick={() => {
                props.handleScroll()
                props.handleClosing(false)}}> 
                <span className="material-symbols-outlined product__back--arrow">arrow_back</span>
            </div>
            <div className="product__top">
                <div className="top__left">
                    <img src={props.product.image} alt={props.product.title} className="top__img" />
                </div>
                <div className="top__right">
                    <h1 className="top__title">{props.product.title}</h1>
                    <p className="top__price">{props.product.price}$</p>
                    <div className="top__rating">
                        <span className="rating__star material-symbols-outlined">star</span>
                        <p className="rating__value">{props.product.rating.rate} ({props.product.rating.count})</p>
                    </div>
                    <p className="top__description">{props.product.description}</p>
                    <ul className="top__characteristics">
                        <li className="characteristics__wraper">
                            <span className="material-symbols-outlined characteristics__icon" >recycling</span>
                            <p className="characteristics__text">MADE FROM RECYCLABLE MATERIALS</p>
                        </li>
                        <li className="characteristics__wraper">
                            <span className="material-symbols-outlined characteristics__icon" >draw</span>
                            <p className="characteristics__text">DESIGNED TO BE TIMELESS AND COMFORTABLE</p>
                        </li>
                        <li className="characteristics__wraper">
                            <span className="material-symbols-outlined characteristics__icon">favorite</span>
                            <p className="characteristics__text">LOVE TO DETAILS AND QUALITY</p>
                        </li>
                    </ul>
                    <div className="top__quantity">
                        <button className="top__quantity--button" onClick={() => changeQuantity(false)}>-</button>
                        <p className="top__quantity--display">{quantity}</p>
                        <button className="top__quantity--button" onClick={changeQuantity}>+</button>
                    </div>
                    <button className="top__add-to-cart" onClick={() => props.handleCart(props.product, quantity)}>ADD TO CART</button>
                </div>
            </div>

            <BenefitsBar />
            <SmallBanner />
            <InfoBar />
        </div>
    )
}