import React from "react";

export default function Ingredients(props) {
  return props.data.map((item, index) => (
    <div key={index} style={{ textAlign: "center" }}>{item}</div>
  ));
}
