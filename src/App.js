import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CocktailCard from "./components/CocktailCard";
import CocktailDetails from "./components/CocktailDetails";
import { ClickedCocktail } from "./context/ClickedCocktail";

import "./App.css";

function App() {
  const [value, setValue] = useState(0);

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
        <ClickedCocktail.Provider value={[value, setValue]}>
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
                <CocktailDetails
                  url={`/https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`}
                />
              </React.Fragment>
            )}
          ></Route>
        </ClickedCocktail.Provider>
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
