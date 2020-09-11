import React from "react";
import Navbar from "./components/Navbar";
import Art from "./components/Art";
import Cart from "./components/Cart";
import Clothes from "./components/Clothes";
import Home from "./components/Home";

// import Checkout from './components/Checkout'
import "./App.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// STYLING BY MWUA
// import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <Provider store={store}>
      <body>
        <div className="App">
          <BrowserRouter>
            <Navbar />

            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/" component={Art} />
              <Route path="/cart" component={Cart} />
              <Route path="/clothes" component={Clothes} />
              {/* <Route path="/checkout" component={Checkout} /> */}
            </Switch>
          </BrowserRouter>
        </div>
      </body>
    </Provider>
  );
}

export default App;
