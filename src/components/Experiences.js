import React from 'react';
import PropTypes from 'prop-types';
import myData from '../data/experience.json';
import ExperienceCard from "./cards/ExperienceCard";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

Experiences.propTypes = {};

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

function Experiences(props) {
  const classes = useStyles();

  return (
    <div className="container">
      <div className={classes.root}>
        <Grid container
              spacing={3}
              direction={"row"}
              justify={"center"}
              alignItems={"top"}>
          <Grid item xs={12} sm={6} md={4}>
            <ExperienceCard {...myData.jplIntern}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ExperienceCard {...myData.oseberg}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ExperienceCard {...myData.iccew}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ExperienceCard {...myData.cpChem}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Experiences;