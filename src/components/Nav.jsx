import "../styles/Nav.css";
export default function Nav(props) {
    return(
        <nav>
            <div className="nav__wraper">
                <h1 className="nav__logo" onClick={props.handleLogo}>STO-PUC</h1>
                <span className={"material-symbols-outlined " + (props.cartState ? "nav__cart nav__cart--on" : "nav__cart")} onClick={props.handleCart} >shopping_cart</span>
            </div>
        </nav>
    )
}