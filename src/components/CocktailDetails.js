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
import FlippyImage from "./FlippyImage";

const useStyles = makeStyles({
  cardWithImage: {
    width: 457,
    margin: "auto",
    position: "relative"
  },
  cardWithText: {
    width: 670,
    minHeight: 460,
    margin: "auto",
    position: "relative",
    padding: "auto",
    background: "#c7c1c1",
    justifyContent: "flex-end"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  cardsContainer: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "30px"
  },
  titleText: {
    color: "blue"
  },
  text: {
    textAlign: "left",
    background: "#c7c1c1"
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
            <FlippyImage image={drink.strDrinkThumb} />
          </Card>
          <Card className={classes.cardWithText}>
            <CardContent>
              <div>
                <Typography>
                  <div className={classes.titleText}>NAME: </div>
                  <div className={classes.text}>{drink.strDrink}</div>
                  <div className={classes.titleText}>CATEGORY: </div>
                  <div className={classes.text}>{drink.strCategory}</div>
                  <div className={classes.titleText}>IBA: </div>
                  <div className={classes.text}>
                    {drink.strIBA === null ? "-" : drink.strIBA}
                  </div>
                  <div className={classes.titleText}>SERVE IN: </div>
                  <div className={classes.text}>{drink.strGlass}</div>
                </Typography>

                <div className={classes.titleText}>INGREDIENTS: </div>
                <Ingredients
                  tag={"Ingredients: "}
                  data={getIngredients().ing}
                />
                <div className={classes.titleText}>MEASUREMENTS: </div>
                <Ingredients data={getIngredients().measure} />
                <div className={classes.titleText}>INSTRUCTIONS: </div>
                <div className={classes.text}>{drink.strInstructions}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
