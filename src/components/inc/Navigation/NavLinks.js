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
      <nav id="_navbar" className="NavBar">
        <div>
          <button>
            <span></span>
          </button>
          <div>
            <ul>
              <a href="#">Maksim Momcilovic</a>
              <li>
                <a href="#ueberMichSection">Über Mich</a>
              </li>
              <li>
                <a href="#projekt-section">Projekte</a>
              </li>
              <li>
                <a href="#skills-section">Skills</a>
              </li>
              <li>
                <a href="#socials">Socials</a>
              </li>
              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
