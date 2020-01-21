import React, { useState } from "react";
import { useHttp } from "../hooks/Http";
import CocktailDetailsImage from "./CocktailDetailsImage";
import Ingredients from "./Ingredients";

export default function CocktailDetails(props) {
  const [cocktail, setCocktail] = useHttp(props.url, []);
  const [ingredients, setIngredients] = useState([]);
  const [measurements, setMeasurements] = useState([]);

  const getIngredients = () => {
    for (let key in cocktail) {
      if (key.startsWith("strIngredient") && cocktail[key] !== null) {
        setIngredients(...ingredients, cocktail[key]);
      } else if (key.startsWith("strMeasure") && cocktail[key] !== null) {
        setMeasurements(...measurements, cocktail[key]);
      }
    }
  };
  getIngredients();

  return (
    <div>
      <div>
        <CocktailDetailsImage />
      </div>
      <div>
        {props.data.drinks.map(cocktail => (
          <div>
            <div>{cocktail.strDrink}</div>
            <div>{cocktail.strCategory}</div>
            <div>{cocktail.strIBA}</div>
            <div>{cocktail.strGlass}</div>
            <Ingredients data={ingredients} />
            <Ingredients data={measurements} />
            <div>{cocktail.strInstructions}</div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
