import Flippy, {FrontSide, BackSide} from "react-flippy";
import {makeStyles} from "@material-ui/core/styles";
import CocktailDetailsImage from "./CocktailDetailsImage";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Ingredients from "./Ingredients";
import Card from "@material-ui/core/Card";

import React from "react";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    cardWithImage: {
        margin: "auto",
        justifyContent: "space-between"
    },
    cardWithText: {
        background: "lightgrey",
        padding: "5px",
        margin: "auto",
        justifyContent: "space-around"
    },
    titleText: {
        color: "blue"
    },
    text: {
        textAlign: "left",
        background: "lightgrey"
    },
    sides: {
        backgroundColor: "white"
    },
});

export default function FlippyCard(props) {

    const classes = useStyles();

    return (
        <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            className={classes.flippy}
        >
            <FrontSide className={classes.sides}>
                <CocktailDetailsImage image={props.drink.strDrinkThumb} className={classes.cardWithImage}/>
            </FrontSide>
            <BackSide className={classes.sides}>
                <Card className={classes.cardWithText}>
                        <div className={classes.titleText}>NAME:</div>
                        <div className={classes.text}>{props.drink.strDrink}</div>
                        <div className={classes.titleText}>CATEGORY:</div>
                        <div className={classes.text}>{props.drink.strCategory}</div>
                        <div className={classes.titleText}>IBA:</div>
                        <div className={classes.text}>
                            {props.strIBA === null ? "-" : props.drink.strIBA}
                        </div>
                        <div className={classes.titleText}>SERVE IN:</div>
                        <div className={classes.text}>{props.drink.strGlass}</div>

                        <div className={classes.titleText}>INGREDIENTS:</div>
                        <Ingredients tag={"Ingredients: "} data={props.drink.ingredients}/>

                        <div className={classes.titleText}>MEASUREMENTS:</div>
                        <Ingredients data={props.drink.measurements}/>

                        <div className={classes.titleText}>INSTRUCTIONS:</div>
                        <div className={classes.text}>{props.drink.strInstructions}</div>
                </Card>
            </BackSide>
        </Flippy>
    );
}
