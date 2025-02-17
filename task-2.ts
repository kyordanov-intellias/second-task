import { User } from "./user";
import { Database } from './database';
import { Cache } from "./cache";
import { EventSystem } from "./events";
import { UserService } from "./userService";

const userDB = new Database<User>();
const cache = new Cache<User>();
const eventSystem = new EventSystem();
const userService = new UserService();

eventSystem.on("userCreated", (user: User) => {
    console.log(`Event: New user created - ${user.name}`);
});

const user1 = new User("1", "Alice", "alice@example.com", "admin");
userDB.create(user1.id, user1);
cache.set(user1, user1);
eventSystem.emit("userCreated", user1);

userService.createUser(user1);
userService.deleteUser(user1, "admin"); // Works
// userService.deleteUser(user1, "viewer"); // Throws error
