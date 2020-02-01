import React from "react";
import ImageGridList from "../ImageGridList";
import ResponsiveFontSizes from "../ResponsiveFontSizes";

export default function Home() {
  return (
    <div>
      <div style={h3}>
        <ResponsiveFontSizes />
      </div>
      <ImageGridList />
    </div>
  );
}

const h3 = {
  color: "#394145",
  textAlign: "center",
  textShadow: "grey",
  fontSize: "40px",
  margin: "50px 0"
};
