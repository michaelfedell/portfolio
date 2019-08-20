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


const pages = ["Home", "My Story", "Experiences", "Projects", "Photos", "Curriculum Vitae"];
const links = ["/", "/bio", "/experience", "/projects", "/photos", "/cv"];

function App() {
  const [page, setPage] = React.useState("Home");


  const setActive = (title) => {
    setPage(title)
  };

  return (
    <Router>
      <div className="App">
        <Header active={page} setActive={setActive} pages={pages} links={links}/>
        <Route exact path={"/"} component={Home}/>
        <Route path={"/bio"} component={Bio}/>
        <Route path={"/experience"} component={Experiences}/>
        <Route path={"/projects"} component={Projects}/>
        <Route path={"/photos"} component={Photos}/>
        <Route path={"/cv"} component={CV}/>
      </div>
    </Router>
  );
}

export default App;
