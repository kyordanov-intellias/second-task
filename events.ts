import { User } from "./user";

type EventMap = {
  userCreated: User;
  userDeleted: User;
};

type EventCallback<T> = (data: T) => void;

export class EventSystem {
  private events = new Map<keyof EventMap, EventCallback<any>[]>();

  on<K extends keyof EventMap>(event: K, callback: EventCallback<EventMap[K]>) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)!.push(callback);
  }

  emit<K extends keyof EventMap>(event: K, data: EventMap[K]) {
    this.events.get(event)?.forEach((callback) => callback(data));
  }
}
