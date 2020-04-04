import { createElement } from '../utils';

export default class Textarea {
  render(rows) {
    this.textarea = createElement('textarea', 'keyboard-input');
    this.textarea.setAttribute('rows', rows);
    return this.textarea;
  }
}
