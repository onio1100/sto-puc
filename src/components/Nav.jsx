import { Link } from "react-router-dom";
import "../styles/Nav.css";
export default function Nav(props) {
    return(
        <nav>
            <div className="nav__wraper">
                <Link to="/home/products" className="nav__logo">STO-PUC</Link>
                <Link to="/checkout">
                    <span className="material-symbols-outlined nav__cart" >shopping_cart</span>
                </Link>
            </div>
        </nav>
    )
}