export interface IUser {
    email: string;
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    favorites: string[];
    role: "user" | "locale" | "admin";
    createdAt: Date;
}