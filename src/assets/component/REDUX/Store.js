

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../SAGA/rootsaga";


const sagaMiddleware=createSagaMiddleware()
const Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware,logger),
});
sagaMiddleware.run(rootSaga)

export default Store;

