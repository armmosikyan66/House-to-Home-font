import {IUser} from "./IUser";

export interface IRegister {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
}

export interface ILogin {
    password: string;
    email: string;
}

export interface ILoginResponse {
    user?: IUser;
    message?: string;
    status: "success" | "error";
}