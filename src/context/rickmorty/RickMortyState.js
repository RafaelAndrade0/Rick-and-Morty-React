import React, { useReducer } from "react";
import RickMortyReducer from "./rickMortyReducer";
import RickMortyContext from "./rickMortyContext";

import { GET_CHARACTER, SEARCH_CHARACTERS, CLEAN_CHARACTERS } from "../types";
import axios from "axios";

const RickMortyState = props => {
  const initialState = {
    characters: []
  };

  const [state, dispatch] = useReducer(RickMortyReducer, initialState);

  // Search Characters
  const searchCharacters = async text => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${text}&status=alive`
    );
    // console.log(res.data.results);
    dispatch({
      type: SEARCH_CHARACTERS,
      payload: res.data.results
    });
  };

  // Clear Characters
  const clearCharacters = () => {
    dispatch({
      type: CLEAN_CHARACTERS
    });
  };

  return (
    <RickMortyContext.Provider
      value={{
        characters: state.characters,
        searchCharacters,
        clearCharacters
      }}
    >
      {props.children}
    </RickMortyContext.Provider>
  );
};

export default RickMortyState;
