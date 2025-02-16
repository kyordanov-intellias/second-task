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