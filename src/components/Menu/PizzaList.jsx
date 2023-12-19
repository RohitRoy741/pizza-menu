import focaccia from "../../assets/focaccia.jpg";
import spinaci from "../../assets/spinaci.jpg";
import margherita from "../../assets/margherita.jpg";
import funghi from "../../assets/funghi.jpg";
import salamino from "../../assets/salamino.jpg";
import prosciutto from "../../assets/prosciutto.jpg";

import { useState, useEffect } from "react";
import Pizza from "./Pizza";

import classes from "./PizzaList.module.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    src: focaccia,
    soldOut: false,
  },
  {
    name: "Margherita",
    ingredients: "Tomato and delicious mozarella cheese",
    price: 10,
    src: margherita,
    soldOut: false,
  },
  {
    name: "Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    src: spinaci,
    soldOut: false,
  },
  {
    name: "Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    src: funghi,
    soldOut: false,
  },
  {
    name: "Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    src: salamino,
    soldOut: true,
  },
  {
    name: "Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    src: prosciutto,
    soldOut: false,
  },
];

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    setPizzas(pizzaData);
  }, []);

  if (pizzas.length === 0) {
    return <h3>Menu is not ready yet :(</h3>;
  }

  const pizzaList = pizzas.map((pizza, index) => (
    <Pizza
      name={pizza.name}
      ingredients={pizza.ingredients}
      src={pizza.src}
      price={pizza.price}
      soldOut={pizza.soldOut}
      key={index}
    />
  ));

  return <ul className={classes["pizzas"]}>{pizzaList}</ul>;
}

export default PizzaList;
