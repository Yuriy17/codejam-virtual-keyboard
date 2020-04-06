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
        this.KEYBOARD.keyDown(event);

        this.TEXTAREA.node.value += this.KEYBOARD.elements.keyPressed;
      });
      document.addEventListener('keyup', (event) => {
        switch (this.KEYBOARD.keyUp(event)) {
          case 'Backspace':
            this.TEXTAREA.node.value = this.TEXTAREA.node.value.slice(0, -1);
            break;

          default:
            break;
        }
      });
      this.KEYBOARD.elements.keysContainer.addEventListener('mouseup', (event) => {
        if (event.target.classList.contains('keyboard__key')) {
          this.KEYBOARD.mouseUp(event.target);
          this.TEXTAREA.node.value += this.KEYBOARD.elements.keyPressed;
        }
      });
      this.KEYBOARD.elements.keysContainer.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('keyboard__key')) {
          this.KEYBOARD.mouseDown(event.target);
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
