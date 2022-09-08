import classes from "./Navigation.module.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
