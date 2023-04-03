import "../styles/ProductTile.css";
export default function ProductTile(props){
    return(
        <div className="tile" onClick={() => props.handleProductPage(props.product)}>
            <img className="tile__img" src={props.product.image} alt={props.product.title}/>
            <p className="tile__title">{props.product.title}</p>
            <div className="tile__wraper">
                <span className="material-symbols-outlined tile__star">star</span>
                <p className="tile__reviews">{props.product.rating.rate} ({props.product.rating.count})</p>
            </div>
            <p className="tile__price">{props.product.price}$</p>
        </div>
    )
    
}