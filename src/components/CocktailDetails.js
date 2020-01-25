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
import Flippy, { FrontSide, BackSide } from "react-flippy";

const useStyles = makeStyles({
  cardWithImage: {
    width: 650,
    height: 650,
    margin: "auto",
    position: "relative"
  },
  cardWithText: {
    width: 616,
    height: 616,
    margin: "auto",
    position: "relative",
    background: "lightgrey"
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
    background: "lightgrey"
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
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection="horizontal"
              //   ref={r => (this.flippy = r)}
              style={{
                width: 650,
                height: 650
                // background:
                // "linear-gradient(0.25turn, #b5d5e8, #cae2e6, #b6bfe0)"
              }}
            >
              <FrontSide
                style={
                  {
                    // background: "linear-gradient(to left, grey, white)"
                  }
                }
              >
                <CocktailDetailsImage image={drink.strDrinkThumb} />
              </FrontSide>
              <BackSide
              // style={{ background: "linear-gradient(to left, grey, white)" }}
              >
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
                      <div className={classes.text}>
                        {drink.strInstructions}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BackSide>
            </Flippy>
          </Card>
        </div>
      ))}
    </div>
  );
}
