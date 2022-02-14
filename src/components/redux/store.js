import { createStore,applyMiddleware,combineReducers } from "redux";
import RegisterationReducer from "./reducer";
import thunk from "redux-thunk";

// connected reducer to store 
// then plug exported store in the root of your application which is index.js
const rootReducer = combineReducers({
    registration: RegisterationReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;