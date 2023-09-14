// basic event system using vanilla js

class Events {
  constructor() {
    this.events = {
      // [eventName]: [cb, cb, cb]
      // ...
    }
  }

  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      this.events[eventName] = [callback]
    }
  }

  // Trigger all callbacks associated with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb()
      }
    }
  }

  // Remove all event handlers associated with the given eventName
  off(eventName) {
    delete this.events[eventName]
  }
}

module.exports = Events
