import "../styles/ProductPage.css";
export default function ProductPage(props){
    return(
        <div className="product-page">{props.product.title}</div>
    )
}