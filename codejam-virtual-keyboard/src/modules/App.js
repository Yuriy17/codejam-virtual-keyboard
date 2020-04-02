import createElement from '../utils';
import Keyboard from './Keyboard';
import Textarea from './Textarea';

export default class App {
  init(language) {
    this.TEXTAREA = new Textarea();
    this.KEYBOARD = new Keyboard(language);
    this.KEYBOARD.init();
    this.TEXTAREA.init();
  }

  render(node) {
    const MAIN = createElement('main', 'main');
    MAIN.append(this.TEXTAREA.render(10), this.KEYBOARD.render());
    node.appendChild(MAIN);
  }
}
