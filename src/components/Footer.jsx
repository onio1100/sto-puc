import { useState } from "react";
import "../styles/Footer.css";
export default function Footer() {
    const [email,setEmail] = useState("");
    
    function handleEmail(e){
        setEmail(e.target.value);
    }

    return(
        <footer>
            <div className="footer__wraper">
                <div className="footer__left">
                    <ul className="footer__list">
                        <li>Contact us</li>
                        <li>Waranty</li>
                        <li>Returns</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="footer__center">
                    <p className="footer__text"></p>
                    <div className="email">
                        <input
                            className="email__input"
                            type="email"
                            onChange={handleEmail}
                            value={email}
                            placeholder="Enter your email"
                        />
                        <span className="material-symbols-outlined email__icon" onClick={() => setEmail("")}>mail</span>
                    </div>
                </div>
                <div className="footer__right">
                    <div>
                        <p><a></a><a></a></p>
                        <p></p>
                    </div>
                </div>
            </div>    
        </footer>
    )
}