import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import cartCounter from "./middlewares/cartCounter";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(cartCounter, thunk))
);
export default store;