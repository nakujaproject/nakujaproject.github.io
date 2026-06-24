import React from "react";

const App = () => {
  return (
    <section className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="image/nakuja_logo.webp" height="28" />
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="about.html">About</a>
            <a className="navbar-item" href="team.html">Team</a>
            <a className="navbar-item" href="rocket.html">Rocket</a>
            <a className="navbar-item" href="research.html">Research</a>
            <a className="navbar-item" href="join.html">Join</a>
            <a className="navbar-item" href="https://nakujaproject.blogspot.com/" target="_blank" rel="noopener noreferrer">Blog</a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default App;
