import $api from "../utils/http";
import {IProduct, IProductResponse} from "../utils/types/IProduct";

export const createPrd = async (product: FormData): Promise<IProduct | {status: "error" , message: string}> => {
    try {
        const {data} = await $api.post("/admin/create-prd", product, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return data;
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}

export const getAdminPrd = async (page: number = 1): Promise<IProductResponse> => {
    const {data} = await $api.get(`/admin/get-prd/${page}`);

    return data;
}