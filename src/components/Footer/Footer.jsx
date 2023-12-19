import classes from "./Footer.module.css";

function Footer() {
  //Open and closing tims of the shop
  const OPEN_HOUR = 10;
  const CLOSE_HOUR = 22;

  //Current time
  const hour = new Date().getHours();

  //Conditional expression determining whether the shop is open or closed
  const isOpen = hour >= OPEN_HOUR && hour <= CLOSE_HOUR;

  return (
    <footer className={classes["footer"]}>
      {isOpen ? (
        <>
          <p className={classes["footer-line"]}>
            We are currently open, order your pizza online!
          </p>
          <button className={classes["order-btn"]}>Order Now</button>
        </>
      ) : (
        <p className={classes["footer-line"]}>
          We are currently closed. Lets meet later!
        </p>
      )}
    </footer>
  );
}

export default Footer;
