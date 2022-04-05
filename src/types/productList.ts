export interface IPrice {
  discount: number;
  new_price: number;
  price: number;
  }

export interface IItems {
  factory: string;
  gender: string;
  id: number;
  price: IPrice;
  season: string;
  title: string;
  }

export interface IProductList {
  items: IItems[];
  total: number;
  page: number;
  size: number;
  }

export interface productListState {
  product: IProductList;
  loading: boolean;
  error: null | string;
  }

export enum ProductListActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCES",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
    
  }

interface FetchProductListAction {
  type: ProductListActionTypes.FETCH_PRODUCTS;
  }

interface FetchProductListSuccessAction {
  type: ProductListActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: IProductList;
  }

interface FetchProductListErrorAction {
  type: ProductListActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
  }

export const initialState: productListState = {
  product: {
    items: [],
    total: 0,
    page: 0,
    size: 0,
    },
  loading: false,
  error: null,
  };

export type ProductListAction =
  | FetchProductListAction
  | FetchProductListSuccessAction
  | FetchProductListErrorAction
