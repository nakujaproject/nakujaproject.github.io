import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <a href="https://twitter.com/Nakuja6" style={{padding:'10px'}}>
              <i className="fab fa-twitter-square fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/nakujaproject/" style={{padding:'10px'}}>
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/company/nakuja-project" style={{padding:'10px'}}>
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCE67lrxSyV97KVOOqOtIdrQ/" style={{padding:'10px'}}>
              <i className="fab fa-youtube-square fa-2x"></i>
            </a>
            <a href="https://github.com/nakujaproject/" style={{padding:'10px'}}>
              <i className="fab fa-github fa-2x"></i>
            </a>
          </p>
        </div>

        <div className="columns">
          <div className="column is-3 is-offset-2">
            <h2>
              <strong>Nakuja Project</strong>
            </h2>
            <ul>
              <li>
                is a technical development project based in Jomo Kenyatta
                University of Agriculture and Technology (JKUAT) supported by Kenya Space Agency (KSA)
              </li>
            </ul>
          </div>
          <div className="column is-3">
            <h2>
              <strong>Contact</strong>
            </h2>
            <ul>
              <li>Email: info@nakujaproject.com</li>
            </ul>
          </div>
          <div className="column is-3">
            <h2>
              <strong>Links</strong>
            </h2>
            <ul>
              <li>
                <a href="http://www.jkuat.ac.ke">
                  Jomo Kenyatta University of Agriculture and Technology (JKUAT)
                </a>
              </li>
              <li>
                <a href="https://ksa.go.ke/">
                  Kenya Space Agency (KSA)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
