import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { coreReducer } from "./core";
import { authReducer } from "./auth";
import { addressesReducer } from "./addresses";

const rootReducer = combineReducers({
	core: coreReducer,
	auth: authReducer,
	addresses: addressesReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
