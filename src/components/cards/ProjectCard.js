import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Popover from "@material-ui/core/Popover";
import SmartButton from "./SmartButton";

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  button2: PropTypes.string,
  link2: PropTypes.string,
  when: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    minWidth: 345,
    height: 400,
    margin: "auto",
    position: "relative",
  },
  title: {
    alignContent: "top",
  },
  body: {
    height: "100%"
  },
  content: {},
  action: {
    padding: 16,
    position: "absolute",
    bottom: 0,
  },
  popover: {
    padding: theme.spacing(2),
    textAlign: "center",
  },

}));


function ExperienceCard(props) {
  const {title, desc, button, link, button2, link2, when, type, keywords} = props;
  const classes = useStyles();


  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          className={classes.title}
          subheader={when}
          title={title}
        />
        <div className={classes.body}>
          <CardContent
            className={classes.content}
          >
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
          </CardContent>
          <CardActions className={classes.action}>
            <SmartButton link={link} button={button}/>
            {button2 ? <SmartButton link={link2} button={button2}/> : ""}
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

export default ExperienceCard;
