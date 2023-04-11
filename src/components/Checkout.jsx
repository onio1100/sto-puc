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
                    <ul>

                    </ul>
                    <form></form>
                    <div>
                        <p>subtotal</p>
                        <p></p>
                    </div>
                    <div>
                        <p>shipping</p>
                        <p></p>
                    </div>
                    <div>
                        <p>total</p>
                        <p></p>
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
        <li>

            <p>name: {props.product.title}</p>
            <button onClick={() => props.handleCart(props.product)}>+</button>
            <p>quantity: {props.quantity}</p>
            <button onClick={() => props.handleCart(props.product, -1)}>-</button>
            <button onClick={() => props.handleCart(props.product, 1, true)}>usuń</button>
        </li>
    )
}