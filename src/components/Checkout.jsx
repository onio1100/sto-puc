import "../styles/Checkout.css"
export default function Checkout(props){
    return(
        <div className="checkout">
            <div className="checkout__left">
                <h1 className="checkoutl__logo"></h1>
                <form className="checkoutl__form">
                    
                </form>
            </div>
            <div className="checkout__right">

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