import React from 'react';
import './App.css';

import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from "./components/layout/Header";
import Home from "./components/Home";
import Bio from "./components/Bio";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Photos from "./components/Photos";
import CV from "./components/CV";


const pages = ["Home", "My Story", "Experiences", "Projects", "Photos", "Curriculum Vitae"];
const links = ["/", "/bio", "/experience", "/projects", "/photos", "/cv"];

const theme = createMuiTheme({
  palette: {
    primary: {main: "#172252",},
    secondary: {main: "#ecb937",},
  },
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router basename={"/"}>
        <Header pages={pages} links={links}/>
          <Switch>
            <React.Fragment>
              <Route exact path={"/"} component={Home}/>
              <Route path={"/bio"} component={Bio}/>
              <Route path={"/experience"} component={Experiences}/>
              <Route path={"/projects"} component={Projects}/>
              <Route path={"/photos"} component={Photos}/>
              <Route path={"/cv"} component={CV}/>
              <Route />
            </React.Fragment>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
