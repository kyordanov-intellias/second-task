type EventCallback = (data: any) => void;

export class EventSystem {
    private events: Map<string, EventCallback[]> = new Map();

    on(event: string, callback: EventCallback) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
            this.events.get(event)!.push(callback);
        };
    };

    emit(event: string, data: any) {
        this.events.get(event)?.forEach(callback => callback(data));
    };
};