import $api from "../utils/http";
import {IReport} from '../utils/types/IReport';

export const addFavorite = async (userId: string, propertyId: string) => {
    try {
        const {data} = await $api.post("/add-favorite", {userId, propertyId});

        return data;
    } catch (e: any) {
        return e.response.data.message
    }
}
export const removeFavorite = async (userId: string, propertyId: string) => {
    try {
        const {data} = await $api.post("/remove-favorite", {userId, propertyId});

        return data;
    } catch (e: any) {
        return e.response.data.message
    }
}

export const getFavorites = async () => {
    const {data} = await $api.get("/get-saved");

    return data;
}

export const sendReport = async (values: IReport) => {
    try {
        const {data} = await $api.post('/report', values);

        return true;
    } catch (e: any) {
        return e.response.data.message
    }
}