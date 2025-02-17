export type UserRole = "admin" | "editor" | "viewer";

export type Entity<T> = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
} & T;