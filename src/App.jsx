import { useState } from 'react'
import './App.css'

export default function App() {
  const [page, setPage] = useState("grid");

  function contentControler(){
    let component;

    switch (page) {
      case "grid":
        component = <Grid />
        break;
      case "detail":
        component = <Detail />
        break;
      case "checkout":
        component = <Checkout />
        break;
      default:
        component = <Grid />
        break;
    }

    return component;
  }

  return (
    <div className='app'>
      <Nav />
      {contentControler}
      <Footer />
    </div>
  )
}