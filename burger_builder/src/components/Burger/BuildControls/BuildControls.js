import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
  purchaseable,
  ordered,
}) => {
  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          label={ctrl.label}
          disabled={disabled[ctrl.type]}
        />
      ))}
      <button
        disabled={!purchaseable}
        onClick={ordered}
        className="OrderButton"
      >
        ORDER NOW!
      </button>
    </div>
  );
};

export default BuildControls;
