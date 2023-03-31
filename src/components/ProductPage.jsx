import "../styles/ProductPage.css";
export default function ProductPage(props){
    return(
        <div className="product-page" onClick={() => props.handleClosing(false)}>{props.product.title}</div>
    )
}