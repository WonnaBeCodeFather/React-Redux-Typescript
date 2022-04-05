import { userReducer } from './userReducer';
import { productDetailReducer } from './productDetailReducer';

import {combineReducers} from "redux";
import { productListReducer } from './productListReducer';




export const rootReducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>