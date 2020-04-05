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

  // eslint-disable-next-line class-methods-use-this
  activate() {
    document.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('keydown', (event) => {
        event.preventDefault();
        this.KEYBOARD.keyDown(event, this.TEXTAREA.focus);
        if (this.TEXTAREA.focus) {
          this.TEXTAREA.node.value += this.KEYBOARD.elements.keyPressed;
        }
      });
      document.addEventListener('keyup', (event) => {
        this.KEYBOARD.keyUp(event);
      });
    });
    window.addEventListener('beforeunload', () => {
      this.localData.textareaValue = this.TEXTAREA.node.value;
      this.localData.language = this.KEYBOARD.properties.language;
      window.localStorage.setItem('keyboardLocalData', JSON.stringify(this.localData));
    });
  }
}
