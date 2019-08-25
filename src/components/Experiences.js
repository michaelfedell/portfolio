import React from 'react';
import myData from '../data/experience.json';
import ExperienceCard from "./cards/ExperienceCard";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";


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
    <div className="container">
      <div className={classes.root}>
        <Grid container
              spacing={3}
              direction={"row"}
              justify={"center"}
              alignItems={"flex-start"}>
          {Object.keys(myData).map(exp => {
            return (
              <Grid item xs={12} md={6} lg={4} key={exp}>
                <ExperienceCard {...myData[exp]}/>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Experiences;