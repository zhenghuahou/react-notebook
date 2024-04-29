

class EventEmitter {
  subscriptions = new Map();
  yy=21;

  async emit(eventName, value) {
    const subscriptions = this.subscriptions.get(eventName);

    // console.info('[emit] subscriptions:',subscriptions)
    return Promise.all(subscriptions?.map((callback) => callback(value)) ?? []);
  }

  on(eventName, callback) {
    // console.info('[on] eventName:',eventName,'callback:',callback)
    const subscriptions = this.subscriptions.get(eventName);
    this.subscriptions.set(eventName, (subscriptions ?? [])?.concat(callback));
  }

  off(eventName, callback) {
    const subscriptions = this.subscriptions.get(eventName);

    if (callback) {
      this.subscriptions.set(eventName, subscriptions?.filter((cb) => cb !== callback) ?? []);
    } else {
      this.subscriptions.delete(eventName);
    }
  }

  clear(eventName) {
    if (eventName) {
      this.subscriptions.delete(eventName);
      return;
    }
    this.subscriptions.clear();
  }
}

const eventEmitter = new EventEmitter();

export default eventEmitter;


window.ee = eventEmitter;
