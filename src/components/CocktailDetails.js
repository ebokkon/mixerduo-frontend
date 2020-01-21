import React, { useState } from "react";
import { useHttp } from "../hooks/Http";
import CocktailDetailsImage from "./CocktailDetailsImage";
import Ingredients from "./Ingredients";

export default function CocktailDetails(props) {
  const [cocktail, setCocktail] = useHttp(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id.match.params.id}`,
    []
  );
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

  return cocktail === null ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div>
        <CocktailDetailsImage />
      </div>
      <div>
        {cocktail.data.drinks.map(drink => (
          <div>
            <div>Name: {drink.strDrink}</div>
            <div>Category: {drink.strCategory}</div>
            <div>IBA: {drink.strIBA === null ? "-" : drink.strIBA}</div>
            <div>Serve in: {drink.strGlass}</div>
            <Ingredients data={ingredients} />
            <Ingredients data={measurements} />
            <div>Instructions: {drink.strInstructions}</div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
