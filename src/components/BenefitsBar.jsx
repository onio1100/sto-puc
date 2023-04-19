import "../styles/BenefitsBar.css"
export default function BenefitsBar() {
    return(
        <div className="benefits__bar">
            <ul className="bbar">
                <li className="bbar__wraper">
                    <span className="material-symbols-outlined bbar__icon bbar__revers">local_shipping</span>
                    <p className="bbar__text">FREE SHIPPING</p>
                </li>
                <li className="bbar__wraper">
                    <span className="material-symbols-outlined bbar__icon">counter_3</span>
                    <p className="bbar__text">3 YEAR WARRANTY</p>
                </li>
                <li className="bbar__wraper">
                    <span className="material-symbols-outlined bbar__icon">workspace_premium</span>
                    <p className="bbar__text">30-DAY QUALITY GUARANTEE</p>
                </li>
            </ul>
        </div>
        
    )
}