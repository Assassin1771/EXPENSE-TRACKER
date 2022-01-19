import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="SPEECHLY" />
        <CardContent>
          <Typography align="center" variant="h5">
            BALANCE : 100$
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ lineHight: "1.5em", marginTop: "20px" }}
          >
            TRY SAYING ADD INCOME FOR 100$ IN CATEGORY SALARY FOR MONDAY
          </Typography>
          <Divider />
          {/* <Form /> */}
        </CardContent>
        <CardContent className={classes.cardContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* list */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Main;
