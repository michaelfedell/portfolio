import React from 'react';
import Grid from "@material-ui/core/Grid";

import {Icon} from "@material-ui/core";
import clsx from "clsx";
import makeStyles from "@material-ui/styles/makeStyles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import cover from "../assets/images/coverphoto.jpg"
import Tooltip from "@material-ui/core/Tooltip";


const useStyles = makeStyles(theme => ({
  root: {
    width: "65%",
    [theme.breakpoints.down('sm')]: {
      width: "90%",
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexGrow: 1,
  },
  icon: {
    margin: theme.spacing(2),
    fontSize: 75,
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: theme.palette.secondary,
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const links = [
  "https://www.mccormick.northwestern.edu/analytics/our-students-alumni/meet-students/student-profiles/class-of-2019/fedell-steven-michael.html",
  "mailto:s.michaelfedell@gmail.com?subject=Email%20Me!",
  "https://www.linkedin.com/in/michaelfedell/",
  "https://github.com/michaelfedell",
];
const icons = [
  "fas fa-university",
  "fas fa-envelope",
  "fab fa-linkedin",
  "fab fa-github",
];
const labels = [
  "University Bio",
  "Email Me",
  "LinkedIn",
  "GitHub",
]


function Home() {
  const classes = useStyles();

  return (
    <div id="content" className={clsx(classes.root, "container p-4")}>
      <div id="main">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"

        >
          <Grid item sm={12} md={6} lg={4}>
            <div className={classes.paper}>
              <div className="photobox">
                <img className="img-fluid " src={cover} alt="Michael Fedell"/>
              </div>
            </div>
          </Grid>
          <Grid item sm={12} md={6} lg={8}>
            <div className={classes.paper}>
              <div className="bio">
                <Typography variant="body1">
                  A passion for data science and analytical problem solving led me to Northwestern University where I am
                  currently pursuing a Master’s in Analytics. I grew up in Texas and then attended the University of
                  Oklahoma
                  for a degree in Chemical Engineering, but am excited to now live in the Chicago area. I am interested
                  in
                  fast-paced, innovative companies that leverage powerful software and technology to solve complex
                  engineering
                  and technical problems both internal and external. I crave a work environment that promotes empowering
                  leadership and rewards individual initiative at all levels. You can usually catch me spending time
                  outdoors,
                  reading up on the latest tech trends, or searching far and wide for the best ice cream spots.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <div id="social-lg" className="row text-center">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {links.map((l, i) => {
              return (
                <Grid item key={i} xs={6} md={3}>
                  <Link target={"_blank"} href={l}>
                    <Tooltip title={labels[i]}>
                      <Icon className={clsx(classes.icon, icons[i])}/>
                    </Tooltip>
                  </Link>
                </Grid>
              )
            })}
          </Grid>
        </div>
        <div id="quote">
          <p><em>"Don’t ask yourself what the world needs. Ask yourself what makes you come alive, and go do that,
            because
            what the world needs is people who have come alive.”</em><br/><span>- Howard Thurman</span></p>
        </div>
      </div>
    </div>
  );
}

export default Home;