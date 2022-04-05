import { ProductListAction, ProductListActionTypes } from './../../types/productList';
import { Dispatch } from "react"
import axios from "axios"

export const fetchProducts = (page: number = 1) => {
    return async (dispatch: Dispatch<ProductListAction>) => {
        try {
            dispatch({type: ProductListActionTypes.FETCH_PRODUCTS})
            const response = await axios.get(`http://127.0.0.1:8000/product/?page=${page}&size=8`)
            dispatch({type: ProductListActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data})
        } catch(e) {
            dispatch({type: ProductListActionTypes.FETCH_PRODUCTS_ERROR, payload: "Castom Error"})
        }
    }
}