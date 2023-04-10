import "../styles/InfoBar.css"
export default function InfoBar() {
    return(
        <ul className="ibar">
            <li className="ibar__wraper">
                <p className="ibar__header">PLACE HOLDER TEXT</p>
                <p className="ibar__title">Comfort over style</p>
                <p className="ibar__text">Simplify your coffee routine to the touch of a button. The Ratio Six’s Bloom, Brew, and Ready phases run in sequence, delivering a perfect (and easy) cup of coffee every time.</p>
            </li>
            <li className="ibar__wraper">
                <p className="ibar__header">TEXT HEADER</p>
                <p className="ibar__title">Made with premium materials.</p>
                <p className="ibar__text">Utilizing the same die-cast aluminum heating element as the Ratio Eight, water flows evenly through the stainless steel shower head and over the grounds at the ideal extraction temperature.</p>
            </li>
            <li className="ibar__wraper">
                <p className="ibar__header">BEAUTY & FUNCTION</p>
                <p className="ibar__title">Designed for today.</p>
                <p className="ibar__text">And tomorrow. We designed the Ratio Six for longevity with precision formed stainless steel, borosilicate glass, and high end BPA-free copolymers. Every inch is built to last and covered by a 5-year warranty.</p>
            </li>
        </ul>
    )
}