import "../styles/Checkout.css"
export default function Checkout(props){
    return(
        <div className="checkout">

            <div className="checkout__left">
                <div className="checkoutl__content">
                    <h1 className="checkoutl__logo" onClick={props.handle}>STO-PUC</h1>
                    <div className="checkoutl__form">
                        
                        <label className="checkoutl__form--label">Contact</label>
                        <input className="checkoutl__form--input" type="email" placeholder="Email"/>

                        <div className="checkoutl__form--checkbox--wraper">
                            <input className="checkoutl__form--checkbox--input" type="checkbox"/>
                            <label className="checkoutl__form--checkbox--label">Email me with news and offers</label>
                        </div>

                        <label className="checkoutl__form--label">Shipping information</label>
                        <div className="checkoutl__form--select--wraper">
                            <span className="material-symbols-outlined checkoutl__form--select--arrow">expand_more</span>
                            <select className="checkoutl__form--select--select">
                                <option>USA</option>
                                <option>Poland</option>
                                <option>Germany</option>
                            </select>
                        </div>                        

                        <div className="checkoutl__form--wraper">
                            <label className="checkoutl__form--labelh">First name</label>
                            <input className="checkoutl__form--input half margin" type="text" placeholder="First name"/>

                            <label className="checkoutl__form--labelh">Last name</label>
                            <input  className="checkoutl__form--input half" type="text" placeholder="Last name"/>
                        </div>

                        <label className="checkoutl__form--labelh">Adress</label>
                        <input  className="checkoutl__form--input" type="text" placeholder="Adress"/>

                        <label className="checkoutl__form--labelh">Adress line 2 (optional)</label>
                        <input  className="checkoutl__form--input" type="text" placeholder="Adress line 2 (optional)"/>


                        <div className="checkoutl__form--wraper">
                            <label className="checkoutl__form--labelh">City</label>
                            <input  className="checkoutl__form--input half margin" type="text" placeholder="City"/>

                            <label className="checkoutl__form--labelh">Zip code</label>
                            <input  className="checkoutl__form--input half" type="text" placeholder="Zip code"/>
                        </div>

                        <label className="checkoutl__form--labelh">Phone number</label>
                        <input  className="checkoutl__form--input" type="tel" placeholder="Phone number"/>

                        <div className="checkoutl__buttons">
                            <div className="checkoutl__buttons--wraper" onClick={props.handle}>
                                <span className="checkoutl__buttons--icon material-symbols-outlined">arrow_back_ios</span>
                                <p className="checkoutl__buttons--text">Return to shop</p>
                            </div>
                            <button className="checkoutl__buttons--button">Continue to payment</button>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="checkout__right">
                <div className="checkoutr__content">
                    <ul className="checkoutr__list">
                        {
                            props.cart.map((cartItem) => (
                                <ListItem key={cartItem.product.id} product={cartItem.product} quantity={cartItem.quantity} handleCart={props.handleCart}/>
                            ))
                        }
                    </ul>
                    <div className="checkoutr__discout--wraper">
                        <label className="checkoutr__discout--label">Gift cardor discount code</label>
                        <input className="checkoutr__discout--input" type="text" placeholder="Gift card or discount code" />
                        <button className="checkoutr__discout--button">Apply</button>
                    </div>
                    <div className="checkoutr__subtotal--wraper">
                        <p className="checkoutr__subtotal--text">Subtotal</p>
                        <p className="checkoutr__subtotal--value">{props.cart.reduce((acumulator, cartItem) => (acumulator += cartItem.quantity * cartItem.product.price),0).toFixed(2)}$</p>
                    </div>
                    <div className="checkoutr__shipping--wraper">
                        <p className="checkoutr__shipping--text">Shipping</p>
                        <p className="checkoutr__shipping--value">Free</p>
                    </div>
                    <div className="checkoutr__total--wraper">
                        <p className="checkoutr__total--text">Total</p>
                        <p className="checkoutr__total--value">{props.cart.reduce((acumulator, cartItem) => (acumulator += cartItem.quantity * cartItem.product.price),0).toFixed(2)}$</p>
                    </div>
                </div>
            </div>
        </div>


        // <div className="check">
        //     <button onClick={props.handle}>wróć</button>
        //     <ul>{
        //         props.cart.map((cartItem) => (
        //             <ListItem key={cartItem.product.id} product={cartItem.product} quantity={cartItem.quantity} handleCart={props.handleCart}/>
        //         ))
        //     }</ul>
            
        // </div>
    )
}
function ListItem(props){
    let shortenTitle = props.product.title.length < 54 ? props.product.title : (props.product.title.slice(0,54) + "...");

    return(
        <li className="checkoutr__item">
            <div className="checkoutr__img--wraper">
                <img className="checkoutr__img" src={props.product.image} alr={props.product.title} />
            </div>
            <p className="checkoutr__title">{shortenTitle}</p>
            <div className="checkoutr__quantity--wraper">
                <button className="checkoutr__quantity--change" onClick={() => props.handleCart(props.product, -1)}>-</button>
                <p className="checkoutr__quantity--display">{props.quantity}</p>
                <button className="checkoutr__quantity--change" onClick={() => props.handleCart(props.product)}>+</button>
                <button className="checkoutr__quantity--delete" onClick={() => props.handleCart(props.product, 1, true)}>
                    <span className="material-symbols-outlined checkoutr__quantity--icon">delete</span>
                </button>
            </div>
            <p className="checkoutr__price">{props.product.price}$</p>
        </li>
            // {/* <p>name: {props.product.title}</p>
            // <button onClick={() => props.handleCart(props.product)}>+</button>
            // <p>quantity: {props.quantity}</p>
            // <button onClick={() => props.handleCart(props.product, -1)}>-</button>
            // <button onClick={() => props.handleCart(props.product, 1, true)}>usuń</button> */}
        )
}