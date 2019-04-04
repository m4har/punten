import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Promise from "redux-promise-middleware";

import Reducer from "./reducers";

// config persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Register"]
};

// connect to redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(logger, Promise);
const persistedReducer = persistReducer(
  persistConfig,
  Reducer,
  composeEnhancers
);

export const Store = createStore(persistedReducer, middleware);
export const Persistor = persistStore(Store);
