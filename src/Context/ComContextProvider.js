import React, { createContext, useContext, useReducer } from "react";

import axios from "axios";
import { ACTIONS, APIC } from "../Helpers/consts";
import { notifyError } from "../Components/Tostify/Toastify";

export const comContext = createContext();

export const useComContext = () => {
  return useContext(comContext);
};

const INIT_STATE = {
  comments: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_COM:
      return {
        ...state,
        comments: action.payload.data,
      };
    default:
      return state;
  }
}
const ComContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCom = async (id) => {
    try {
      let res = await axios.get(`${APIC}?prodId=${id}`);
      dispatch({
        type: ACTIONS.GET_COM,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const addCom = async (newCom) => {
    try {
      let res = await axios.post(APIC, newCom);
      getCom();
    } catch (err) {
      notifyError(err);
    }
  };
  return (
    <comContext.Provider
      value={{
        comments: state.comments,
        getCom,
        addCom,
      }}
    >
      {children}
    </comContext.Provider>
  );
};

export default ComContextProvider;
