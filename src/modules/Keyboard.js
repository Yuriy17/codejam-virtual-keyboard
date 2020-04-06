import { createElement } from '../utils';
import database from '../buttons';

class Keyboard {
  constructor(language = 'ENGLISH') {
    this.elements = {
      keysContainer: null,
      keys: database.buttons,
      keysNodes: [],
      keyPressed: null,
    };

    this.eventHandlers = {
      onMouseInput: null,
      onKeyboardInput: null,
    };

    this.properties = {
      language,
      value: '',
      capsLock: false,
      altKey: false,
      shiftKey: false,
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
          button.innerHTML = element.title === 'Language'
            ? '<i class="material-icons">language</i>' : element.title;

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
          if (element.code === 'Backspace' || element.code === 'Enter' || element.code === 'Delete') {
            currentRow.append(button);
            button.classList.add(element.code === 'Delete' ? 'keyboard__key-small' : 'keyboard__key-large');
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
          if (element.code === 'Space') {
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

  keyDown(event, textAreaFocus = false) {
    const { language, altKey, shiftKey } = this.properties;
    this.elements.keys.forEach((element, index) => {
      if (element.code === event.code) {
        this.elements.keysNodes[index].classList.add('keyboard__key-pressed');

        if (textAreaFocus) {
          if (element.type === 'CHAR') {
            this.elements.keyPressed = element[language].default;
          }
        }
      }
    });

    const isCurrentShift = !!(event.code === 'ShiftLeft' || event.code === 'ShiftRight');
    const isCurrentAlt = !!(event.code === 'AltLeft' || event.code === 'AltRight');
    if (altKey && !shiftKey && isCurrentShift && event.key === 'GroupNext') {
      this.properties.shiftKey = true;
      this.changeLanguage();
    } else if (shiftKey && !altKey && isCurrentAlt && event.key === 'GroupNext') {
      this.properties.altKey = true;
      this.changeLanguage();
    } else if (isCurrentAlt && !altKey) {
      this.properties.altKey = true;
    } else if (isCurrentShift && !shiftKey) {
      this.properties.shiftKey = true;
    }
  }

  keyUp(event) {
    const { altKey, shiftKey } = this.properties;
    this.elements.keys.forEach((element, index) => {
      if (element.code === event.code) {
        this.elements.keysNodes[index].classList.remove('keyboard__key-pressed');
      }
    });

    if ((event.code === 'AltLeft' || event.code === 'AltRight') && altKey) {
      this.properties.altKey = false;
    } else if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && shiftKey) {
      this.properties.shiftKey = false;
    }
  }

  mouseup(button) {
    this.elements.keyPressed = button.textContent;
  }


  changeLanguage() {
    this.properties.language = this.properties.language === 'ENGLISH' ? 'RUSSIAN' : 'ENGLISH';
    const { language } = this.properties;
    this.elements.keys.forEach((element, index) => {
      if (element[language] && element.code !== 'Tab') {
        this.elements.keysNodes[index].innerHTML = element[language].default;
      }
    });
  }
}

export default Keyboard;
