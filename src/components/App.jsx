import { createContext, useContext, useEffect, useState } from 'react';
import "../styles/App.css";
import { Navigate, Outlet, useOutlet } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

const ItemsContext = createContext();
const CartContext = createContext();
const CartControlerContext = createContext();

export function useItems() {
  return useContext(ItemsContext);
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartControler(){
  return useContext(CartControlerContext);
}

export default function App() {
  const [cartContent, setCartContent] = useLocalStorage("cart", []);
  const [items, setItems] = useState([]);
  const isOutlet = useOutlet();
  

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
      <ItemsContext.Provider value={items} >
        <CartContext.Provider value={cartContent} >
          <CartControlerContext.Provider value={cartControler}>
            <Outlet />
            {isOutlet ? "" : <Navigate to="/sto-puc/home/products" /> }
          </CartControlerContext.Provider>
        </CartContext.Provider>
      </ItemsContext.Provider>
    </div>
  )
}