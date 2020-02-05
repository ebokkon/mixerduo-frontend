import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {tiers} from "../../constantdata/CoursesData";
import Footer from "./coursesunits/Footer";
import ButtonAddToCart from "./coursesunits/ButtonAddToCart";
import CoursesPageHeader from "./coursesunits/CoursesPageHeader";
import Pricing from "./coursesunits/Pricing";

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[700]
        : theme.palette.grey[200],
    minHeight: 100
  }
}));


export default function Courses() {

  const classes = useStyles();
  return (
    <React.Fragment>
      <CoursesPageHeader/>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Pricing tier={tier}/>
                </CardContent>
                <CardActions>
                  <ButtonAddToCart tier={tier}/>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </React.Fragment>
  );
}
