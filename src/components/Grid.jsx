import "../styles/Grid.css";
export default function Grid(props) {
    let condition = ([] == props.productList);

    function show(){
        let arr = props.productList;
        return arr;
    }

    let arr = props.productList.map((product, id) => {<ProductTile product={product} key={id}/>})

    return(
        <div onClick={show} className="test">{
            props.productList.map((product) => (
                <ProductTile product={product} />
            ))
        }</div>  
    )
}

function ProductTile(props){
    return(
        <div className="">
            {props.product.title}
        </div>
    )
}