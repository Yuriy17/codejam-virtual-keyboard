function createElement(tag, ...classes) {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  return element;
}


// eslint-disable-next-line import/prefer-default-export
export { createElement };
