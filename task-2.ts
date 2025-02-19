import { User } from "./user";
import { UserService } from "./userService";
import { Database } from "./database";
import { EventSystem } from "./events";
import { Cache } from "./cache";

const eventSystem = new EventSystem();
const userCache = new Cache<User>();
const userDb = new Database<User>();
const userService = new UserService(userDb);

console.log(`=== Start of the test ===\n`);

// Testing Craeting and Storing User
async function test1() {
    console.log("\n🔹 Running Test 1: Creating a User...");

    const user = new User("1", "Alice", "alice@example.com", "admin", 25);
    await userService.createUser(user);

    // Verify if the user was stored
    try {
        console.log(`\n🔁 Storing user...\n`);
        const storedUser = await userDb.read("1");
        console.log("📌 Stored User:", storedUser);
    } catch (err) {
        console.log("❌ User was not found in the database!");
    }

    console.log("✅ Test 1 Passed!");
    console.log(`\n=== End of the test ===\n`);
}

// Testing Reading and Updating a User
async function test2() {
    console.log("\n🔹 Running Test 2: Reading & Updating a User\n");

    const user = new User("2", "Bob", "bob@example.com", "editor", 30);
    await userService.createUser(user);

    try {
        const retrievedUser = await userDb.read("2");
        console.log("📌 Retrieved User:", retrievedUser);
    } catch (err) {
        console.log("❌ Failed to read user from the database!");
    }

    // Update user details
    await userDb.update("2", { name: "Bob Updated" });

    try {
        const updatedUser = await userDb.read("2");
        console.log("📌 Updated User:", updatedUser);
    } catch (err) {
        console.log("❌ Failed to update user in the database!");
    }

    console.log("\n✅ Test 2 Passed!");
    console.log(`\n=== End of the test ===\n`);
}

// Testing Deleteing user(admin only)
async function test3() {
    console.log("\n🔹 Running Test 3: Deleting a User...\n");

    const user = new User("3", "Charlie", "charlie@example.com", "viewer", 22);
    await userService.createUser(user);

    try {
        const storedUser = await userService.getUserById("3");
        console.log("📌 Retrieved User Before Deletion:", storedUser);
    } catch (err) {
        console.log("❌ Failed to retrieve user before deletion!");
        return;
    }

    try {
        await userService.deleteUser(user, "admin");
        console.log("✅ User deleted successfully!");
    } catch (err: any) {
        console.log("❌ Failed to delete user!", err.message);
        return;
    }

    try {
        await userService.getUserById("3");
        console.log("❌ User was not deleted properly!");
    } catch (err) {
        console.log("✅ Failed to retrieve user after deletion (expected).");
    }

    console.log("\n✅ Test 3 Passed!\n");
    console.log(`\n=== End of the test ===\n`);
};

// Testing Event System
async function test4() {
    console.log("\n🔹 Running Test 4: Event System...\n");
    eventSystem.on("userCreated", (user) => {
        console.log("📌 Event Triggered: User Created ->", user.name);
    });

    eventSystem.on("userDeleted", (user) => {
        console.log("📌 Event Triggered: User Deleted ->", user.name);
    });
    const newUser = new User("4", "David", "david@example.com", "editor", 35);
    eventSystem.emit("userCreated", newUser);
    eventSystem.emit("userDeleted", newUser);

    console.log("\n✅ Test 4 Passed!");
    console.log(`\n=== End of the test ===\n`);
};

// Testing Cache
function test5() {
    console.log("\n🔹 Running Test 5: Cache and Decorators...\n");
    const user = new User("5", "Eve", "eve@example.com", "admin", 40);
    userCache.set(user, user);
    const cachedUser = userCache.get(user);
    console.log("📌 Cached User:", cachedUser ? cachedUser : "Not found!");
    console.log("\n✅ Test 5 Passed!");
    console.log(`\n=== End of the test ===\n`);
};


// test1();
// test2();
// test3();
// test4();
test5();