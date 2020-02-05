import React, { useContext } from "react";
import CocktailImage from "./cocktailunits/CocktailImage";
import CocktailItem from "./cocktailunits/CocktailItem";
import { CardContent } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { Card } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import CircularProgress from "../CircularProgress";
import { CocktailsListContext } from "../../context/CocktailsListContext";

export default function CocktailCard() {
  const { cocktails } = useContext(CocktailsListContext);

  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      margin: "30px",
      display: "inline-block"
    },
    link: {
      textDecoration: "none"
    }
  });

  const classes = useStyles();

  return cocktails === null ? (
    <div>
      <CircularProgress />
    </div>
  ) : (
    <div id="browsepage">
      {cocktails.map(cocktail => {
        return cocktail ? (
          <Card className={classes.card} key={cocktail.idDrink}>
            <CardActionArea>
              <React.Fragment key={cocktail.idDrink}>
                <CocktailImage image={cocktail.strDrinkThumb} />
                <CardContent>
                  <CocktailItem item={cocktail} />
                </CardContent>
              </React.Fragment>
            </CardActionArea>
            <CardActions>
              <FavoriteIcon size="small" color="primary" />
              <ShareIcon size="small" color="primary"></ShareIcon>
              <Link
                className={classes.link}
                to={`/cocktails/${cocktail.idDrink}`}
                id={cocktail.idDrink}
                size="small"
                color="primary"
              >
                Learn More
              </Link>
            </CardActions>
          </Card>
        ) : (
          <div />
        );
      })}
    </div>
  );
}
