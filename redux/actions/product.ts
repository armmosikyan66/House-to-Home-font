import {IProduct} from "../../utils/types/IProduct";
import {ActionTypes} from "../types/IProduct";

export const updateProduct = (payload: IProduct) => ({payload, type: ActionTypes.UPDATE_PRODUCT});
