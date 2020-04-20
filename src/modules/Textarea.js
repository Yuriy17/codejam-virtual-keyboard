import { createElement } from '../utils';

export default class Textarea {
  constructor(textareaValue = '') {
    this.focus = false;
    this.value = textareaValue;
    this.selectionStart = textareaValue.length;
    this.node = null;
  }

  render(rows) {
    this.node = createElement('textarea', 'keyboard-input');
    this.node.setAttribute('rows', rows);
    this.node.innerHTML = this.value;
    this.node.selectionStart = this.selectionStart;
    return this.node;
  }

  delete() {
    this.node.value = this.value.substring(0, this.selectionStart)
    + this.value.substring(this.selectionStart + 1, this.value.length);
  }

  backspace() {
    if (this.selectionStart >= 1) {
      this.node.value = this.value.substring(0, this.selectionStart - 1)
    + this.value.substring(this.selectionStart, this.value.length);
      this.selectionStart -= 1;
    }
  }

  addChar(symbol) {
    // console.log(this.selectionStart);
    // console.log(this.value);

    // IF(this.selectionStart === )
    this.node.value = this.value.substring(0, this.selectionStart)
    + symbol
    + this.value.substring(this.selectionStart, this.value.length);
    this.selectionStart += 1;
  }
}
