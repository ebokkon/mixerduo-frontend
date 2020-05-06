import React, { useState, useEffect } from "react";
import axios from "axios";

export const CocktailsListContext = React.createContext();

export const CocktailsListProvider = props => {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailNames, setCocktailNames] = useState([]);

  useEffect(() => {
    let promCocktails = axios.get("http://localhost:8762/cocktails").then(function (response){ setCocktails(response.data); return response});
    promCocktails.then(function(response){ return response.data.map(cocktail => cocktail.strDrink)})
        .then(cocktailNames=> setCocktailNames(cocktailNames))
  }, []);


  return (
    <CocktailsListContext.Provider value={{ cocktails, setCocktails, cocktailNames }}>
      {props.children}
    </CocktailsListContext.Provider>
  );
};
