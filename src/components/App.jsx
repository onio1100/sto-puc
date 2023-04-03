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

  function cartControler(product, quantity = 1, remove = false ){
    let productId = product.id;
    let productIndex = cartContent.findIndex((cartItem) => cartItem.product.id === productId);

    if(!remove){
      if(productIndex === -1){
        setCartContent((prevCartContnet) => {
          let newCartItem = {
            product: product,
            quantity: quantity
          }
          return [...prevCartContnet, newCartItem];
        })} 
      else{
        setCartContent((prevCartContnet) => {
          let oldQuantity = prevCartContnet[productIndex].quantity;
          let updatedQuantity = oldQuantity + quantity > 0 ? oldQuantity + quantity : 1;
          let updatedCartContent = [...prevCartContnet];
          updatedCartContent[productIndex] = {
            product: prevCartContnet[productIndex].product,
            quantity: updatedQuantity
          }
        return updatedCartContent;
    })}}
    else {
      setCartContent((prevCartContnet) => {
        let updatedCartContent = [...prevCartContnet]
        updatedCartContent.splice(productIndex,1);
        return updatedCartContent;
    })
    }
  }

  return (
    <div className='app'>
      <Nav handleCart={() => setDisplayCheckout(true)} handleLogo={() => setDisplayCheckout(false)}/>
      <main>
        {displayCheckout ? <Checkout handle={() => setDisplayCheckout(false)} handleCart={cartControler} cart={cartContent} /> : 
        <ProductsGrid productList={items} handleCart={cartControler} />}
      </main>
      <Footer />
    </div>
  )
}