import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import CocktailCard from "./components/pages/CocktailCard";
import CocktailDetails from "./components/pages/cocktailunits/CocktailDetails";
import "./App.css";
import Search from "./components/pages/Search";
import Courses from "./components/pages/Courses";
import ShoppingCart from "./components/pages/ShoppingCart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { useHttpAll } from "./hooks/HttpAll";

function App() {
  const [cocktails, setCocktails] = useHttpAll();

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <ShoppingCartProvider>
          <Route exact path="/" component={Home}/>
          <Route exact path="/courses" component={Courses}/>
          <Route
            exact
            path="/cocktails"
            render={props => (
                <React.Fragment>
                    <CocktailCard cocktails={cocktails}/>
                </React.Fragment>
            )}
            />
          <Route
            exact
            path={`/cocktails/:id`}
            render={props => (
                <React.Fragment>
                    <CocktailDetails id={props}/>
                </React.Fragment>
            )}
            />
          <Route
            exact
            path="/search"
            render={props => (
                <React.Fragment>
                    <Search cocktails={cocktails}/>
                </React.Fragment>
            )}
            />
          <Route exact path="/shoppingcart" component={ShoppingCart}/>
        </ShoppingCartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
