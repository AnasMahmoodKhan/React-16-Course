import React from "react";
import "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const Burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients).map((igKey) => {
    return [...Array(ingredients[igKey])].map((_, i) => {
      return <BurgerIngredients key={igKey + 1} type={igKey} />;
    });
  });
  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
