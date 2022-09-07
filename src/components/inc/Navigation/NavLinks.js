import React, { Component } from "react";
import "./Navigation.css";

export default class NavLinks extends Component {
  componentDidMount() {
    const el = document.getElementById("_navbar").offsetTop;

    window.addEventListener("scroll", function () {
      if (window.scrollY > el) {
        document.getElementById("_navbar").classList.add("fixed-top");
        // add padding top to show content behind navbar
        const navbar_height = document.querySelector(".navbar").offsetHeight;
        document.body.style.paddingTop = navbar_height + "px";
      } else {
        document.getElementById("navbar_top").classList.remove("fixed-top");
        document.body.style.paddingTop = "0";
      }
    });
  }

  render() {
    return (
      <div>
        <nav id="_navbar" className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <a className="navbar-brand d-lg-none" href="#">
                  Maksim Momcilovic
                </a>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#ueberMichSection"
                  >
                    Über Mich
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projekt-section">
                    Projekte
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills-section">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#socials">
                    Socials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
