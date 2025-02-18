import { Entity, UserRole } from "./types";


//TODO fix the Entity Generic
export abstract class BaseEntity<T extends object> {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: string) {
        this.id = id;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    update(data: Partial<T>) {
        Object.assign(this, data);
        this.updatedAt = new Date();
    }
}
