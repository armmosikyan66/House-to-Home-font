import $api from "../utils/http";

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