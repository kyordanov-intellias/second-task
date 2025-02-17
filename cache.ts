export class Cache<T> {
    private cache = new WeakMap<object, T>();

    set(key: object, value: T) {
        this.cache.set(key, value);
    };

    get(key: object): T | undefined {
        return this.cache.get(key);
    };
};