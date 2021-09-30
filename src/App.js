import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//components
import Navbar from "./components/Navbar";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Modal from "./components/modal";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/Product" component={Product} />
          <Route path="/Details" component={Details} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </BrowserRouter>
    </>
  );
}

export default App;
