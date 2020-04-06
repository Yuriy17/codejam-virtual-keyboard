import { createElement } from '../utils';
import Keyboard from './Keyboard';
import Textarea from './Textarea';

export default class App {
  init(language) {
    if (window.localStorage.getItem('keyboardLocalData')) {
      this.localData = JSON.parse(window.localStorage.getItem('keyboardLocalData'));
    } else {
      this.localData = {
        language,
        textareaValue: '',
      };
    }

    this.TEXTAREA = new Textarea(this.localData.textareaValue);
    this.KEYBOARD = new Keyboard(this.localData.language);
  }

  render(node) {
    this.MAIN = createElement('main', 'main');
    this.MAIN.append(this.TEXTAREA.render(10), this.KEYBOARD.render());
    node.appendChild(this.MAIN);
  }

  activate() {
    document.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('keydown', (event) => {
        event.preventDefault();
        switch (this.KEYBOARD.keyDown(event)) {
          case 'Backspace':
            this.TEXTAREA.node.value = this.TEXTAREA.node.value.slice(0, -1);
            break;

          case 'Enter':
            this.TEXTAREA.node.value += '\n';
            break;
          default:
            this.TEXTAREA.node.value += this.KEYBOARD.elements.keyPressed;
            this.KEYBOARD.elements.keyPressed = '';
            break;
        }
      });

      document.addEventListener('keyup', (event) => {
        this.KEYBOARD.keyUp(event);
      });

      let removePressedClass = true;
      this.KEYBOARD.elements.keysContainer.addEventListener('mousedown', (event) => {
        const ancestorKey = event.target.closest('.keyboard__key');
        if (event.target.classList.contains('keyboard__key')
        || ancestorKey) {
          if (ancestorKey) {
            ancestorKey.classList.add('keyboard__key-pressed');
            this.pressedButton = ancestorKey;
          } else {
            event.target.classList.add('keyboard__key-pressed');
            this.pressedButton = event.target;
          }
          const keyText = event.target.textContent;
          switch (keyText) {
            case 'Enter':
              this.TEXTAREA.node.value += '\n';
              break;
            case 'Tab':
              this.TEXTAREA.node.value += '\t';
              break;
            case 'Backspace':
              this.TEXTAREA.node.value = this.TEXTAREA.node.value.slice(0, -1);
              break;
            case 'Caps lock':
              removePressedClass = !this.KEYBOARD.capsToggle();
              break;
            case 'language':
              this.KEYBOARD.changeLanguage();
              break;
            case 'arrow_right':
              this.TEXTAREA.node.value += '→';
              break;
            case 'arrow_left':
              this.TEXTAREA.node.value += '←';
              break;
            case 'arrow_drop_up':
              this.TEXTAREA.node.value += '↑';
              break;
            case 'arrow_drop_down':
              this.TEXTAREA.node.value += '↓';
              break;
            case 'Alt':

              break;
            case 'Ctrl':

              break;
            case 'Shift':

              break;
            case 'Delete':

              break;


            default:
              this.TEXTAREA.node.value += keyText;
              break;
          }
        }
      });

      this.KEYBOARD.elements.keysContainer.addEventListener('mouseup', () => {
        if (!(this.pressedButton.textContent === 'Caps lock') || removePressedClass) {
          this.pressedButton.classList.remove('keyboard__key-pressed');
        }
      });
    });


    window.addEventListener('beforeunload', () => {
      this.localData.textareaValue = this.TEXTAREA.node.value;
      this.localData.language = this.KEYBOARD.properties.language;
      window.localStorage.setItem('keyboardLocalData', JSON.stringify(this.localData));
    });
  }
}
