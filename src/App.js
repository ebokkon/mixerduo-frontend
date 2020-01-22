import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CocktailCard from "./components/CocktailCard";
import CocktailDetails from "./components/CocktailDetails";
import "./App.css";
import Search from "./components/Search";
import Courses from "./components/Courses";
import ShoppingCart from "./components/ShoppingCart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )}
        ></Route>
        <ShoppingCartProvider>
          <Route
            exact
            path="/courses"
            render={props => (
              <React.Fragment>
                <Courses />
              </React.Fragment>
            )}
          ></Route>

          <Route
            exact
            path="/cocktails"
            render={props => (
              <React.Fragment>
                <CocktailCard />
              </React.Fragment>
            )}
          ></Route>
          <Route
            exact
            path={`/cocktails/:id`}
            render={props => (
              <React.Fragment>
                <CocktailDetails id={props} />
              </React.Fragment>
            )}
          ></Route>
          <Route
            exact
            path="/search"
            render={props => (
              <React.Fragment>
                <Search />
              </React.Fragment>
            )}
          ></Route>

          <Route exact path="/shoppingcart" component={ShoppingCart}></Route>
        </ShoppingCartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
