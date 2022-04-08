import React, { useReducer } from "react";

const CartContextProvider = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  return <div></div>;
};

export default CartContextProvider;
