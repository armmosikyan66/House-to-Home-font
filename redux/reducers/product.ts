import {Action, ActionTypes, InitialStateTypes} from "../types/IProduct";
import {IProduct} from "../../utils/types/IProduct";

const initialState: InitialStateTypes = {
    product: {} as IProduct,
}

const ProductReducer = (state = initialState, action: Action): InitialStateTypes => {
    switch (action.type) {
        case ActionTypes.UPDATE_PRODUCT:
            return {
                ...state,
                product: action.payload,
            }
        case ActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                product: {} as IProduct,
            }
        default:
            return state;
    }
}

export default ProductReducer