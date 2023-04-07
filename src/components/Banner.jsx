import "../styles/Banner.css"
export default function Banner() {
    return(
        <section className="banner">
            <div className="banner__img"></div>
            <div className="banner__wraper">
                <h1 className="banner__text--title">Wear good.<br /> Live good.</h1>
                <p className="banner__text--slogan">New collection made to fit your live style.</p>
                <a className="banner__button" href="#grid">Shop now</a>
            </div>
        </section>
    )
}