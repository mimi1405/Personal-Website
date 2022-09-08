import NavLinks from "./NavLinks";
import classes from "./Navigation.module.css";
import { useState } from "react";
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'


const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <GiHamburgerMenu size='40px' color="white" onClick={() => setOpen(!open)} className="Hamburger" />
  );
  const closeIcon = (
    <AiOutlineClose size='40px' color="white" onClick={() => setOpen(!open)} className="Hamburger" />
  );


  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/> }
    </nav>
  );
};

export default MobileNavigation;
