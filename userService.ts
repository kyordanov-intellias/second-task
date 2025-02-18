import { User } from "./user";
import { Database } from "./database";
import { Log, RestrictTo } from "./decorators";
import { UserRole } from "./types";
import { EventSystem } from "./events";
import { isUser } from "./validation";

export class UserService {
  private db = new Database<User>();
  private eventSystem = new EventSystem();

  @Log
  async createUser(user: User) {
    if (!isUser(user)) {
      throw new Error('Invalid user data');
    }
    await this.db.create(user.id, user);
    this.eventSystem.emit('userCreated', user);
  }

  @RestrictTo("admin")
  async deleteUser(user: User, role: UserRole) {
    await this.db.delete(user.id);
    this.eventSystem.emit('userDeleted', user);
  }
}