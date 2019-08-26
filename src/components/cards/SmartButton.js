import React from 'react';
import PropTypes from 'prop-types';
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

SmartButton.propTypes = {};

const useStyles = makeStyles(theme => ({
  popover: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  button: {
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: "white",
    },
  }
}));


function SmartButton(props) {
  const {link, button} = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'popover' : undefined;
  return (
    <div>
      {link ? "" :
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{vertical: 'bottom', horizontal: 'center',}}
          transformOrigin={{vertical: 'top', horizontal: 'center',}}
        >
          <Typography className={classes.popover}>
            Sorry, I'm still working on making<br/>this content publicly available
          </Typography>
        </Popover>
      }
      <Button
        href={link}
        target={"_blank"}
        variant={"contained"}
        className={classes.button}
        color={"primary"}
        aria-describedby={id}
        onClick={link ? null : handleClick}
      >
        {button}
      </Button>
    </div>
  );
}

export default SmartButton;