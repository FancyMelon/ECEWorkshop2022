import React from "react";
import brandImg from "../assets/images/logo4.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from "./Hosts";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <img className="navbar-brand logo-image ml-2" src={brandImg} alt="" />
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <a className="nav-link" href="#Intro">
              About
            </a>
            <a className="nav-link" href="#Themes">
              Projects
            </a>
            {/* <a className="nav-link" href="#Highlights">
              Highlights
            </a> */}
            <Router>
              <div>
                <li className="nav-link">
                  <Link to="/Highlights">Highlights</Link>
                  <hr />
                  <Switch>
                    <Route path="/Highlights">
                      <Gallery />
                    </Route>
                  </Switch>
                </li>
              </div>
            </Router>
            <a className="nav-link" href="#FAQ">
              FAQs
            </a>
            {/* <a className="nav-link" href="https://if2020.uoftada.com/" target="_blank" rel="noreferrer">IF2020</a> */}
          </div>
        </div>
        <a
          href="https://www.instagram.com/ece_workshop_uoft/"
          className="sign-up"
          target="_blank"
          rel="noreferrer"
        >
          <span>Learn More</span>
        </a>
      </div>
    </nav>
  );
}
