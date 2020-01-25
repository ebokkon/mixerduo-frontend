import React from "react";

export default function Ingredients(props) {
  return props.data.map(item => (
    <div style={{ background: "lightgrey" }}>{item}</div>
  ));
}
