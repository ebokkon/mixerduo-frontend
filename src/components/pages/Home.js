import React from "react";
import ImageGridList from "../ImageGridList";
import ResponsiveFontSizes from "../ResponsiveFontSizes";

export default function Home() {
  return (
    <div>
      <div style={h3}>
        <ResponsiveFontSizes variant={"h3"} text={"WELCOME"}/>
      </div>
      <ImageGridList />
    </div>
  );
}

const h3 = {
  color: "#394145",
  textAlign: "center",
  textShadow: "grey",
  margin: "50px 0"
};
