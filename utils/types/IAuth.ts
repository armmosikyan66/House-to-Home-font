import {IUser} from "./IUser";

export type IRegister = {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
    role?: "user" | "locale" | "admin"
}

export type ILogin = {
    password: string;
    email: string;
}

export interface ILoginResponse {
    user?: IUser;
    message?: string;
    status: "success" | "error";
}