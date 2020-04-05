import { createElement } from '../utils';

export default class Textarea {
  constructor() {
    this.focus = false;
  }

  render(rows) {
    this.textarea = createElement('textarea', 'keyboard-input');
    this.textarea.setAttribute('rows', rows);
    // this.textarea.preventDefault();
    this.addFocusListener();
    return this.textarea;
  }

  addFocusListener() {
    this.textarea.addEventListener('mouseup', () => {
      this.focus = true;
      console.log(`Textarea focus = ${this.focus}`);
    });
    this.textarea.addEventListener('blur', () => {
      this.focus = false;
      console.log(`Textarea focus = ${this.focus}`);
    });
  }
}
