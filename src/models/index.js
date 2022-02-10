import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { coreReducer } from "./core";
import { authReducer } from "./auth";
import { addressesReducer } from "./addresses";
import { userReducer } from "./user";
import { transactionsReducer } from "./transactions";

const rootReducer = combineReducers({
	core: coreReducer,
	auth: authReducer,
	addresses: addressesReducer,
	user: userReducer,
	transactions: transactionsReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
