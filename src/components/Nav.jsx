import { Link } from "react-router-dom";
import "../styles/Nav.css";
import { useCart } from "./App";
export default function Nav() {
    const cartState = useCart().length > 0;
    return(
        <nav>
            <div className="nav__wraper">
                <Link to="/sto-puc/home/products" className="nav__logo">STO-PUC</Link>
                <Link to="/sto-puc/checkout">
                    <span className={"material-symbols-outlined nav__cart " + (cartState ? "nav__cart--on" : "")} >shopping_cart</span>
                </Link>
            </div>
        </nav>
    )
}