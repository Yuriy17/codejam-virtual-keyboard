import { createElement } from '../utils';
import database from '../buttons';

class Keyboard {
  constructor(language) {
    this.elements = {
      keysContainer: null,
      keys: database.buttons,
      keysNodes: [],
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


  render() {
    const keyboardFragment = document.createDocumentFragment();
    this.elements.keysContainer = createElement('div', 'keyboard');
    this.elements.keysContainer.append(...this._createKeys());
    keyboardFragment.append(this.elements.keysContainer);
    return keyboardFragment;
  }

  _createKeys() {
    const nodeRows = [];
    const { language } = this.properties;

    nodeRows.push(createElement('div', 'keyboard__row'));

    this.elements.keys.forEach((element) => {
      const button = createElement('button', 'keyboard__key');
      this.elements.keysNodes.push(button);
      const currentRow = nodeRows[nodeRows.length - 1];

      switch (element.type) {
        case 'CONTROL':
          button.innerHTML = element.title;
          currentRow.append(button);
          if (element.code === 'ShiftRight') {
            button.classList.add('keyboard__key-medium');
            nodeRows.push(createElement('div', 'keyboard__row'));
          } else if (element.code === 'ShiftLeft' || element.code === 'CapsLock') {
            button.classList.add('keyboard__key-medium');
          } else {
            button.classList.add('keyboard__key-small');
          }
          break;

        case 'NAVIGATION':
          if (element.code === 'Backspace' || element.code === 'Enter') {
            currentRow.append(button);
            button.classList.add('keyboard__key-large');
            button.innerHTML = element.title;
            nodeRows.push(createElement('div', 'keyboard__row'));
          } else {
            button.classList.add('keyboard__key-small');
            let arrow;
            if (element.code === 'ArrowLeft') {
              arrow = 'arrow_left';
              currentRow.append(button);
            } else if (element.code === 'ArrowRight') {
              arrow = 'arrow_right';
              currentRow.append(button);
            } else if (element.code === 'ArrowUp') {
              arrow = 'arrow_drop_up';
              const keyBlock = createElement('div', 'keyboard__key-block');
              keyBlock.append(button);
              currentRow.append(keyBlock);
            } else if (element.code === 'ArrowDown') {
              arrow = 'arrow_drop_down';
              currentRow.lastChild.append(button);
            }
            const icon = createElement('i', 'material-icons');
            icon.innerHTML = arrow;
            button.append(icon);
          }

          break;

        case 'CHAR':
          currentRow.append(button);
          if (element.code === 'Backslash') {
            nodeRows.push(createElement('div', 'keyboard__row'));
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
    return nodeRows;
  }

  // eslint-disable-next-line class-methods-use-this
  activate() {
    document.addEventListener('keydown', (event) => {
      this.elements.keys.forEach((element, index) => {
        if (element.code === event.code) {
          this.elements.keysNodes[index].classList.add('keyboard__key-pressed');
        }
      });
    });
    document.addEventListener('keyup', (event) => {
      this.elements.keys.forEach((element, index) => {
        if (element.code === event.code) {
          this.elements.keysNodes[index].classList.remove('keyboard__key-pressed');
        }
      });
    });
  }
}

export default Keyboard;
