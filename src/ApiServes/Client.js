import env from "../../environments/env.json";
import axios from "axios";
import { store } from "../redux/Store";

let _state = {
  CLIENT: false,
  token: false,
};

/**
 * CLIENT  is function create axios client to be used in ApiCall function 
 * it dose handel the change of token  
 * @uses
 * env.API_BASE_URL
 * token
 * @returns 
 * axios client 
 */

let CLIENT = () => {
  let token = store.getState().auth.token;

  //check if there was no client or the token changed
  if (!_state.CLIENT || !_state.token || _state.token !== token) {
    // check if the token changed and set it before creating new client
    if (!_state.token || _state.token !== token) {
      console.log("NewToken");
      _state.token = token;
    }

    console.log("NewClient");
    //create client save it then return it //HAPPENED FOR THE FIRST TIME or there is new token
    const client = axios.create({
      baseURL: env.API_BASE_URL,
      headers: _state.token
        ? {
            Authorization: _state.token,
            "Content-Type": "application/json",
            accept: "*/*",
          }
        : {
            "Content-Type": "application/json",
            accept: "*/*",
          },
    });
    _state.CLIENT = client;
    return client;
  } else {
    //if there is already client and there is no change for the token >>  just return it
    console.log("OldClient");
    return _state.CLIENT;
  }
};

export default CLIENT;
