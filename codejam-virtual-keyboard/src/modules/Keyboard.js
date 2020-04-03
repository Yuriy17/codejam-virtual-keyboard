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
    const { language } = this.properties;
    nodeItems.push(createElement('div', 'keyboard__row'));

    this.elements.keys.forEach((element) => {
      const button = createElement('button', 'keyboard__key');

      switch (element.type) {
        case 'CONTROL':
          button.innerHTML = element.title;
          nodeItems[nodeItems.length - 1].append(button);
          if (element.code === 'ShiftRight') {
            button.classList.add('keyboard__key-medium');
            nodeItems.push(createElement('div', 'keyboard__row'));
          } else if (element.code === 'ShiftLeft' || element.code === 'CapsLock') {
            button.classList.add('keyboard__key-medium');
          } else {
            button.classList.add('keyboard__key-small');
          }
          break;

        case 'NAVIGATION':
          if (element.code === 'Backspace' || element.code === 'Enter') {
            nodeItems[nodeItems.length - 1].append(button);
            button.classList.add('keyboard__key-large');
            button.innerHTML = element.title;
            nodeItems.push(createElement('div', 'keyboard__row'));
          } else {
            button.classList.add('keyboard__key-small');
            let arrow;
            if (element.code === 'ArrowLeft') {
              arrow = 'arrow_left';
              nodeItems[nodeItems.length - 1].append(button);
            } else if (element.code === 'ArrowRight') {
              arrow = 'arrow_right';
              nodeItems[nodeItems.length - 1].append(button);
            } else if (element.code === 'ArrowUp') {
              arrow = 'arrow_drop_up';
              const keyBlock = createElement('div', 'keyboard__key-block');
              keyBlock.append(button);
              nodeItems[nodeItems.length - 1].append(keyBlock);
            } else if (element.code === 'ArrowDown') {
              arrow = 'arrow_drop_down';
              nodeItems[nodeItems.length - 1].lastChild.append(button);
            }
            const icon = createElement('i', 'material-icons');
            icon.innerHTML = arrow;
            button.append(icon);
          }

          break;

        case 'CHAR':
          nodeItems[nodeItems.length - 1].append(button);
          if (element.code === 'Backslash') {
            nodeItems.push(createElement('div', 'keyboard__row'));
            button.classList.add('keyboard__key-small');
          } else if (element.code === 'Space') {
            button.classList.add('keyboard__key-space');
          } else {
            button.classList.add('keyboard__key-small');
          }
          if (element.code === 'Tab') {
            button.innerHTML = element.title;
          } else {
            button.innerHTML = element[language].default;
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
