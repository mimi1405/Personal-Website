import classes from "./Navigation.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import React, { Component } from "react";


export default class NavBar extends Component {
    componentDidMount() {
        const el = document.getElementById("_navi").offsetTop;
        window.addEventListener("scroll", function () {
          if (window.scrollY > el) {
            document.getElementById("_navi").classList.add("fixed-top");
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
      <div id="_navi" className={classes.NavBar}>
        <MobileNavigation />
        <Navigation />
      </div>
    );
  }
}
