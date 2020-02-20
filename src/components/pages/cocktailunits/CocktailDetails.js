import React from "react";
import { useHttp } from "../../../hooks/Http";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CircularProgress from "../../CircularProgress";
import FlippyCard from "./FlippyCard";

const useStyles = makeStyles({
  cardWithImage: {
    margin: "auto",
  },
  cardsContainer: {
    width: "35%",
    margin: "30px auto 0px"
  },
  card: {
    background: "white"
  }
});

export default function CocktailDetails(props) {
  const classes = useStyles();

  const [cocktail] = useHttp(
    `http://localhost:8080/cocktails/${props.id.match.params.id}`,
    []
  );

  return cocktail === null ? (
    <div>
      <CircularProgress />
    </div>
  ) : (
    <div className={classes.cardsContainer}>
      <FlippyCard className={classes.cardWithImage} drink={cocktail} />
    </div>
  );
}
