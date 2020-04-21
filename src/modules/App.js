import { createElement } from '../utils';
import Keyboard from './Keyboard';
import Textarea from './Textarea';

export default class App {
  init(language) {
    if (window.localStorage.getItem('keyboardLocalData')) {
      this.localData = JSON.parse(
        window.localStorage.getItem('keyboardLocalData'),
      );
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
      this.TEXTAREA.node.focus();
      document.addEventListener('keydown', (event) => {
        event.preventDefault();
        switch (this.KEYBOARD.keyDown(event)) {
          case 'Backspace':
            this.TEXTAREA.backspace();
            break;

          case 'Delete':
            this.TEXTAREA.delete();
            break;
          case 'Tab':
            this.TEXTAREA.addChar('\t');
            break;
          case 'Enter':
            this.TEXTAREA.addChar('\n');
            break;
          case 'ArrowRight':
            this.TEXTAREA.addChar('→');
            break;
          case 'ArrowLeft':
            this.TEXTAREA.addChar('←');
            break;

          case 'ArrowUp':
            this.TEXTAREA.addChar('↑');
            break;
          case 'ArrowDown':
            this.TEXTAREA.addChar('↓');
            break;
          case 'ControlLeft':
          case 'ControlRight':
          case 'CapsLock':
            break;

          default:
            if (this.KEYBOARD.elements.keyPressed) {
              this.TEXTAREA.addChar(this.KEYBOARD.elements.keyPressed);
              this.KEYBOARD.elements.keyPressed = '';
            }
            break;
        }
        this.TEXTAREA.value = this.TEXTAREA.node.value;
        this.TEXTAREA.node.selectionEnd = this.TEXTAREA.selectionStart;
      });

      document.addEventListener('keyup', (event) => {
        this.KEYBOARD.keyUp(event);
      });

      let removePressedClass = true;
      this.KEYBOARD.elements.keysContainer.addEventListener(
        'mousedown',
        (event) => {
          const ancestorKey = event.target.closest('.keyboard__key');
          if (event.target.classList.contains('keyboard__key') || ancestorKey) {
            if (ancestorKey) {
              ancestorKey.classList.add('keyboard__key-pressed');
              this.pressedButton = ancestorKey;
            } else {
              event.target.classList.add('keyboard__key-pressed');
              this.pressedButton = event.target;
            }
            const keyText = event.target.textContent;
            switch (keyText) {
              case 'Backspace':
                this.TEXTAREA.backspace();
                break;
              case 'Del':
                this.TEXTAREA.delete();
                break;
              case 'Caps lock':
                removePressedClass = !this.KEYBOARD.capsToggle();
                break;
              case 'language':
                this.KEYBOARD.changeLanguage();
                break;
              case 'Enter':
                this.TEXTAREA.addChar('\n');
                break;
              case 'Tab':
                this.TEXTAREA.addChar('\t');
                break;
              case 'arrow_right':
                this.TEXTAREA.addChar('→');
                break;
              case 'arrow_left':
                this.TEXTAREA.addChar('←');
                break;
              case 'arrow_drop_up':
                this.TEXTAREA.addChar('↑');
                break;
              case 'arrow_drop_down':
                this.TEXTAREA.addChar('↓');
                break;

              case 'Alt':
              case 'Ctrl':
              case 'Shift':
                break;

              default:
                this.TEXTAREA.addChar(keyText);
                break;
            }
          }
        },
      );

      this.KEYBOARD.elements.keysContainer.addEventListener('mouseup', () => {
        if (
          !(this.pressedButton.textContent === 'Caps lock')
          || removePressedClass
        ) {
          this.pressedButton.classList.remove('keyboard__key-pressed');
        }
      });

      this.TEXTAREA.node.addEventListener('mouseup', () => {
        this.TEXTAREA.selectionStart = this.TEXTAREA.node.selectionStart;
        this.TEXTAREA.value = this.TEXTAREA.node.value;
      });

      this.TEXTAREA.node.addEventListener('blur', () => {
        this.TEXTAREA.node.focus();
        this.TEXTAREA.node.selectionEnd = this.TEXTAREA.selectionStart;
        this.TEXTAREA.value = this.TEXTAREA.node.value;
      });
    });

    window.addEventListener('beforeunload', () => {
      this.localData.textareaValue = this.TEXTAREA.node.value;
      this.localData.language = this.KEYBOARD.properties.language;
      window.localStorage.setItem(
        'keyboardLocalData',
        JSON.stringify(this.localData),
      );
    });
  }
}
