import { User } from "./user";
import { Database } from "./database";
import { Log, RestrictTo } from "./decorators";
import { UserRole } from "./types";

export class UserService {
  private db = new Database<User>();

  @Log
  createUser(user: User) {
    this.db.create(user.id, user);
    console.log(`User ${user.name} created successfully.`);
  }

  @RestrictTo("admin")
  deleteUser(user: User, role: UserRole) {
    this.db.delete(user.id);
    console.log(`User ${user.name} deleted.`);
  }
}