import { useState } from "react";
import "../styles/Grid.css";

export default function ProductsGrid(props) {
    const [filters, setFilters] = useState({
        category: "all",
        sorting: ["popular","low"] //popular, price, reviews | low , high
     })

    function inputsControl(e){
        const {name, value} = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: JSON.parse(value)
        }))
        console.log(filters)
    }


    function createProductGrid() {
        let productList = [...props.productList];
        let categoryFilter = filters.category;
        let sortingCriteria = filters.sorting[0];
        let sortingOrder = filters.sorting[1];
        
        let filteredProducts = productList.filter((product) => {
          return categoryFilter === "all" || product.category === categoryFilter;
        });
        
        if (sortingCriteria !== "popular") {
          let sortingKey = sortingCriteria === "price" ? "price" : "rating.rate";
          filteredProducts.sort((a, b) => a[sortingKey] - b[sortingKey]);
          if (sortingOrder === "desc") {
            filteredProducts.reverse();
          }
        }
        
        return filteredProducts.map((product) => (
          <ProductTile product={product} key={product.id}  handleOPP={props.handleOPP}/>
        ));
      }

    return(
        <div className="item-list">
            <div className="item_list__banner">
                {/* baner o nowej kolkcji może animowany ale to trza by było mieć grafiiki fajne  */}
            </div>
            <div className="filters-bar">

                <label htmlFor="category" className="" ></label>
                <select id="category"
                        value={JSON.stringify(filters.category)}
                        onChange={inputsControl}
                        name="category">
                    <option value={JSON.stringify("all")}>all</option>
                    <option value={JSON.stringify("men's clothing")}>men's clothing</option>
                    <option value={JSON.stringify("women's clothing")}>women's clothing</option>
                    <option value={JSON.stringify("jewelery")}>jewelery</option>
                    <option value={JSON.stringify("electronics")}>electronics</option>
                </select>

                <label htmlFor="sort" className="" ></label>
                <select id="sort"
                        value={JSON.stringify(filters.sorting)}
                        onChange={inputsControl}
                        name="sorting">
                    <option value={JSON.stringify(["popular", "asc"])} >most popular</option>
                    <option value={JSON.stringify(["price", "asc"])} >price: low to high</option>
                    <option value={JSON.stringify(["price", "desc"])} >price: high to low</option>
                    <option value={JSON.stringify(["reviews", "asc"])} >reviews: low to high</option>
                    <option value={JSON.stringify(["reviews", "desc"])} >reviews: high to low</option>
                </select>

            </div>
            <div className="grid">
                {createProductGrid()}
            </div>
        </div>
    )
}

function ProductTile(props){

    return(
        <img src={props.product.image} alt="item" className="test" onClick={() => props.handleOPP(props.product)}></img>
    )
}