import { createElement } from '../utils';
import Keyboard from './Keyboard';
import Textarea from './Textarea';

export default class App {
  constructor(node) {
    this.body = node;
  }

  init() {
    document.getElementsByTagName('HEAD').insertAdjacentHTML('beforeend',
      '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
    const MAIN = createElement('main', 'main');
    MAIN.append(new Textarea(), new Keyboard('ENGLISH'));
    this.body.appendChild(MAIN);
  }
}
