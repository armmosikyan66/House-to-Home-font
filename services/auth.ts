import $api from "../utils/http";
import {ILogin, IAuthResponse, IRegister} from "../utils/types/IAuth";

export const register = async (user: IRegister): Promise<IAuthResponse> => {
    try {
        const {data} = await $api.post("/register", user);

        return {status: "success", user: data.user};
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}

export const login = async (user: ILogin): Promise<IAuthResponse> => {
    try {
        const {data} = await $api.post("/login", user);

        return {status: "success", user: data.user};
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}

export const checkAuth = async (): Promise<IAuthResponse> => {
    try {
        const response = await $api.get(`/refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken);

        return {status: "success", user: response.data.user};
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}

export const logout = async (): Promise<void | { status: "error", message: string }> => {
    try {
        await $api.post('/logout')
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}