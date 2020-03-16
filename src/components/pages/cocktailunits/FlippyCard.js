import Flippy, {FrontSide, BackSide} from "react-flippy";
import {makeStyles} from "@material-ui/core/styles";
import CocktailDetailsImage from "./CocktailDetailsImage";
import Ingredients from "./Ingredients";
import Card from "@material-ui/core/Card";

import React from "react";

const useStyles = makeStyles({
    cardWithImage: {
        margin: "auto",
        justifyContent: "space-between"
    },
    cardWithText: {
        background: "white",
        width: "100%",
        height: "100%",
        overflow: "unset",
        overflowY: "scroll"
    },
    titleText: {
        textAlign: "center",
        color: "blue"
    },
    text: {
        textAlign: "center"
    },
    sides: {
        width: "100%",
        backgroundColor: "white",
    },
});

export default function FlippyCard(props) {

    const classes = useStyles();

    return (
        <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
        >
            <FrontSide className={classes.sides}>
                <CocktailDetailsImage image={props.drink.strDrinkThumb} className={classes.cardWithImage}/>
            </FrontSide>
            <BackSide className={classes.sides}>
                <Card className={`flippyCard ${classes.cardWithText}`}>
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
