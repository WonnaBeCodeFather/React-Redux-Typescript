import { ProductDetailActionTypes, ProductDetailAction } from './../../types/productDetail';

import  axios  from 'axios';
import { Dispatch } from "react"



export const fetchProductDetail = (id: string = "") => {
    return async (dispatch: Dispatch<ProductDetailAction> ) => {
        try {
            dispatch({type: ProductDetailActionTypes.FETCH_PRODUCT})
            const response = await axios.get(`http://127.0.0.1:8000/product/${id}`)
            dispatch({type: ProductDetailActionTypes.FETCH_PRODUCT_SUCCESS, payload: response.data})
        } catch(e: any) {
            dispatch({type: ProductDetailActionTypes.FETCH_PRODUCT_ERROR, payload: e.message})
        }
    }   
}