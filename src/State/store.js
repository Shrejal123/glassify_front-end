// import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
// import  thunk from "redux-thunk";
// import { authReducer } from "./Auth/Reducer";

// const rootReducers=combineReducers({
//     auth:authReducer,
// });

// export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));

import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "./Auth/Reducer"; // Keep your existing reducer
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products:customerProductReducer,
    cart:cartReducer,    
    order: orderReducer// Add your existing reducers here
  },
});
