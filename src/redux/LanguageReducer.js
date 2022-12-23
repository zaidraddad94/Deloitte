import { CHANGELANGUAGE } from "./actions";

const initialState = {
  language: "en",
};

const changeLanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGELANGUAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default changeLanguageReducer;
