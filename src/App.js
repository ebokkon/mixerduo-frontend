import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./App.css";

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
        <Route
          exact
          path="/courses"
          render={props => <React.Fragment></React.Fragment>}
        ></Route>
        <Route
          exact
          path="/cocktails"
          render={props => <React.Fragment></React.Fragment>}
        ></Route>
        <Route
          exact
          path="/cocktails:id"
          render={props => <React.Fragment></React.Fragment>}
        ></Route>
        <Route
          exact
          path="/search"
          render={props => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )}
        ></Route>
        <Route
          exact
          path="/shoppingcart"
          render={props => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )}
        ></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
