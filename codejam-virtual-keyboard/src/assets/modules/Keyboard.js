class Keyboard {
  constructor() {
    this.elements = {
      main: null,
      keysContainer: null,
      keys: [],
    };

    this.eventHandlers = {
      onMouseInput: null,
      onKeyboardInput: null,
    };

    this.properties = {
      value: '',
      capsLock: false,
    };
  }

  init(node) {

  }
}

export default Keyboard;
