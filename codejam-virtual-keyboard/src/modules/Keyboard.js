import { createElement } from '../utils';
import '../buttons';
/* // imagine we had a method to get language from cookies or other storage
const language = detectVisitorLanguage();
import(`./locale/${language}.json`).then(module => {
  // do something with the translations
}); */
class Keyboard {
  constructor(language) {
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
      language,
      value: '',
      capsLock: false,
    };

    return this.init();
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
