import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CocktailImage from "./cocktailunits/CocktailImage";
import CocktailItem from "./cocktailunits/CocktailItem";
import CardActions from "@material-ui/core/CardActions";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { CocktailsListContext } from "../../context/CocktailsListContext";

export default function Search() {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const { cocktails, cocktailNames } = useContext(CocktailsListContext);


  const handleOnchange = (event, value) => {
    if (value === null){
      setSelectedCocktail(null)
    } else {
      let selected = cocktails.filter(cocktail => cocktail.strDrink === value);
      setSelectedCocktail(selected[0]);
    }
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

  return (
    <div id="searchpage">
      <div style={{ margin: "15px", padding: "auto" }}>
        <Autocomplete
          id="cocktail-select"
          options={cocktailNames}
          getOptionLabel={option => option}
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
          cocktails.map(cocktail => (
            <Card className={classes.card} key={cocktail.idDrink}>
              <CardActionArea key={cocktail.idDrink}>
                <CocktailImage image={cocktail.strDrinkThumb} />
                <CardContent>
                  <CocktailItem item={cocktail} />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <FavoriteIcon size="small" color="primary" />
                <ShareIcon size="small" color="primary"> </ShareIcon>
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
