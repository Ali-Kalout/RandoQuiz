import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { STATE } from "./reducers/index";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            state: STATE
        }),
        applyMiddleware(thunk)
    );

    return store;
}