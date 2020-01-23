import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import drink1 from "../images/drink1.png";
import drink2 from "../images/drink2.png";
import drink3 from "../images/drink3.png";
import drink4 from "../images/drink4.png";
import drink5 from "../images/drink5.png";
import drink6 from "../images/drink6.png";
import drink7 from "../images/drink7.png";
import drink8 from "../images/drink8.png";
import drink12 from "../images/drink12.png";
import drink9 from "../images/drink9.png";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: 500,
    height: 450
  }
}));

const tileData = [
  {
    img: drink12,
    title: "Drink1",
    cols: 2
  },
  { img: drink2, title: "Drink2", cols: 2 },
  { img: drink9, title: "Drink3", cols: 4 },
  { img: drink4, title: "Drink4", cols: 2 },
  { img: drink5, title: "Drink5", cols: 2 },
  { img: drink6, title: "Drink6", cols: 4 },
  { img: drink7, title: "Drink7", cols: 2 },
  { img: drink8, title: "Drink8", cols: 2 }
];

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={4}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
