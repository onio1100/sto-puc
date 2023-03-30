import { useEffect, useState } from 'react';
import "../styles/App.css";
import Nav from "./Nav";
import Grid from "./Grid";
import Checkout from './Checkout';
import Footer from "./Footer";

export default function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState("grid");

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> {setItems(json)}) 
  },[])

  function click(state){
      setPage(state);
  }


  function contentControler(){
    let component;
    switch (page) {
      case "grid":
        component = <Grid productList={items}/>;
        break;
      case "detail":
        component = <Detail />;
        break;
      case "checkout":
        component = <Checkout handle={() => click("grid")} />;
        break;
      default:
        component = <Grid productList={items}/>;
        break;
    }
    return component;
  }

  return (
    <div className='app'>
      <Nav handle={() => click("checkout")}/>
      <main>
        {contentControler()}
      </main>
      <Footer />
    </div>
  )
}