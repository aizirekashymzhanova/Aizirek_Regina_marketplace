import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { notify, notifyError } from "../Components/Tostify/Toastify";
import { ACTIONS, APIC, APIL } from "../Helpers/consts";
import { useAuth } from "./AuthContextProvider";

export const likeContext = createContext();

export const useLikeContext = () => {
  return useContext(likeContext);
};

const INIT_STATE = {
  likes: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_LIKES:
      return {
        ...state,
        likes: action.payload.data,
      };
    default:
      return state;
  }
}

const LikeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getLikesLengthforOne = async (id) => {
    try {
      let { data } = await axios(`${APIL}?prodId=${id}`);
      dispatch({
        type: ACTIONS.GET_LIKES_LENGTH,
        payload: data.length,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getLikes = async () => {
    try {
      let data = await axios.get(APIL);
      dispatch({
        type: ACTIONS.GET_LIKES,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const delLike = async (user) => {
    try {
      let res = await axios.delete(`${APIL}?id=${user.id}`);
    } catch (err) {
      console.log(err);
    }
  };
  const addLike = async (newLike) => {
    try {
      let res = await axios.post(APIL, newLike);
    } catch (err) {
      notifyError(err);
    }
  };

  return (
    <likeContext.Provider
      value={{
        likedUsers: state.likedUsers,
        likes: state.likes,
        likesLength: state.likesLength,
        getLikesLengthforOne,
        addLike,
        getLikes,
        delLike,
      }}
    >
      {children}
    </likeContext.Provider>
  );
};

export default LikeContextProvider;
