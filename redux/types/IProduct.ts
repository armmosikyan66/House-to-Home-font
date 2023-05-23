import {IProduct} from "../../utils/types/IProduct";

export type InitialStateTypes = {
    product: IProduct,
}

export enum ActionTypes {
    UPDATE_PRODUCT = "UPDATE_PRODUCT",
    REMOVE_PRODUCT = "REMOVE_PRODUCT"
}

export type Action = {type: ActionTypes.UPDATE_PRODUCT, payload: IProduct} | {
    type: ActionTypes.REMOVE_PRODUCT, payload: IProduct
}