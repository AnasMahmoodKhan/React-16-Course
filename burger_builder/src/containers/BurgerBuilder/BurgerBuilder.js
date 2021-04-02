import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Auxillary";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 2,
      meat: 0,
    },
  };
  render() {
    const { ingredients } = this.state;
    return (
      <Aux>
        <Burger ingredients={ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
