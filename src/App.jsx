import './App.css';
import {useState} from "react";
import Header from './layout/header/header.jsx';
import Main from './layout/main/main.jsx';
import Footer from './layout/footer/footer.jsx';

function App() {
  const [modal, setModal] = useState(false)
  const modalOn = () => {
    setModal((e) => !e);
  }
    return (
        <div className='wrapper'>
           <Header modalOn={modalOn}/>
           <Main modal={modal} modalOn={modalOn}/>
           {/*<Footer />*/}
        </div>
  )
}

export default App
