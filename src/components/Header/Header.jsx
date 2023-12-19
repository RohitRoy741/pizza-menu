import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes["header"]}>
      <hr className={classes["horizontal-line"]} />
      <h1 className={classes["company-name"]}>REACT PIZZA COMPANY</h1>
      <hr className={classes["horizontal-line"]} />
    </header>
  );
}

export default Header;
