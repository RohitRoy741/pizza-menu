import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes["footer"]}>
      <p className={classes["footer-line"]}>
        We are open from 10 AM to 11 PM everyday!
      </p>
      <button className={classes["order-btn"]}>Order Now</button>
    </footer>
  );
}

export default Footer;
