import { createElement } from '../utils';

export default class Textarea {
  constructor(textareaValue) {
    this.focus = false;
    this.value = textareaValue;
  }

  render(rows) {
    this.node = createElement('textarea', 'keyboard-input');
    this.node.setAttribute('rows', rows);
    this.node.innerHTML = this.value;
    this.addFocusListener();
    return this.node;
  }

  addFocusListener() {
    this.node.addEventListener('mouseup', () => {
      this.focus = true;
    });
  }
}
