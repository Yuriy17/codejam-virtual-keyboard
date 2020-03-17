import { createElement } from './utils';

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
    // Create main elements
    this.elements.main = node;
    this.elements.keysContainer = createElement('div', 'keyboard');

    this.elements.keysContainer.appendChild(this._createKeys());
  }


  _createKeys() {

  }
}

export default Keyboard;
