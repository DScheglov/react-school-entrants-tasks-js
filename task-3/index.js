class Emitter {
  constructor() {
    this.handlers = {};
  }

  on(event, handler) {
    this.handlers[event] = this.handlers[event] || [];
    this.handlers[event].push(handler);
  }

  emit(event, data) {
    if (!this.handlers[event]) return;
    this.handlers[event].forEach(
      handler => handler(data)
    )
  }
}

export default Emitter;