import "../styles/SmallBanner.css";
import img from "../assets/small_banner.jpg";
export default function SmallBanner(){
    return(
        <section className="sbanner">   
            <div className="sbanner__left">
                <img src={img} alt="banner image" className="sbanner__img" />
            </div>
            <div className="sbanner__right">
                <p className="sbanner__title">Earth care</p>
                <p className="sbanner__text">By choosing our products, you take care of yourself and our products take care of the earth. At least 50% of the materials in our products have been recycled and our company focuses on conscious and thoughtful consumption.</p>
            </div>
        </section>
    )
}