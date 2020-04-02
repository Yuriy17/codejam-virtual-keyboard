import createElement from '../utils';
import buttons from '../buttons.json';

class Keyboard {
  constructor(language) {
    this.elements = {
      keysContainer: null,
      keys: buttons,
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
  }

  init() {
    this.elements.keysContainer = createElement('div', 'keyboard');
  }

  render() {
    this.elements.keysContainer.append(...this._createKeys());
    return this.elements.keysContainer;
  }

  _createKeys() {
    const nodeItems = [];
    const { language } = this.properties;
    nodeItems.push(createElement('div', 'keyboard__row'));
    this.elements.keys.forEach((element) => {
      if (element.code === 'Backspace'
        || element.code === 'Enter'
        || element.code === 'ShiftRight'
        || element.code === 'IntlBackslash') {
        const button = createElement('button', 'keyboard__key');
        button.innerHTML = element[language];
        nodeItems[nodeItems.length - 1].append(button);
        nodeItems.push(createElement('div', 'keyboard__row'));
      } else {
        const button = createElement('button', 'keyboard__key');
        button.innerHTML = 'a';
        nodeItems[nodeItems.length - 1].append(button);
      }
    });
    return nodeItems;
  }
}

export default Keyboard;
