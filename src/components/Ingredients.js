import React from "react";

export default function Ingredients(props) {
  return props.data.map(item => (
    <div style={{ background: "#c7c1c1" }}>{item}</div>
  ));
}
