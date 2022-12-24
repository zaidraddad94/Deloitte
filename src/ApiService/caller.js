import client from "./client";

let state = {
  count: 1,
};

/**
 * interceptor function will be called in ./queries
 * this will log all the inputs and outputs of api requests, the number of the call and the total time and statuses
 * and it handles 401 and log the user out
 * @takes
 * @param type : string >> get , post
 * @param endPoint : string >> "/something"
 * @param params: as obj >> {page:1} >> mostly for get requests
 * @param body : as obj >> {page:1} >> for post requests
 * @returns
 * the api response
 */

const caller = (type, endPoint, params = {}, body = {}) => {
  const Client = client();

  //flat all params to string to get get request
  const searchParams = new URLSearchParams();
  Object.keys(params).forEach((key) => searchParams.append(key, params[key]));
  let FinalParams;
  if (searchParams.toString()) {
    FinalParams = "?" + searchParams.toString();
  } else {
    FinalParams = "";
  }

  //used to calculate request time
  state[state.count] = Date.now();

  //return the data after printing the data to console if the __DEV__ is on
  return Client[type](endPoint + FinalParams, body)
    .then((result) => {
      if (__DEV__) {
        console.log(
          `======================== API RESULT Success ${state.count} ========================\n`,
          `\n type:`,
          type,
          `\n result:`,
          result,
          `\n url:`,
          endPoint + params,
          `\n body:`,
          body,
          `\n============ finished in ${
            (Date.now() - state[state.count]) / 1000
          } seconds =============`
        );
        state.count = state.count + 1;
      }
      return result;
    })
    .catch((e) => {
      if (__DEV__) {
        console.error(
          `======================== API RESULT Failed ${state.count} ========================\n`,
          `\n type:`,
          type,
          `\n error:`,
          e,
          `\n url:`,
          endPoint + params,
          `\n body:`,
          body,
          `\n============ finished in ${
            (Date.now() - state[state.count]) / 1000
          } seconds =============`
        );
        state.count = state.count + 1;
      }

      if (e.response.status == 401) {
        // should log out
      }
      return e;
    });
};

export default caller;
