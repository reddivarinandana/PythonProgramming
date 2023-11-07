import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import courseReducer from "./Productreducer/reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({ course: courseReducer , topic : courseReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

