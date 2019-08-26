import React from 'react';
import myData from '../data/projects.json';
import ProjectCard from "./cards/ProjectCard";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";


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

function Projects() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Grid container
              spacing={3}
              direction={"row"}
              justify={"center"}
              alignItems={"stretch"}>
          {Object.keys(myData).map(proj => {
            return (
              <Grid item xs key={proj}>
                <ProjectCard {...myData[proj]}/>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </Container>
  );
}

export default Projects;