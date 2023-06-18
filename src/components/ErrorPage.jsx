import { Link } from "react-router-dom";

export default function ErrorPage(){
    return(
        <div className="error" >
            <h1>Error: 404</h1>
            <h3>Page not found</h3>
            <Link to={"/home/products"} className="button">return to home page</Link>
        </div>
    )
}