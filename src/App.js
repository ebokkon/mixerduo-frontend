import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CocktailCard from "./components/CocktailCard";
import CocktailDetails from "./components/CocktailDetails";

import "./App.css";

function App() {
  const handleClick = id => {};

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
        <Route
          exact
          path="/courses"
          render={props => <React.Fragment></React.Fragment>}
        ></Route>

        <Route
          exact
          path="/cocktails"
          render={props => (
            <React.Fragment>
              <CocktailCard handleClick={handleClick} />
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
          render={props => <React.Fragment></React.Fragment>}
        ></Route>
        <Route
          exact
          path="/shoppingcart"
          render={props => <React.Fragment></React.Fragment>}
        ></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
