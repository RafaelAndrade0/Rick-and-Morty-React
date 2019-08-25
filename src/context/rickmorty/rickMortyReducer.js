import {
  GET_CHARACTER,
  SEARCH_CHARACTERS,
  CLEAN_CHARACTERS,
  SET_LOADING,
  HANDLE_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
        noResult: false
      };
    case CLEAN_CHARACTERS:
      return {
        ...state,
        characters: []
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case HANDLE_ERROR:
      return {
        ...state,
        characters: [],
        loading: false,
        noResult: true
      };
    default: {
      return { ...state };
    }
  }
};
