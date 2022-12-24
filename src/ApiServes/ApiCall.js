import CLIENT from "./Client";

let state = {
  count: 1,
};

/**
 * interceptor function will be called at Queries
 * this will log all the inputs and outputs of api requests the index of the call and the total time and statuses
 * and it handles 401 and log the user out 
 * @takes 
 * type : string >> get , post
 * endPoint : string >> "/something"
 * Params: as obj >> {page:1} >> mostly for get requests
 * body : as obj >> {page:1} >> for post requests
 * @returns
 * the api response
 */

let API_CAll = (type, endPoint, Params, body = {}) => {
  let client = CLIENT();
  
  //flat all params to string to get get request
  const searchParams = new URLSearchParams();
  Object.keys(Params).forEach((key) => searchParams.append(key, Params[key]));
  let params;
  if (searchParams.toString()) {
    params = "?" + searchParams.toString();
  } else {
    params = "";
  }

  //used to calculate request time
  state[state.count] = Date.now();

  //return the data after printing the data to console if the __DEV__ is on
  return client[type](endPoint + params, body)
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

export default API_CAll;
