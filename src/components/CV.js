import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";

Cv.propTypes = {};


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: "white",
    },
  },
}));

function Cv() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography align={"center"}>
          A More web-friendly view is currently in the works<br/>
          Until it's ready, feel free to download a PDF version here!
        </Typography>
        <Container style={{"textAlign": "center"}}>
          <Button className={classes.button} variant={"contained"} color={"primary"} target={"_blank"}
                  href="/assets/files/fedell-resume.pdf">1-Page Résumé</Button>
          {/*<Button className={classes.button} variant={"contained"} color={"primary"} target={"_blank"}*/}
          {/*        href="/assets/files/fedell-cv.pdf">Full CV</Button>*/}
        </Container>
      </Container>
    </div>
  );
}

export default Cv;