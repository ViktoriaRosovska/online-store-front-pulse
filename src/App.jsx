import './App.css';
import React, { useState} from "react";
import Header from './layout/header/header.jsx';
import Main from './layout/main/main.jsx';
import {observer} from "mobx-react-lite";
const App = observer( () => {

  const [modal, setModal] = useState(false)


  const modalOn = () => {
    setModal((e) => !e);
  }

  return (
    // <BrowserRouter>


      <div className='wrapper'>
        <Header modalOn={modalOn}/>
        <Main modal={modal} modalOn={modalOn}/>
        {/*<Footer />*/}
      </div>

    // </BrowserRouter>


  )
})

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {host} from "./http/index.jsx";

export default App
