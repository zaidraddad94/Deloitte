import { LOGIN, LOGOUT } from "./actions";

const initialState = {
  ID: false,
  email: false,
  phone: false,
  dateOfBirth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
