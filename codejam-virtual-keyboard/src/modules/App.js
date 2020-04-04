import { createElement } from '../utils';
import Keyboard from './Keyboard';
import Textarea from './Textarea';

export default class App {
  init(language) {
    this.TEXTAREA = new Textarea();
    this.KEYBOARD = new Keyboard(language);
  }

  render(node) {
    this.MAIN = createElement('main', 'main');
    this.MAIN.append(this.TEXTAREA.render(10), this.KEYBOARD.render());
    node.appendChild(this.MAIN);
  }

  // eslint-disable-next-line class-methods-use-this
  activate() {
    document.addEventListener('DOMContentLoaded', () => {
      // this.TEXTAREA.activate();
      document.addEventListener('keydown', (event) => {
        this.KEYBOARD.keyDown(event);
      });
      document.addEventListener('keyup', (event) => {
        this.KEYBOARD.keyUp(event);
      });
    });
  }
}
