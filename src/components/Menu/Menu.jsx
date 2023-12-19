import classes from "./Menu.module.css";
import PizzaList from "./PizzaList";

function Menu() {
  return (
    <section className={classes["menu"]}>
      <h2 className={classes["menu-heading"]}>OUR MENU</h2>
      <p className={classes["menu-tagline"]}>
        Authentic Italian cuisine & creative dishes to choose from. All from our
        store oven, all organic, all delicious
      </p>
      <PizzaList />
    </section>
  );
}

export default Menu;
