import "../styles/SmallBanner.css";
import img from "../assets/banner.jpg";
export default function SmallBanner(){
    return(
        <section className="sbanner">   
            <div className="sbanner__left">
                <img src={img} alt="banner image" className="sbanner__img" />
            </div>
            <div className="sbanner__right">
                <p className="sbanner__title">Some stupi bullshit</p>
                <p className="sbanner__text">This is some placholder text becous I need text to see how style looks. I need more text becuse the first sentence is to short and propably i need more sentences.</p>
            </div>
        </section>
    )
}