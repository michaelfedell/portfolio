import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'


Header.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Header(props) {
  const {pages, links} = props;

  return (
    <div id="banner" className="text-center mb-3">
      <h1 className="title">S. Michael Fedell</h1>
      <nav className="navbar navbar-expand-md text-uppercase">
        <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation"> – MENU –
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="nav navbar-nav mx-auto">
            {pages.map((p, i) => (
              <li className={"nav-item"} key={links[i]}>
                <NavLink exact={true} to={links[i]} activeClassName={"active"}>{p}</NavLink>
              </li>))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;