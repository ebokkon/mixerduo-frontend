import Flippy, { FrontSide, BackSide } from "react-flippy";
import CocktailDetailsImage from "./CocktailDetailsImage";

import React from "react";

export default function FlippyImage(props) {
  return (
    <Flippy
      flipOnHover={false}
      flipOnClick={true}
      flipDirection="horizontal"
      //   ref={r => (this.flippy = r)}
      style={{
        width: 457,
        background: "linear-gradient(to right, #4791b5, #85b3c9)"
      }}
    >
      <FrontSide
        style={{
          background: "linear-gradient(to left, grey, white)"
        }}
      >
        <CocktailDetailsImage image={props.image} />
      </FrontSide>
      <BackSide style={{ background: "linear-gradient(to left, grey, white)" }}>
        <CocktailDetailsImage image={props.image} />
      </BackSide>
    </Flippy>
  );
}
