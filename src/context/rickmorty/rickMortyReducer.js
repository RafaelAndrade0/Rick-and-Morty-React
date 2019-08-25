import { GET_CHARACTER, SEARCH_CHARACTERS, CLEAN_CHARACTERS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
    case CLEAN_CHARACTERS:
      return {
        ...state,
        characters: []
      };
    default: {
      return { ...state };
    }
  }
};
