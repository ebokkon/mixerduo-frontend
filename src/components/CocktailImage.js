import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function CocktailImage(props) {
  const useStyles = makeStyles({
    image: {
      width: 250,
      height: 250,
      align: "center",
      margin: "30px"
    }
  });
  const classes = useStyles();

  return <img className={classes.image} alt="" src={props.image}></img>;
}
