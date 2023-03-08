import $api from "../utils/http";
import {ILogin, ILoginResponse, IRegister} from "../utils/types/IAuth";

export const register = async (user: IRegister): Promise<true | null> => {
    try {
        const {data} = await $api.post("/register", user);

        return true;
    } catch (e) {
        return null;
    }
}

export const login = async (user: ILogin): Promise<ILoginResponse> => {
    try {
        const {data} = await $api.post("/login", user);

        return {status: "success", user: data.user};
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}

export const checkAuth = async (): Promise<ILoginResponse> => {
    try {
        const response = await $api.get(`/refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken);

        return {status: "success", user: response.data.user};
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}