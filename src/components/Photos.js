import React from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
  link: {
    color: "#0056b3",
  },
}));

function Photos() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography align={"center"}>
          I have not yet uploaded any photos, but will soon be adding galleries featuring my favorite people, places,
          and things.<br/>In the meantime, feel free to check out my photo journals on&nbsp;
          <Link
            className={classes.link}
            component={"a"}
            href={"https://vsco.co/michaelfedell/journal/p/1"}>
            VSCO
          </Link>
        </Typography>
      </Container>
    </div>
  );
}

export default Photos;