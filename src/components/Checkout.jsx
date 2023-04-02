import "../styles/Checkout.css"
export default function Checkout(props){
    return(
        <div className="check">
            <button onClick={props.handle}>wróć</button>
            <ul>{
                props.cart.map((cartItem) => (
                    <ListItem key={cartItem.product.id} product={cartItem.product} quantity={cartItem.quantity} handleCart={props.handleCart}/>
                ))
            }</ul>
            
        </div>
    )
}

function ListItem(props){
    return(
        <div>
            <p>name: {props.product.title}</p>
            <button onClick={() => props.handleCart(props.product)}>+</button>
            <p>quantity: {props.quantity}</p>
            <button onClick={() => props.handleCart(props.product, -1)}>-</button>
            <button onClick={() => props.handleCart(props.product, 1, true)}>usuń</button>
        </div>
    )
}