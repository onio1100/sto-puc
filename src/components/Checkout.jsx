import "../styles/Checkout.css"
export default function Checkout(props){
    return(
        <div className="checkout">

            <div className="checkout__left">
                <div className="checkoutl__content">
                    <h1 className="checkoutl__logo"></h1>
                    <form className="checkoutl__form">
                        
                        <label>email</label>
                        <input />

                        <label>newslettercheckbox</label>
                        <input />

                        <p>Shipping addres</p>

                        <label>country</label>
                        <select>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>

                        <label>name</label>
                        <input />

                        <label>last name</label>
                        <input />

                        <label>adress</label>
                        <input />

                        <label>adress line 2</label>
                        <input />

                        <label>city</label>
                        <input />

                        <label>zip code</label>
                        <input />

                        <label>phone number</label>
                        <input />

                        <a>return to cart</a>

                        <button></button>
                    </form>
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
                    <form className="checkoutr__discout"></form>
                    <div className="checkoutr__subtotal--wraper">
                        <p className="checkoutr__subtotal--text">subtotal</p>
                        <p className="checkoutr__subtotal--value"></p>
                    </div>
                    <div className="checkoutr__shipping--wraper">
                        <p className="checkoutr__shipping--text">shipping</p>
                        <p className="checkoutr__shipping--value"></p>
                    </div>
                    <div className="checkoutr__total--wraper">
                        <p className="checkoutr__total--text">total</p>
                        <p className="checkoutr__total--value"></p>
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
    return(
        <li className="checkoutr__item">
            <div className="checkoutr__img--wraper">
                <img className="checkoutr__img" src={props.product.image} alr={props.product.title} />
            </div>
            <p className="checkoutr__title"></p>
            <div className="checkoutr__quantity--wraper">
                <button className="checkoutr__quantity--chagne"></button>
                <p className="checkoutr__quantity--display"></p>
                <button className="checkoutr__quantity--chagne"></button>
                <button className="checkoutr__quantity--delete"></button>
            </div>
            <p className="chekoutr__price"></p>
        </li>
            // {/* <p>name: {props.product.title}</p>
            // <button onClick={() => props.handleCart(props.product)}>+</button>
            // <p>quantity: {props.quantity}</p>
            // <button onClick={() => props.handleCart(props.product, -1)}>-</button>
            // <button onClick={() => props.handleCart(props.product, 1, true)}>usuń</button> */}
        )
}