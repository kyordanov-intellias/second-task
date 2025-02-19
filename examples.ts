let message: string = "Hello, TypeScript!";
let number: number = 4;

console.log(message);

interface User {
    name: string;
    id: number
};


// Interface
interface Driver {
    car: string;
};

// Type Aliases
type StringOrNumber = string | number;
type UserOrDriver = User | Driver;

const user: UserOrDriver = {
    car: 'Audi a3'
};

// Generics
function getFirstArg<T>(arr: T[]) {
    return arr[0];
};

interface ApiResponse<Data> {
    data: Data;
    error: boolean
};

type UserResponce = ApiResponse<{ name: string; surname: string }>;
type BlogResponce = ApiResponse<{ title: string; author: string }>;

const responceUser: UserResponce = {
    data: {
        name: 'Audi',
        surname: 'A3'
    },
    error: false
};

const responceBlog: BlogResponce = {
    data: {
        title: 'Audi',
        author: 'A3'
    },
    error: false
}

getFirstArg([1, 2, 3]);
getFirstArg(['ew', '31', 'ttt']);


//TypeScript Utility Types

//1. Awaited<Type> - This utility type unwraps the type within a Promise
type AsyncData = Promise<string>;
type Unwrapped = Awaited<AsyncData>; // Unwrapped is now 'string'

//2 Partial<Type> -  makes all properties within a type optional
interface User {
    name: string;
    age: number;
};
type PartialUser = Partial<User>; // Properties of User become optional

//3. Required<Type> - ensures that all properties within a type are mandatory
type RequiredUser = Required<PartialUser>; // Reverts PartialUser to mandatory properties

//4. Readonly<Type> - turns all properties of a type into read-only
type ImmutableUser = Readonly<User>; // Properties of User become read-only

//5. Record<Keys, Type> - This creates a type with specified keys and a given value type
type UserRecord = Record<'id' | 'name', string>; // { id: string; name: string; }

//6. Pick<Type, Keys> - selects specific properties from a type
type PickedUser = Pick<User, 'name'>; // { name: string; }

//7. Omit<Type, Keys> - removes specified properties from a type
type WithoutAge = Omit<User, 'age'>; // { name: string; }

//8. Exclude<UnionType, ExcludedMembers> - filters out members from a union type
type Numbers = Exclude<number | string, string>; // Numbers is now 'number'

//9. Extract<Type, Union> - retrieves types that are present in both unions
type Common = Extract<number | string, string | boolean>; // Common is 'string'

//10. NonNullable<Type> - removes null and undefined from a type
type NonNullString = NonNullable<string | null | undefined>; // NonNullString is 'string'


class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    };

    move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    };
};

class Bird extends Animal {
    fly(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

const an1 = new Animal('Paco');
const bird1 = new Bird('levski');