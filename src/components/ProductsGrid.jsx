import { useState } from "react";
import "../styles/ProductsGrid.css";
import Banner from "./Banner";
import ProductTile from "./ProductTile";
import ProductPage from "./ProductPage";
import BenefitsBar from "./BenefitsBar";
import SmallBanner from "./SmallBanner";
import InfoBar from "./InfoBar";
import { useItems } from "./App";

export default function ProductsGrid(props) {
    const [filters, setFilters] = useState({
        category: "all",
        sorting: ["popular","asc"] //popular, price, reviews | asc , desc
    })
    const [selectedProduct, setSelectedProduct] = useState(false);

    function inputsControl(e){
        const {name, value} = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: JSON.parse(value)
        }))
    }

    function createProductGrid() {
         let productList = [...useItems()];
        let categoryFilter = filters.category;
        let sortingCriteria = filters.sorting[0];
        let sortingOrder = filters.sorting[1];
        
        let filteredProducts = productList.filter((product) => {
          return categoryFilter === "all" || product.category === categoryFilter;
        });
        
        if (sortingCriteria !== "popular") {
          let sortingKey = sortingCriteria === "price" ? "price" : "rating.rate";
          filteredProducts.sort((a, b) =>{
            let firstValue = sortingKey.split('.').reduce((o, key) => o[key], a);
            let secendValue = sortingKey.split('.').reduce((o, key) => o[key], b);
            return firstValue - secendValue;

        });
          if (sortingOrder === "desc") {
            filteredProducts.reverse();
          }
        }
        
        return filteredProducts.map((product) => (
          <ProductTile product={product} key={product.id}  handleProductPage={setSelectedProduct}/>
        ));
      }

    if(selectedProduct){
        return( 
            <ProductPage product={selectedProduct} handleClosing={setSelectedProduct} handleCart={props.handleCart}/>
        )
    } else {
        return (
            <div className="item-list">
                <Banner />
                <BenefitsBar />
                <div className="bar">
                    <h4 className="bar__text"></h4>

                    <div className="filters">
                        <div className="filters__wraper">
                                <label htmlFor="category" className="filters__label--category" >Category:</label>
                                <span className="material-symbols-outlined filters__arrow" onClick={props.handleCart} >expand_more</span>
                                <select id="category"
                                        className="filters__select"
                                        value={JSON.stringify(filters.category)}
                                        onChange={inputsControl}
                                        name="category">
                                    <option value={JSON.stringify("all")}>all</option>
                                    <option value={JSON.stringify("men's clothing")}>men's clothing</option>
                                    <option value={JSON.stringify("women's clothing")}>women's clothing</option>
                                    <option value={JSON.stringify("jewelery")}>jewelery</option>
                                    <option value={JSON.stringify("electronics")}>electronics</option>
                                </select>
                            </div>

                            <div className="filters__wraper">
                                <label htmlFor="sort" className="filters__label--category" >Sort By:</label>
                                <span className="material-symbols-outlined filters__arrow" onClick={props.handleCart} >expand_more</span>
                                <select id="sort"
                                        className="filters__select"
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
                    </div>
                    
                </div>
                <div className="grid" id="grid">
                    {createProductGrid()}
                </div>
                <SmallBanner />
                <InfoBar />
            </div>
        )
    }
}