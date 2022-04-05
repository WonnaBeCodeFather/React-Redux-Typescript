import * as PoductActionCreators from "./productLIst"
import * as ProductDetailActionCreators from "./productDetail"
import * as UserActionCreators from "./user"


export  default {
    ...PoductActionCreators,
    ...ProductDetailActionCreators,
    ...UserActionCreators
}
