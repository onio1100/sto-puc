import { useState } from "react";
import "../styles/Grid.css";

export default function Grid(props) {
    const [filters, setFilters] = useState({
        category: "all",
        sorting: ["popular"] //popular, price, reviews | low , high
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
        
        // Filtruj produkty na podstawie wybranej kategorii lub zwróć całą listę
        let filteredProducts = productList.filter((product) => {
          return categoryFilter === "all" || product.category === categoryFilter;
        });
        
        // Sortuj produkty na podstawie wybranej kategorii lub popularności
        if (sortingCriteria !== "popular") {
          let sortingKey = sortingCriteria === "price" ? "price" : "rating.rate";
          filteredProducts.sort((a, b) => a[sortingKey] - b[sortingKey]);
          if (sortingOrder === "high") {
            filteredProducts.reverse();
          }
        }
        
        // Zwróć posortowane i przefiltrowane produkty w postaci siatki komponentów ProductTile
        return filteredProducts.map((product, index) => (
          <ProductTile product={product} key={index} />
        ));
      }

    function creatGrid(){
        let arr = [];

        if(filters.category == "all"){
            arr = [...props.productList];
        } else {
            props.productList.forEach((product) => {
                if(product.category == filters.category){
                    arr.push(product);
                }});
        }

        if(filters.sorting[0] != "popular"){
            let sortingKey;

            if(filters.sorting[0] == "price"){
                sortingKey = "price";
            } else {
                sortingKey = "rating.rate";
            }

            arr = arr.sort((a, b) => (a[sortingKey] - b[sortingKey]))

            if(filters.sorting[1] == "high"){
                arr = arr.reverse();
            }
        }
        return arr.map((product, id) => (
            <ProductTile product={product} key={id} />
        ))
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
                    <option value={JSON.stringify(["popular"])} >most popular</option>
                    <option value={JSON.stringify(["price", "low"])} >price: low to high</option>
                    <option value={JSON.stringify(["price", "high"])} >price: high to low</option>
                    <option value={JSON.stringify(["reviews", "low"])} >reviews: low to high</option>
                    <option value={JSON.stringify(["reviews", "high"])} >reviews: high to low</option>
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
        <img src={props.product.image} alt="item" className="test"></img>
    )
}