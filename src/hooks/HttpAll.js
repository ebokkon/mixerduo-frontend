import React, { useState, useEffect } from "react";
import axios from "axios";

export function useHttpAll() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    let temp = [];
    let letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    Promise.all(
      letters.map(letter =>
        axios
          .get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
          )
          .then(result => (temp = temp.concat(result.data.drinks)))
      )
    )
      .then(result => setCocktails(temp.filter(z => z !== null)))
      .catch(e => console.log(e));
  }, []);

  return [cocktails, setCocktails];
}
