import { applyMiddleware, compose, createStore } from "redux";

import createSagaMiddleWare from "redux-saga";
import { rootWatcher } from "../saga";
import { rootReducer } from "./reducers";

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleWare)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleWare.run(rootWatcher);
