import React from "react";
import classes from "./Navigation.module.css";


const NavLinks = (props) => {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#">Maksim Momcilovic</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#ueberMichSection">Über Mich</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#projekt-section">Projekte</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#skills-section">Skills</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#socials">Socials</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#contact">Kontakt</a>
      </li>
    </ul>
  );
};

export default NavLinks;
