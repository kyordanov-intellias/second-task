export class Database<T extends { id: string }> {
    private storage = new Map<string, T>();

    async create(id: string, item: T): Promise<void> {
        if (this.storage.has(id)) {
            throw new Error(`Item with id ${id} already exists`);
        }
        this.storage.set(id, item);
    }

    async read(id: string): Promise<T> {
        const item = this.storage.get(id);
        if (!item) {
            throw new Error(`Item with id ${id} not found`);
        }
        return item;
    }

    async update(id: string, item: Partial<T>): Promise<void> {
        const existingItem = await this.read(id);
        this.storage.set(id, { ...existingItem, ...item });
    }

    async delete(id: string): Promise<void> {
        if (!this.storage.delete(id)) {
            throw new Error(`Item with id ${id} not found`);
        }
    }
}