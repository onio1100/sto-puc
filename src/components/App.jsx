import { useEffect, useState } from 'react';
import "../styles/App.css";
import Nav from "./Nav";
import ProductsGrid from "./ProductsGrid";
import ProductPage from './ProductPage';
import Checkout from './Checkout';
import Footer from "./Footer";

export default function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState("productsGrid");
  const [selectedItem, setSelectedItem] = useState(false);
  const [cartContent, setCartContent] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> {setItems(json)}) 
  },[])

  function openProductPage(product){
    setPage("productPage");
    setSelectedItem(product);
  }

  function contentControler(){
    let component;
    switch (page) {
      case "productsGrid":
        component = <ProductsGrid productList={items} handleOPP={openProductPage}/>;
        break;
      case "productPage":
        component = <ProductPage product={selectedItem}/>;
        break;
      case "checkout":
        component = <Checkout handle={() => setPage("productsGrid")} />;
        break;
      default:
        component = <ProductsGrid productList={items} handleOPP={openProductPage}/>;
        break;
    }
    return component;
  }

  return (
    <div className='app'>
      <Nav handle={() => setPage("checkout")}/>
      <main>
        {contentControler()}
      </main>
      <Footer />
    </div>
  )
}