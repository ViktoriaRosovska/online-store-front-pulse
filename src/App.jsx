import './App.css';
import  {useContext, useEffect, useState} from "react";
import Header from './layout/header/header.jsx';
import Main from './layout/main/main.jsx';
import {observer} from "mobx-react-lite";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {brand} from "./http/ProductsApi.jsx";
import {Context} from "./main.jsx";
import ManCatalog from "./layout/manCatalog/ManCatalog.jsx";
import ProductPage from "./components/pages/productPage/ProductPage.jsx";
import Brands from "./pages/brands/Brands.jsx";
import Catalog from "./pages/catalog/Catalog.jsx";
import NewBrands from "./pages/newBrands/NewBrands.jsx";
import Sales from "./pages/sales/Sales.jsx";
import Woomans from "./pages/woomans/Woomans.jsx";

const App = observer( () => {

  const [modal, setModal] = useState(false)
  const {store} = useContext(Context)

  useEffect(() => {
     brand().then(res =>  store.setProducts(res))


  }, [])


  const modalOn = () => {
    setModal((e) => !e);
  }

  return (

    <div className='wrapper'>
      <BrowserRouter basename={'/app'}>
        <Header modalOn={modalOn}/>
        <Routes>

          <Route path={'/'} element={
            <Main modal={modal} modalOn={modalOn}/>}/>
          <Route path={'/man'} element={<ManCatalog/>}/>
          <Route path={'/man/:id'} element={<ProductPage/>}/>
          <Route path={'/brands'} element={<Brands/>}/>
          <Route path={'/catalog'} element={<Catalog/>}/>
          <Route path={'newBrands'} element={<NewBrands/>}/>
          <Route path={'/sales'} element={<Sales/>}/>
          <Route path={'/woomans'} element={<Woomans/>}/>
        </Routes>

      </BrowserRouter>

       </div>


  )
})


export default App
