import { Link } from "react-router-dom";
import "../styles/ErrorPage.css"

export default function ErrorPage(){
    return(
        <div className="error">
            <div className="error__wraper">
                <h1 className="error__big-text">Error: 404</h1>
                <h3 className="error__small-text">Page not found</h3>
                <Link to={"/sto-puc/home/products"} className="error__button">return to home page</Link>
            </div>
        </div>
        
    )
}