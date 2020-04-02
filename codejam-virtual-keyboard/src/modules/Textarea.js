import { createElement } from '../utils';

export default class Textarea {
  // eslint-disable-next-line class-methods-use-this
  init() {}

  // eslint-disable-next-line class-methods-use-this
  render(rows) {
    const textarea = createElement('textarea', 'keyboard-input');
    textarea.setAttribute('rows', rows);
    return textarea;
  }
}
