import React, {useContext} from "react";
import ImageGridList from "../ImageGridList";
import ResponsiveFontSizes from "../ResponsiveFontSizes";
import { UserContext} from "../../context/UserContext";

export default function Home() {

    const { user, setUser } = useContext(UserContext);
    const text = (user.length === 0) ? "WELCOME" : "WELCOME "+ user.username;

  return (
    <div>
      <div style={h3}>
        <ResponsiveFontSizes variant={"h3"} text={text}/>
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
