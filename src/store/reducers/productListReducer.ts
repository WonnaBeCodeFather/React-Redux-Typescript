
import {initialState, ProductListAction, productListState, ProductListActionTypes} from '../../types/productList'


export const productListReducer = (
  state = initialState,
  action: ProductListAction
): productListState => {
  switch (action.type) {
    case ProductListActionTypes.FETCH_PRODUCTS:
      return { loading: true, error: null, product: state.product};
    case ProductListActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { loading: false, error: null, product: action.payload };
    case ProductListActionTypes.FETCH_PRODUCTS_ERROR:
      return { loading: false, error: null, product: state.product};
      default:
        return state;
    }
  };
  