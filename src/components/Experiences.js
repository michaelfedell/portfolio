import React from 'react';
import myData from '../data/experience.json';
import ExperienceCard from "./cards/ExperienceCard";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";


console.log(myData);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Experiences() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Grid container
              spacing={3}
              direction={"row"}
              justify={"center"}
              alignItems={"stretch"}>
          {Object.keys(myData).map(exp => {
            return (
              <Grid item xs key={exp}>
                <ExperienceCard {...myData[exp]}/>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </Container>
  );
}

export default Experiences;