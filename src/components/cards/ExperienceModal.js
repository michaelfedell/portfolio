import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button"
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';


ExperienceModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  long: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    paddingRight: theme.spacing(7),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

function ExperienceModal(props) {
  const {open, handleClose, link, company, title, location, startDate, endDate, long} = props;
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullScreen={fullScreen}
      >
        <DialogTitle className={classes.root} id="alert-dialog-title">
          {company} - {title}
          <Typography variant={"subtitle1"}>{location}</Typography>
          <Typography variant={"subtitle2"}>{startDate} - {endDate}</Typography>

          {fullScreen ?
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon/>
            </IconButton> : ""
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant={"body2"}>{long}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button target={"_blank"} href={link} color={"primary"}>Company Website</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ExperienceModal;