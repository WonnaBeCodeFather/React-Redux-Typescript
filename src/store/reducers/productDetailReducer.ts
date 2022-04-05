import { initialStateDetail, ProductDetailAction, IProductDetailState, ProductDetailActionTypes } from './../../types/productDetail';


export const productDetailReducer = (
    state = initialStateDetail,
    action: ProductDetailAction
  ): IProductDetailState => {
    switch (action.type) {
      case ProductDetailActionTypes.FETCH_PRODUCT:
        return { loading: true, error: null, product: state.product};
      case ProductDetailActionTypes.FETCH_PRODUCT_SUCCESS:
        return { loading: false, error: null, product: action.payload};
      case ProductDetailActionTypes.FETCH_PRODUCT_ERROR:
        return { loading: false, error: action.payload, product: state.product};
      default:
        return state;
    }
  };