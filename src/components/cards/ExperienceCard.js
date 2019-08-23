import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {animated, useSpring} from "react-spring";

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  title: {
    height: 100,
    alignContent: "top",
  },
  body: {
    position: "relative",
    height: 250,
  },
  content: {
    height: 250,
    position: "absolute",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 250,
    paddingTop: '56.25%', // 16:9
    position: 'absolute',
    width: "100%",
    zIndex: 2,
    opacity: 0.75,
    backgroundColor: "white",
  },
}));


function ExperienceCard(props) {
  const {company, title, location, startDate, endDate, image, short} = props;
  const classes = useStyles();

  function hover() {
    toggle(!shown);
  }

  const [shown, toggle] = useState(true);
  const spring = useSpring({marginLeft: shown ? 0 : 350});


  return (
    <Card className={classes.card}
          onMouseEnter={hover}
          onMouseLeave={hover}
    >
      <CardHeader
        className={classes.title}
        title={company}
        subheader={title}
      />
      <div className={classes.body}>
        <animated.div style={spring}>
          <CardMedia
            image={image}
            title={company}
            className={classes.media}
          />
        </animated.div>
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            {short}
          </Typography>
          <CardActions style={{justifyContent: "space-between"}}>
            <Button
              aria-label="show more"
              style={{margin: "auto"}}
              variant={"contained"}
              color={"primary"}
            >
              ...more
            </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
}

export default ExperienceCard;