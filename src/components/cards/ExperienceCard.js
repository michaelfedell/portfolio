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
import ExperienceModal from "./ExperienceModal";

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
    minWidth: 345,
    margin: "auto",
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
    height: 260,
    position: 'absolute',
    width: "100%",
    zIndex: 2,
    opacity: 1,
    backgroundColor: "white",
  },
}));


function ExperienceCard(props) {
  const {company, title, image, short} = props;
  const classes = useStyles();

  // Hover on card animation
  const [covered, toggle] = useState(true);
  const spring = useSpring({marginLeft: covered ? 0 : 350});
  function mouseOut() {
    toggle(true);
  }
  function mouseIn() {
    toggle(false);
  }

  // Detail dialog open
  const [open, setOpen] = React.useState(false);
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }



  return (
    <Card className={classes.card}
          onMouseEnter={mouseIn}
          onMouseLeave={mouseOut}
          onClick={mouseIn}
    >
      <CardHeader
        className={classes.title}
        title={company}
        subheader={title}
      />
      <div className={classes.body}>
        <animated.div style={spring}>
          <CardMedia
            image={require(`../../assets${image}`)}
            title={company}
            className={classes.media}
          />
        </animated.div>
        <CardContent
          className={classes.content}
          onMouseLeave={mouseOut}
        >
          <Typography variant="body2" color="textSecondary" component="p">
            {short}
          </Typography>
          <CardActions style={{justifyContent: "space-between"}}>
            <Button
              aria-label="show more"
              style={{margin: "auto"}}
              variant={"contained"}
              color={"primary"}
              onClick={handleClickOpen}
            >
              more
            </Button>
            <ExperienceModal {...props} open={open} handleClose={handleClose}/>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
}

export default ExperienceCard;