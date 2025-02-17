export class Database<T> {
    private storage = new Map<string, T>();

    create(id: string, item: T): void {
        this.storage.set(id, item);
    };

    read(id: string): T | undefined {
        return this.storage.get(id);
    };

    update(id: string, item: Partial<T>): void {
        if (!this.storage.has(id)) {
            throw new Error('Item not found!');
        };

        const existingItem = this.storage.get(id)!;
        this.storage.set(id, { ...existingItem, ...item });
    };

    delete(id: string): void {
        this.storage.delete(id);
    };
};