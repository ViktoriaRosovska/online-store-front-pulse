import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React, {createContext} from 'react';
import App from './App.jsx'
import './index.css'
import ProductStore from "./store/ProductStore.js";
import ManCatalog from "./layout/manCatalog/ManCatalog.jsx";
import Header from "./layout/header/header.jsx";
import ProductPage from "./components/pages/productPage/ProductPage.jsx";
import Brands from "./pages/brands/Brands.jsx";
import Catalog from "./pages/catalog/Catalog.jsx";
import NewBrands from "./pages/newBrands/NewBrands.jsx";
import Woomans from "./pages/woomans/Woomans.jsx";
import Sales from "./pages/sales/Sales.jsx";


export const Context = createContext(null)


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>


      <Context.Provider value={{
        store: new ProductStore()
      }}>




<App />
      </Context.Provider>



  </React.StrictMode>,
)
