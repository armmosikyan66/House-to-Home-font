import $api from "../utils/http";
import {ILogin, IAuthResponse, IRegister} from "../utils/types/IAuth";
import axios from "axios";

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
        const response = await $api.post("/login", user);
        localStorage.setItem("token", response.data.refreshToken);
        await axios.post("/api/cookies", {cookieName: "token", cookieValue: response.data.refreshToken})
        return {status: "success", user: response.data.user};
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}

export const checkAuth = async (): Promise<IAuthResponse> => {
    try {
        const response = await $api.get('/refresh', {withCredentials: true})
        localStorage.setItem('token', response.data.refreshToken);
        await axios.post("/api/cookies", {cookieName: "token", cookieValue: response.data.refreshToken})
        return {status: "success", user: response.data.user};
    } catch (e: any) {
       return {status: "error", message: e.response.data.message};
    }
}

export const logout = async (): Promise<void | { status: "error", message: string }> => {
    try {
        await $api.post('/logout');
        await axios.post("/api/cookies", {cookieName: "token", cookieValue: ""})
        localStorage.clear();
    } catch (e: any) {
        return {status: "error", message: e.response.data.message};
    }
}