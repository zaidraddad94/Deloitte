import caller from "./caller";

/**
 * queries is obj contains all the calls for caller functions
 * and each method takes ether params or body depend on the type
 * @takes
 * log_in : (params, body)=> caller('type "post/get" ', 'endPoint "/something" ', params {}, body {})
 */

export const queries = {
  getAllCharacters: (params) => caller("get", "/character", params, {}),
};
