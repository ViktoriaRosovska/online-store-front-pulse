import "./App.css";
import { useContext, useEffect, useState } from "react";
// import Header from "./layout/header/header.jsx";
import Main from "./layout/main/main.jsx";
import { observer } from "mobx-react-lite";
const App = observer(() => {
  const [modal, setModal] = useState(false);
  const { store } = useContext(Context);

  useEffect(() => {
    brand().then((res) => store.setProducts(res));
  }, []);

  const modalOn = () => {
    setModal((e) => !e);
  };

  return (
    <div className="wrapper">
      {/* <Header modalOn={modalOn} /> */}
      <Main modal={modal} modalOn={modalOn} />
      {/* <Footer /> */}
    </div>
  );
});

// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { host } from "./http/index.jsx";
import { brand } from "./http/ProductsApi.jsx";
import { Context } from "./main.jsx";
// import Footer from "./layout/footer/footer.jsx";

export default App;
