import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Navbar className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Nav.Link className="navbar-item" href="/">
            <img src="image/nakuja_logo.webp" height="28" />
          </Nav.Link>

          <Nav.Link
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Nav.Link>
        </div>
        <Nav id="navbarBasicExample" className="navbar-menu navbar-end">
          <Nav.Link className="navbar-item" href="about.html">
            About 
          </Nav.Link>
          <Nav.Link className="navbar-item" href="team.html">
            Team
          </Nav.Link>
          <Nav.Link className="navbar-item" href="rocket.html">
            Rocket
          </Nav.Link>
          <Nav.Link className="navbar-item" href="join.html">
            Join
          </Nav.Link>
          <Nav.Link
            className="navbar-item"
            href="https://nakujaproject.blogspot.com/"
            target="_blank"
          >
            Blog
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
export default App;
