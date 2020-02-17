import Flippy, { FrontSide, BackSide } from "react-flippy";
import { makeStyles } from "@material-ui/core/styles";
import CocktailDetailsImage from "./CocktailDetailsImage";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Ingredients from "./Ingredients";
import Card from "@material-ui/core/Card";

import React from "react";

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
  titleText: {
    color: "blue"
  },
  text: {
    textAlign: "left",
    background: "lightgrey"
  }
});

export default function FlippyCard(props) {


  const classes = useStyles();

  const getIngredients = () => {
    let cocktailArray = props;
    let ingredients = [];
    let measurements = [];
    for (let key in cocktailArray.drink) {
      if (key.startsWith("strIngredient") && cocktailArray.drink[key] !== null) {
        ingredients.push(cocktailArray.drink[key]);
      } else if (key.startsWith("strMeasure") && cocktailArray.drink[key] !== null) {
        measurements.push(cocktailArray.drink[key]);
      }
    }
    return { ing: ingredients, measure: measurements };
  };

  return (
    <Flippy
      flipOnHover={false}
      flipOnClick={true}
      flipDirection="horizontal"
      //   ref={r => (this.flippy = r)}
      style={{
        width: 650,
        height: 650
      }}
    >
      <FrontSide>
        <CocktailDetailsImage image={props.drink.strDrinkThumb} />
      </FrontSide>
      <BackSide>
        <Card className={classes.cardWithText}>
          <CardContent>
            <div>
              <Typography>
                <div className={classes.titleText}>NAME: </div>
                <div className={classes.text}>{props.drink.strDrink}</div>
                <div className={classes.titleText}>CATEGORY: </div>
                <div className={classes.text}>{props.drink.strCategory}</div>
                <div className={classes.titleText}>IBA: </div>
                <div className={classes.text}>
                  {props.strIBA === null ? "-" : props.drink.strIBA}
                </div>
                <div className={classes.titleText}>SERVE IN: </div>
                <div className={classes.text}>{props.drink.strGlass}</div>
              </Typography>

              <div className={classes.titleText}>INGREDIENTS: </div>
              <Ingredients tag={"Ingredients: "} data={getIngredients().ing} />
              <div className={classes.titleText}>MEASUREMENTS: </div>
              <Ingredients data={getIngredients().measure} />
              <div className={classes.titleText}>INSTRUCTIONS: </div>
              <div className={classes.text}>{props.drink.strInstructions}</div>
            </div>
          </CardContent>
        </Card>
      </BackSide>
    </Flippy>
  );
}
