import API_CAll from "./ApiCall";

/**
 * Queries is obj contains all the calls for API_CAll functions 
 * and each method takes ether params or body depend on the type
 * @takes
 * log_in : (Params, body)=> API_CAll('type "post/get" ', 'endPoint "/something" ', Params {}, body {})
 */

export let Queries = {
  GetAllCharacters: (Params) => API_CAll("get", "/character", Params, {}),
};
