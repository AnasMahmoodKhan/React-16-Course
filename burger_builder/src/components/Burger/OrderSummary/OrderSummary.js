import React from "react";
import Aux from "../../../hoc/Auxillary";
import Button from "../../UI/Button/Button";

const OrderSummary = ({
  ingredients,
  purchaseCancelHandler,
  purchaseContinueHandler,
}) => {
  const ingredientSummary = Object.keys(ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={purchaseCancelHandler}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={purchaseContinueHandler}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;
