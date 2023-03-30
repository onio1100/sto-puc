import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// założenia projektu
// cele projektu stworzenie strony symulującej sklep z 3 głównymi elementami:
// 1.strona główna 
// -baner z informacjami o nowej kolekcji albo coś takiego
// -bar z filtrami kategori, sortowanie po cenie i ocenach plus domyślne, ???pole do szukanie??? 
// -siatka produktów zmiana planów użyjemy po porstu pliku json i paru zdjęć z pexela albo innego miejsca
// ??? dodatkowe informacje o produktach w naszym sklepie                                                                <-----|                                                                               |
// 2. strona ze szczegułami o produkcie                                                                                        |
// pod informacjami o produkcie mogą wyświetlać się banery odnoszące się ogólnie do produktów na naszej stronie te same co  tu |
// 3. checkout gdzie masz liste elementów w koszyku i podajesz swoje dane
// dodatkowe elemnty które chciał bym zrealizować:
// -wysuwany od boku koszyk któy mozna podejrzeć na stronie 1 i 2 
// identyczna stopka i nav wyświetlana na każdej pod stronie  
// wygląd projektu będzie zainspirowny tą stroną ale oczyszczoną i uproszczoną https://ratiocoffee.com/