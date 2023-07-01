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
                        <li>Return</li>
                        <li>Waranty</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="footer__center">
                    <p className="footer__text">Stay up-to-date with our latest collections</p>
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
                        <p className="footer__ppandtos"><a className="footer__a">Privacy Policy</a> • <a className="footer__a">Terms of Service</a></p>
                        <p className="footer__copyright">Copyright © 2023 <a href="https://github.com/onio1100" target="_blank" className="footer__copyright--link">onio1100</a></p>
                    </div>
                </div>
            </div>    
        </footer>
    )
}