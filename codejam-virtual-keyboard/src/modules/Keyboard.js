import { createElement } from '../utils';
import database from '../buttons';

class Keyboard {
  constructor(language) {
    this.elements = {
      keysContainer: null,
      keys: database.buttons,
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
    /*     const {
      Backspace, Enter, ShiftRight, IntlBackslash,
    } = DELIMiTER_KEYS; */
    const { language } = this.properties;
    nodeItems.push(createElement('div', 'keyboard__row'));

    this.elements.keys.forEach((element) => {
      const button = createElement('button', 'keyboard__key');
      nodeItems[nodeItems.length - 1].append(button);
      switch (element.type) {
        case 'CONTROL':
          button.innerHTML = element.title;
          if (element.code === 'ShiftRight') {
            button.classList.add('keyboard__key-medium');
            nodeItems.push(createElement('div', 'keyboard__row'));
          } else if (element.code === 'ShiftRight' || element.code === 'CapsLock') {
            button.classList.add('keyboard__key-medium');
          } else {
            button.classList.add('keyboard__key-small');
          }
          break;
        case 'NAVIGATION':
          button.innerHTML = element.title;
          if (element.code === 'Backspace' || element.code === 'Enter') {
            button.classList.add('keyboard__key-large');
            nodeItems.push(createElement('div', 'keyboard__row'));
          } else {
            button.classList.add('keyboard__key-small');
          }
          break;
        case 'CHAR':
          button.innerHTML = element[language].default;
          if (element.code === 'IntlBackslash') {
            nodeItems.push(createElement('div', 'keyboard__row'));
            button.classList.add('keyboard__key-small');
          } else if (element.code === 'Space') {
            button.classList.add('keyboard__key-space');
          } else {
            button.classList.add('keyboard__key-small');
          }
          break;

        default:
          break;
      }
    });
    return nodeItems;
  }
}

export default Keyboard;
