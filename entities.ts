import { Entity } from "./types";


//TODO fix the Entity Generic
export abstract class BaseEntity<T> implements Entity<T> {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: string) {
        this.id = id;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
