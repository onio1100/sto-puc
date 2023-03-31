import { useEffect, useState } from 'react';
import "../styles/App.css";
import Nav from "./Nav";
import ProductsGrid from "./ProductsGrid";
import Checkout from './Checkout';
import Footer from "./Footer";

export default function App() {
  const [items, setItems] = useState([]);
  const [displayCheckout, setDisplayCheckout] = useState(false);
  const [cartContent, setCartContent] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> {setItems(json)}) 
  },[])

  // function contentControler(){
  //   let component;
  //   switch (page) {
  //     case "productsGrid":
  //       component = <ProductsGrid productList={items} handleOPP={openProductPage}/>;
  //       break;
  //     case "productPage":
  //       component = <ProductPage product={selectedItem} />;
  //       break;
  //     case "checkout":
  //       component = 
  //       break;
  //     default:
  //       component = <ProductsGrid productList={items} handleOPP={openProductPage}/>;
  //       break;
  //   }
  //   return component;
  // }

  return (
    <div className='app'>
      <Nav handle={() => setDisplayCheckout(true)}/>
      <main>
        {displayCheckout ? <Checkout handle={() => setDisplayCheckout(false)} /> : 
        <ProductsGrid productList={items}/>}
      </main>
      <Footer />
    </div>
  )
}