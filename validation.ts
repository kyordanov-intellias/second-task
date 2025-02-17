import { User } from "./user";

export type UpdateUser = Partial<Omit<User, "id" | "createdAt">>;

export function isUser(obj: any): obj is User {
    return obj && typeof obj.name === "string" && typeof obj.email === 'string';
}