type Callback = (...args: unknown[]) => void;

class EventBus {
   private readonly subscribers: Record<string, Callback[]>;

   constructor() {
      this.subscribers = {};
   }

   subscribe(eventType: string, callback: Callback): () => void {
      if (!this.subscribers[eventType]) {
         this.subscribers[eventType] = [];
      }
      this.subscribers[eventType].push(callback);
      return () => this.unsubscribe(eventType, callback);
   }

   unsubscribe(eventType: string, callback: Callback): void {
      if (this.subscribers[eventType]) {
         this.subscribers[eventType] = this.subscribers[eventType].filter(
            (cb) => cb !== callback
         );
      }
   }

   emit(eventType: string, ...args: unknown[]): void {
      const eventCallbacks = this.subscribers[eventType];
      if (!eventCallbacks) {
         return;
      }
      for (const eventCallback of eventCallbacks) {
         eventCallback(...args);
      }
   }
}

export const eventBus = new EventBus();