import { UserRole } from "./types";


export function Log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originlMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`[Log decorator] Calling ${key} with args:`, args);
        return originlMethod.apply(this, args);
    };
};

export function RestrictTo(role: UserRole) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`[RestrictTo decorator] Calling ${key} with args:`, args);
            const userRole = args[1];
            if (userRole !== role) {
                throw new Error("Permission Denied");
            }
            return originalMethod.apply(this, args);
        };
    };
}
