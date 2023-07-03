import { Navigate, Outlet, useOutlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Home(){
    const isOutlet = useOutlet();

    return(
        <div>
            <Nav />
                <Outlet />
                {isOutlet ? "" : <Navigate to="/home/products" /> }
            <Footer />
        </div>
    )
}