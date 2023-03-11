import $api from "../utils/http";
import {IProduct, IProductResponse} from "../utils/types/IProduct";
import {IUser} from "../utils/types/IUser";

export const createPrd = async (product: FormData): Promise<IProduct | {status: "error" , message: string}> => {
    try {
        const {data} = await $api.post<IProduct>("/admin/create-prd", product, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return data;
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}

export const addImg = async (formData: FormData, dirId: string, prdId: number): Promise<IProduct | {status: "error" , message: string}> => {
    try {
        const {data} = await $api.post<IProduct>(`/admin/add-img/${dirId}/${prdId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return data;
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}

export const removeImg = async (dirId: string, imgName: string, prdId: number): Promise<IProduct | {status: "error" , message: string}> => {
    try {
        const {data} = await $api.delete<IProduct>(`/admin/delete-img/${dirId}/${imgName}/${prdId}`);

        return data;
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}

export const updatePrd = async (updateData: IProduct, prdId: number): Promise<IProduct | {status: "error" , message: string}> => {
    try {
        const {data} = await $api.put<IProduct>(`/admin/update-prd/${prdId}`, updateData);

        return data;
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}

export const updateUser = async (updateData: "user" | "admin" | "locale", userId: string): Promise<IUser | {status: "error" , message: string}> => {
    try {
        const {data} = await $api.put<IUser>(`/admin/update-user/${userId}`, {role: updateData});

        return data;
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}

export const deletePrd = async (dirId: string, prdId: number): Promise<true | {status: "error" , message: string}> => {
    try {
        const {data} = await $api.delete(`/admin/delete-prd/${dirId}/${prdId}`);

        return true;
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}

export const deleteUser = async (id: string): Promise<true | {status: "error" , message: string}> => {
    try {
        const {data} = await $api.delete(`/admin/delete-user/${id}`);

        return true;
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}

export const getAdminPrd = async (page: number = 1): Promise<IProductResponse> => {
    const {data} = await $api.get<IProductResponse>(`/admin/get-prd/${page}`);

    return data;
}

export const getUsers = async (page: number = 1): Promise<any> => {
    const {data} = await $api.get(`/admin/get-users/${page}`);

    return data;
}