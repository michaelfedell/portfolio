import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from "./components/Home";
import Bio from "./components/Bio";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Photos from "./components/Photos";
import CV from "./components/CV";

function App() {
  const [page, setPage] = React.useState("Home");


  const setActive = (title) => {
    setPage(title)
  };

  return (
    <Router>
      <div className="App">
        <Header active={page} setActive={setActive}/>
        <Route exact path={"/"} component={Home}/>
        <Route path={"/bio"} component={Bio}/>
        <Route path={"/experience"} component={Experience}/>
        <Route path={"/projects"} component={Projects}/>
        <Route path={"/photos"} component={Photos}/>
        <Route path={"/cv"} component={CV}/>
      </div>
    </Router>
  );
}

export default App;
