import { combineReducers } from "redux";

import productOrderReducer from "./cart-product/reducer";

export const rootReducer = combineReducers ({
    productOrder: productOrderReducer
});


