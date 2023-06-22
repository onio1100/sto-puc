import { Navigate, Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Home(){
    return(
        <div>
            <Nav />
                <Outlet />
                {/* <Navigate to="/home/products" /> */}
            <Footer />
        </div>
    )
}