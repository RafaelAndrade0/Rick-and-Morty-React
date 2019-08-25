import { GET_CHARACTER, SEARCH_CHARACTERS, CLEAN_HARACTERS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
  }
};
