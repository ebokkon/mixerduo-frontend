import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import {ShoppingCartProvider} from "./context/ShoppingCartContext";
import {CocktailsListProvider} from "./context/CocktailsListContext";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import CocktailCard from "./components/pages/CocktailCard";
import CocktailDetails from "./components/pages/cocktailunits/CocktailDetails";
import Search from "./components/pages/Search";
import Courses from "./components/pages/Courses";
import ShoppingCart from "./components/pages/ShoppingCart";
import Checkout from "./components/pages/Checkout";
import SignIn from "./components/pages/checkoutunits/SignIn";
import SignUp from "./components/pages/checkoutunits/SignUp";

function App() {
    const text = "Sign Up";
    return (
        <ShoppingCartProvider>
            <CocktailsListProvider>
                <BrowserRouter>
                    <div className="App">
                        <header className="App-header">
                            <Navbar/>
                        </header>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/courses" component={Courses}/>
                        <Route
                            exact
                            path="/cocktails"
                            render={props => (
                                <React.Fragment>
                                    <CocktailCard/>
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
                                    <Search/>
                                </React.Fragment>
                            )}
                        />
                        <Route exact path="/sign-in" component={SignIn}/>
                        <Route
                            exact
                            path="/sign-up"
                            render={props => (
                                <React.Fragment>
                                    <SignUp buttontext={text}/>
                                </React.Fragment>
                            )}
                        />
                        <Route exact path="/shoppingcart" component={ShoppingCart}/>
                        <Route exact path="/shoppingcart/checkout" component={Checkout}/>
                    </div>
                </BrowserRouter>
            </CocktailsListProvider>
        </ShoppingCartProvider>
    );
}

export default App;
