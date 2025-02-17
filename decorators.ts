import { UserRole } from "./types";

//TODO log decorator

export function Log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originlMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with args:`, args);
        return originlMethod.apply(this, args);
    };
};

export function RestrictTo(role: UserRole) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (userRole: UserRole, ...args: any[]) {
            if (userRole !== role) {
                throw new Error("Permision Denied");
            };
            return originalMethod.apply(this, args);
        };
    };
};
