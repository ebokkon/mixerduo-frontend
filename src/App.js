import React, {useContext, useEffect} from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { CocktailsListProvider } from "./context/CocktailsListContext";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import CocktailCard from "./components/pages/CocktailCard";
import CocktailDetails from "./components/pages/cocktailunits/CocktailDetails";
import Search from "./components/pages/Search";
import Courses from "./components/pages/Courses";
import ShoppingCart from "./components/pages/ShoppingCart";
import Checkout from "./components/pages/Checkout";
import SignUp from "./components/pages/login/SignUp";
import SignIn from "./components/pages/login/SignIn";
import LogOut from "./components/pages/login/LogOut";
import Users from "./components/pages/Users";
import {UserContext, UserProvider} from "./context/UserContext";
import { DialogProvider} from "./context/DialogContext";

function App() {


  return (
    <UserProvider>
    <DialogProvider>
    <ShoppingCartProvider>
      <CocktailsListProvider>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <Navbar />
            </header>
            <Route exact path="/" component={Home} />
            <Route exact path="/courses" component={Courses} />
            <Route
              exact
              path="/cocktails"
              render={props => (
                <React.Fragment>
                  <CocktailCard />
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
                  <Search />
                </React.Fragment>
              )}
            />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/log-out" component={LogOut} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/shoppingcart" component={ShoppingCart} />
            <Route exact path="/shoppingcart/checkout" component={Checkout} />
          </div>
        </BrowserRouter>
      </CocktailsListProvider>
    </ShoppingCartProvider>
    </DialogProvider>
    </UserProvider>
  );
}

export default App;
