import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS, API } from "../Helpers/consts";

export const productContext = createContext();

export const useProductContext = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  forEditVal: null,
  pageTotalCount: 1,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      let res = await axios.get(`${API}${window.location.search}`);
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <productContext.Provider value={{ products: state.products, getProducts }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
