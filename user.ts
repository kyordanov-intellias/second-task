import { BaseEntity } from './entities';
import { UserRole } from './types';

export class User extends BaseEntity<{ id: string; name: string; email: string; role: UserRole; age: number }> {
    declare id: string;
    name: string;
    email: string;
    role: UserRole;
    age: number;

    constructor(id: string, name: string, email: string, role: UserRole, age: number) {
        super(id);
        this.name = name;
        this.email = email;
        this.role = role;
        this.age = age;
    };
};