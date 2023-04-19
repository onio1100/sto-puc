import "../styles/InfoBar.css"
export default function InfoBar() {
    return(
        <ul className="ibar">
            <li className="ibar__wraper">
                <p className="ibar__header">COMFORT MATTERS</p>
                <p className="ibar__title">Comfort and style</p>
                <p className="ibar__text">When designing our products, we think about how they look and, more importantly, how they are used. We know that your comfort of use is important and we know how to take care of it.</p>
            </li>
            <li className="ibar__wraper">
                <p className="ibar__header">ABOUT QUALITY</p>
                <p className="ibar__title">Made with premium materials.</p>
                <p className="ibar__text">Caring for the quality of our products is an important element of our work and the basis for high-quality products are high-quality materials obtained from sustainable suppliers.</p>
            </li>
            <li className="ibar__wraper">
                <p className="ibar__header">LONG TERM TRUST</p>
                <p className="ibar__title">Designed for today.</p>
                <p className="ibar__text">And tomorrow. We have created our products so that they serve you as long as possible, which is why each of our products has a 3-year warranty and we guarantee that you will fall in love with our product in 30 days.</p>
            </li>
        </ul>
    )
}