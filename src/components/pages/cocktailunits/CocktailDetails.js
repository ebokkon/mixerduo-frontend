import React from "react";
import { useHttp } from "../../../hooks/Http";
import CocktailDetailsImage from "./CocktailDetailsImage";
import Ingredients from "./Ingredients";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "../../CircularProgress";
import FlippyCard from "./FlippyCard";

const useStyles = makeStyles({
  cardWithImage: {
    width: 650,
    height: 650,
    margin: "auto",
    position: "relative"
  },
  cardsContainer: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "30px"
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
    <div>
      {cocktail.data.drinks.map(drink => (
        <div className={classes.cardsContainer}>
          <Card className={classes.cardWithImage}>
            <FlippyCard drink={drink} />
          </Card>
        </div>
      ))}
    </div>
  );
}
