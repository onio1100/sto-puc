import { useEffect, useState } from 'react';
import "../styles/App.css";
import Nav from "../components/Nav";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

export default function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState("grid");

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> {setItems(json)}) 
  },[])

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
        component = <Checkout />;
        break;
      default:
        component = <Grid productList={items}/>;
        break;
    }
    return component;
  }

  return (
    <div className='app'>
      <Nav />
      <main>
        {contentControler()}
      </main>
      <Footer />
    </div>
  )
}