import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import loginReducer from "./AuthReducer";
import changeLanguageReducer from "./LanguageReducer";

const enhancer = compose(applyMiddleware(logger));

const rootReducer = combineReducers({
  auth: loginReducer,
  language: changeLanguageReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = __DEV__
  ? createStore(persistedReducer, {}, enhancer)
  : createStore(persistedReducer);

export const persistor = persistStore(store);
