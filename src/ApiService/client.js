import env from "../../environments/env.json";
import axios from "axios";
import { store } from "../redux/Store";

const state = {
  SavedClient: false,
  token: false,
};

/**
 * client  is function create axios client to be used in caller function
 * it dose handel the change of token
 * @uses
 * env.API_BASE_URL
 * token
 * @returns
 * axios client
 */

const client = () => {
  const token = store.getState().auth.token;

  //check if there was no client or the token changed
  if (!state.SavedClient || !state.token || state.token !== token) {
    // check if the token changed and set it before creating new client
    if (!state.token || state.token !== token) {
      console.log("NewToken");
      state.token = token;
    }

    console.log("NewClient");
    //create client save it then return it //HAPPENED FOR THE FIRST TIME or there is new token
    const NewClient = axios.create({
      baseURL: env.API_BASE_URL,
      headers: state.token
        ? {
            Authorization: state.token,
            "Content-Type": "application/json",
            accept: "*/*",
          }
        : {
            "Content-Type": "application/json",
            accept: "*/*",
          },
    });
    state.SavedClient = client;
    return NewClient;
  } else {
    //if there is already client and there is no change for the token >>  just return it
    console.log("OldClient");
    return state.SavedClient;
  }
};

export default client;
