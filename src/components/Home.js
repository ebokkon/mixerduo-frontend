import React from "react";
import drink2 from "../images/drink2.png";
import ImageGridList from "./ImageGridList";

export default function Home() {
  return (
    <div>
      <h1 style={h1}>WELCOME</h1>
      {/* <img alt="cocktail" src={drink2}></img> */}
      <ImageGridList />
    </div>
  );
}

const h1 = {
  color: "#fff",
  textAlign: "center",
  textShadow: "grey",
  fontSize: "40px",
  marginTop: "50px"
};
