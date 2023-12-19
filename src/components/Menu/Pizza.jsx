import classes from "./Pizza.module.css";

function Pizza(props) {
  return (
    <li
      className={
        classes["pizza-container"] + " " + (props.soldOut && classes["grayed"])
      }
    >
      <img
        src={props.src}
        alt="spinaci pizza"
        width={"80px"}
        className={classes["pizza-img"]}
      />
      <div className={classes["pizza-description"]}>
        <h3 className={classes["pizza-name"]}>{props.name}</h3>
        <p className={classes["pizza-ingredients"]}>{props.ingredients}</p>
        {!props.soldOut ? (
          <p className={classes["pizza-price"]}>${props.price}</p>
        ) : (
          <p className={classes["sold-out-tag"]}>SOLD OUT</p>
        )}
      </div>
    </li>
  );
}

export default Pizza;
