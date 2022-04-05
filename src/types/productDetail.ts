import { IItems } from 'types/productList';

  
  
export enum ProductDetailActionTypes {
  FETCH_PRODUCT = "FETCH_PRODUCT",
  FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCES",
  FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR",
  }

interface IReview {
  username: string;
  text: string;
  id: number;
  }

export interface IProductDetail extends IItems {
    review: IReview[]
  }

interface FetchProductDetailAction {
  type: ProductDetailActionTypes.FETCH_PRODUCT;
  }

interface FetchProductDetailSuccessAction {
  type: ProductDetailActionTypes.FETCH_PRODUCT_SUCCESS;
  payload: IProductDetail;
  }

interface FetchProductDetailErrorAction {
  type: ProductDetailActionTypes.FETCH_PRODUCT_ERROR;
  payload: string;
  }

export interface IProductDetailState {
  product: IProductDetail
  error: null | string
  loading: boolean
  }

export const initialStateDetail: IProductDetailState = {
  product: {
        id: 0,
  title: '',
  gender: '',
  season: '',
  factory: '',
  price: {
    price: 0,
    new_price:0,
    discount: 0
  },
  review: []
  },
  loading: false,
  error: null
  }

export type ProductDetailAction =     
| FetchProductDetailAction
| FetchProductDetailSuccessAction
| FetchProductDetailErrorAction