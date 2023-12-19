import classes from "./Pizza.module.css";

function Pizza(props) {
  return (
    <li className={classes["pizza-container"]}>
      <img
        src={props.src}
        alt="spinaci pizza"
        width={"80px"}
        className={classes["pizza-img"]}
      />
      <div className={classes["pizza-description"]}>
        <h3 className={classes["pizza-name"]}>{props.name}</h3>
        <p className={classes["pizza-ingredients"]}>{props.ingredients}</p>
        <p className={classes["pizza-price"]}>${props.price}</p>
      </div>
    </li>
  );
}

export default Pizza;
