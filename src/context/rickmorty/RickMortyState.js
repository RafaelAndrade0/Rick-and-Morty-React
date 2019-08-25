import React, { useReducer } from "react";
import RickMortyReducer from "./rickMortyReducer";
import RickMortyContext from "./rickMortyContext";

import {
  GET_CHARACTER,
  SEARCH_CHARACTERS,
  CLEAN_CHARACTERS,
  SET_LOADING,
  HANDLE_ERROR
} from "../types";
import axios from "axios";

const RickMortyState = props => {
  const initialState = {
    characters: [],
    loading: false,
    noResult: false
  };

  const [state, dispatch] = useReducer(RickMortyReducer, initialState);

  // Search Characters
  const searchCharacters = async text => {
    setLoading();
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${text}`
      );
      dispatch({ type: SEARCH_CHARACTERS, payload: res.data.results });
    } catch (error) {
      dispatch({
        type: HANDLE_ERROR
      });
    }
  };

  // Clear Characters
  const clearCharacters = () => {
    dispatch({
      type: CLEAN_CHARACTERS
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <RickMortyContext.Provider
      value={{
        characters: state.characters,
        loading: state.loading,
        noResult: state.noResult,
        searchCharacters,
        clearCharacters
      }}
    >
      {props.children}
    </RickMortyContext.Provider>
  );
};

export default RickMortyState;
