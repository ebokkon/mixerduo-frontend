import React, { useState } from "react";
import { useHttp } from "../hooks/Http";
import CircularProgress from "./CircularProgress";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CocktailImage from "./CocktailImage";
import CocktailItem from "./CocktailItem";

export default function Search(props) {
  const [cocktails, setCocktails] = useHttp(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
    []
  );

  const [selectedCocktail, setSelectedCocktail] = useState("");
  const [selectedCocktailName, setSelectedCocktailName] = useState("");

  const handleOnchange = (event, value) => {
    value === null ? setSelectedCocktail(null) : setSelectedCocktail(value);
    value === null
      ? setSelectedCocktailName("")
      : setSelectedCocktailName(value.strDrink);
  };

  return cocktails === null ? (
    <div>
      <CircularProgress />
    </div>
  ) : (
    <div>
      <div style={{ margin: "15px", padding: "auto" }}>
        <Autocomplete
          id="cocktail-select"
          options={cocktails.data.drinks}
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
          cocktails.data.drinks.map(cocktail => (
            <React.Fragment key={cocktail.idDrink}>
              <CocktailImage image={cocktail.strDrinkThumb} />
              <CocktailItem item={cocktail} handleClick={props.handleClick} />
            </React.Fragment>
          ))
        ) : (
          <React.Fragment>
            <CocktailImage image={selectedCocktail.strDrinkThumb} />
            <CocktailItem
              item={selectedCocktail}
              handleClick={props.handleClick}
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
