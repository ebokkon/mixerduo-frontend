import React from "react";
import { useHttp } from "../hooks/Http";
import CocktailDetailsImage from "./CocktailDetailsImage";
import Ingredients from "./Ingredients";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function CocktailDetails(props) {
  const classes = useStyles();

  const [cocktail, setCocktail] = useHttp(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id.match.params.id}`,
    []
  );

  const getIngredients = () => {
    let cocktailArray = cocktail.data.drinks[0];
    let ingredients = [];
    let measurements = [];
    for (let key in cocktailArray) {
      if (key.startsWith("strIngredient") && cocktailArray[key] !== null) {
        ingredients.push(cocktailArray[key]);
      } else if (key.startsWith("strMeasure") && cocktailArray[key] !== null) {
        measurements.push(cocktailArray[key]);
      }
    }
    return { ing: ingredients, measure: measurements };
  };

  return cocktail === null ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Card>
        <CocktailDetailsImage />
      </Card>
      <div>
        {cocktail.data.drinks.map(drink => (
          <Card>
            <CardContent>
              <div>Name: {drink.strDrink}</div>
              <div>Category: {drink.strCategory}</div>
              <div>IBA: {drink.strIBA === null ? "-" : drink.strIBA}</div>
              <div>Serve in: {drink.strGlass}</div>
              <div>Ingredients: </div>
              <Ingredients tag={"Ingredients: "} data={getIngredients().ing} />
              <div>Measurements: </div>
              <Ingredients data={getIngredients().measure} />
              <div>Instructions: {drink.strInstructions}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
