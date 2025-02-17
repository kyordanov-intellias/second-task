import { UserRole } from "./types";
import { User } from "./user";

export type AdminOnly<T, Role> = Role extends "admin" ? T : never;

export function deleteUser<T extends User>(user: T, role: UserRole): AdminOnly<void, typeof role> {
    if (role !== 'admin') {
        throw new Error('Permission Denied');
    };
    console.log(`User ${user.name} has been deleted!`);
};

