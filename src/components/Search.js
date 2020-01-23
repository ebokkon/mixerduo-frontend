import React, { useState } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "./CircularProgress";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CocktailImage from "./CocktailImage";
import CocktailItem from "./CocktailItem";
import CardActions from "@material-ui/core/CardActions";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

export default function Search(props) {
  // const [cocktails, setCocktails] = useHttp(
  //   "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
  //   []
  // );

  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const handleOnchange = (event, value) => {
    value === null ? setSelectedCocktail(null) : setSelectedCocktail(value);
  };

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

  return props.cocktails === null ? (
    <div>
      <CircularProgress />
    </div>
  ) : (
    <div>
      <div> {console.log(props.cocktails)}</div>
      <div style={{ margin: "15px", padding: "auto" }}>
        <Autocomplete
          id="cocktail-select"
          options={props.cocktails}
          getOptionLabel={option => option.strDrink}
          style={{ width: 400 }}
          onChange={(event, value) => handleOnchange(event, value)}
          renderInput={params => (
            <TextField
              {...params}
              label="Search cocktails"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </div>
      <div>
        {selectedCocktail === null ? (
          props.cocktails.map(cocktail => (
            <Card className={classes.card} key={cocktail.idDrink}>
              <CardActionArea key={cocktail.idDrink}>
                <CocktailImage image={cocktail.strDrinkThumb} />
                <CardContent>
                  <CocktailItem item={cocktail} />
                </CardContent>
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
          ))
        ) : (
          <Card className={classes.card} key={selectedCocktail.idDrink}>
            <CardActionArea key={selectedCocktail.idDrink}>
              <CocktailImage image={selectedCocktail.strDrinkThumb} />
              <CardContent>
                <CocktailItem item={selectedCocktail} />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <FavoriteIcon size="small" color="primary" />
              <ShareIcon size="small" color="primary"></ShareIcon>
              <Link
                className={classes.link}
                to={`/cocktails/${selectedCocktail.idDrink}`}
                id={selectedCocktail.idDrink}
                size="small"
                color="primary"
              >
                Learn More
              </Link>
            </CardActions>
          </Card>
        )}
      </div>
    </div>
  );
}
