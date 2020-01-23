import React from "react";
import { useHttp } from "../hooks/Http";
import CocktailDetailsImage from "./CocktailDetailsImage";
import Ingredients from "./Ingredients";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "./CircularProgress";

const useStyles = makeStyles({
  cardWithImage: {
    width: 430,
    margin: 10
  },
  cardWithText: {
    width: 500,
    margin: 20
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  cardsContainer: {
    position: "relative",
    flex: "wrap"
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
    <div>
      <CircularProgress />
    </div>
  ) : (
    <div className={classes.cardsContainer}>
      {cocktail.data.drinks.map(drink => (
        <div>
          <Card className={classes.cardWithImage}>
            <div>
              <CocktailDetailsImage image={drink.strDrinkThumb} />
            </div>
          </Card>
          <Card className={classes.cardWithText}>
            <CardContent>
              <div>
                <div>
                  <div>Name:</div>
                  <div>Category:</div>
                  <div>IBA:</div>
                  <div>Serve in: </div>
                </div>
                <div>
                  <div> {drink.strDrink}</div>
                  <div> {drink.strCategory}</div>
                  <div>{drink.strIBA === null ? "-" : drink.strIBA}</div>
                  <div>{drink.strGlass}</div>
                </div>
                <div>Ingredients: </div>
                <Ingredients
                  tag={"Ingredients: "}
                  data={getIngredients().ing}
                />
                <div>Measurements: </div>
                <Ingredients data={getIngredients().measure} />
                <div>Instructions: {drink.strInstructions}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}