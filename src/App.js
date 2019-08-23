import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from "./components/Home";
import Bio from "./components/Bio";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Photos from "./components/Photos";
import CV from "./components/CV";
import {createMuiTheme} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';


const pages = ["Home", "My Story", "Experiences", "Projects", "Photos", "Curriculum Vitae"];
const links = ["/", "/bio", "/experience", "/projects", "/photos", "/cv"];

const theme = createMuiTheme({
  palette: {
    primary: { main: "#172252", },
    secondary: { main: "#ecb937", },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="App">
        <Header pages={pages} links={links}/>
        <Route exact path={"/"} component={Home}/>
        <Route path={"/bio"} component={Bio}/>
        <Route path={"/experience"} component={Experiences}/>
        <Route path={"/projects"} component={Projects}/>
        <Route path={"/photos"} component={Photos}/>
        <Route path={"/cv"} component={CV}/>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
