import React, { useState, useEffect } from "react";
import axios from "axios";

export const CocktailsListContext = React.createContext();

export const CocktailsListProvider = props => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080").then(response => setCocktails(response.data))
  }, []);

  console.log(cocktails);

  return (
    <CocktailsListContext.Provider value={{ cocktails, setCocktails }}>
      {props.children}
    </CocktailsListContext.Provider>
  );
};
