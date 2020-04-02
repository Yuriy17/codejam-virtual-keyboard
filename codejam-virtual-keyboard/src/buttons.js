const buttons = [
  {
    type: 'CHAR',
    ENGLISH: { default: '§', shift: '±' },
    RUSSIAN: { default: '>', shift: '<' },
    code: 'Backquote',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '1', shift: '!' },
    RUSSIAN: { default: '1', shift: '!' },
    code: 'Digit1',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '2', shift: '@' },
    RUSSIAN: { default: '2', shift: '"' },
    code: 'Digit2',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '3', shift: '#' },
    RUSSIAN: { default: '3', shift: '№' },
    code: 'Digit3',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '4', shift: '$' },
    RUSSIAN: { default: '4', shift: '%' },
    code: 'Digit4',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '5', shift: '%' },
    RUSSIAN: { default: '5', shift: ':' },
    code: 'Digit5',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '6', shift: '^' },
    RUSSIAN: { default: '6', shift: ',' },
    code: 'Digit6',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '7', shift: '&' },
    RUSSIAN: { default: '7', shift: '.' },
    code: 'Digit7',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '8', shift: '*' },
    RUSSIAN: { default: '8', shift: ';' },
    code: 'Digit8',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '9', shift: '(' },
    RUSSIAN: { default: '9', shift: '(' },
    code: 'Digit9',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '0', shift: ')' },
    RUSSIAN: { default: '0', shift: ')' },
    code: 'Digit0',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '-', shift: '_' },
    RUSSIAN: { default: '-', shift: '_' },
    code: 'Minus',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '=', shift: '+' },
    RUSSIAN: { default: '=', shift: '+' },
    code: 'Equal',
  },
  {
    type: 'NAVIGATION',
    code: 'Backspace',
    title: 'Backspace',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '\t', shift: '\t' },
    RUSSIAN: { default: '\t', shift: '\t' },
    title: 'Tab',
    code: 'Tab',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'q', shift: 'Q' },
    RUSSIAN: { default: 'й', shift: 'Й' },
    code: 'KeyQ',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'w', shift: 'W' },
    RUSSIAN: { default: 'ц', shift: 'Ц' },
    code: 'KeyW',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'e', shift: 'E' },
    RUSSIAN: { default: 'у', shift: 'У' },
    code: 'KeyE',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'r', shift: 'R' },
    RUSSIAN: { default: 'к', shift: 'К' },
    code: 'KeyR',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 't', shift: 'T' },
    RUSSIAN: { default: 'е', shift: 'Е' },
    code: 'KeyT',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'y', shift: 'Y' },
    RUSSIAN: { default: 'н', shift: 'Н' },
    code: 'KeyY',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'u', shift: 'U' },
    RUSSIAN: { default: 'г', shift: 'Г' },
    code: 'KeyU',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'i', shift: 'I' },
    RUSSIAN: { default: 'ш', shift: 'Ш' },
    code: 'KeyI',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'o', shift: 'O' },
    RUSSIAN: { default: 'щ', shift: 'Щ' },
    code: 'KeyO',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'p', shift: 'P' },
    RUSSIAN: { default: 'з', shift: 'З' },
    code: 'KeyP',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '[', shift: '{' },
    RUSSIAN: { default: 'х', shift: 'Х' },
    code: 'BracketLeft',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: ']', shift: '}' },
    RUSSIAN: { default: 'ъ', shift: 'Ъ' },
    code: 'BracketRight',
  },
  {
    type: 'NAVIGATION',
    code: 'Enter',
    title: 'Enter',
  },
  {
    type: 'CONTROL',
    code: 'CapsLock',
    title: 'Caps lock',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'a', shift: 'A' },
    RUSSIAN: { default: 'ф', shift: 'Ф' },
    code: 'KeyA',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 's', shift: 'S' },
    RUSSIAN: { default: 'ы', shift: 'Ы' },
    code: 'KeyS',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'd', shift: 'D' },
    RUSSIAN: { default: 'в', shift: 'В' },
    code: 'KeyD',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'f', shift: 'F' },
    RUSSIAN: { default: 'а', shift: 'А' },
    code: 'KeyF',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'g', shift: 'G' },
    RUSSIAN: { default: 'п', shift: 'П' },
    code: 'KeyG',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'h', shift: 'H' },
    RUSSIAN: { default: 'р', shift: 'Р' },
    code: 'KeyH',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'j', shift: 'J' },
    RUSSIAN: { default: 'о', shift: 'О' },
    code: 'KeyJ',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'k', shift: 'K' },
    RUSSIAN: { default: 'л', shift: 'Л' },
    code: 'KeyK',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'l', shift: 'L' },
    RUSSIAN: { default: 'д', shift: 'Д' },
    code: 'KeyL',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: ';', shift: ':' },
    RUSSIAN: { default: 'ж', shift: 'Ж' },
    code: 'Semicolon',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: "'", shift: '"' },
    RUSSIAN: { default: 'э', shift: 'Э' },
    code: 'Quote',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '\\', shift: '|' },
    RUSSIAN: { default: 'ё', shift: 'Ё' },
    code: 'Backslash',
  },
  {
    type: 'CONTROL',
    code: 'ShiftLeft',
    title: 'Shift',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '`', shift: '~' },
    RUSSIAN: { default: ']', shift: '[' },
    code: 'IntlBackslash',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'z', shift: 'Z' },
    RUSSIAN: { default: 'я', shift: 'Я' },
    code: 'KeyZ',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'x', shift: 'X' },
    RUSSIAN: { default: 'ч', shift: 'Ч' },
    code: 'KeyX',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'c', shift: 'C' },
    RUSSIAN: { default: 'с', shift: 'С' },
    code: 'KeyC',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'v', shift: 'V' },
    RUSSIAN: { default: 'м', shift: 'М' },
    code: 'KeyV',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'b', shift: 'B' },
    RUSSIAN: { default: 'и', shift: 'И' },
    code: 'KeyB',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'n', shift: 'N' },
    RUSSIAN: { default: 'т', shift: 'Т' },
    code: 'KeyN',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: 'm', shift: 'M' },
    RUSSIAN: { default: 'ь', shift: 'Ь' },
    code: 'KeyM',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: ',', shift: '<' },
    RUSSIAN: { default: 'б', shift: 'Б' },
    code: 'Comma',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '.', shift: '>' },
    RUSSIAN: { default: 'ю', shift: 'Ю' },
    code: 'Period',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: '/', shift: '?' },
    RUSSIAN: { default: '/', shift: '?' },
    code: 'Slash',
  },
  {
    type: 'CONTROL',
    code: 'ShiftRight',
    title: 'Shift',
  },
  {
    type: 'CONTROL',
    code: 'ControlLeft',
    title: 'Control',
  },
  {
    type: 'CONTROL',
    code: 'AltLeft',
    title: 'Alt',
  },
  {
    type: 'CONTROL',
    code: 'MetaLeft',
    title: 'Cmd',
  },
  {
    type: 'CHAR',
    ENGLISH: { default: ' ', shift: ' ' },
    RUSSIAN: { default: ' ', shift: ' ' },
    title: 'Space',
    code: 'Space',
  },
  {
    type: 'CONTROL',
    code: 'MetaRight',
    title: 'Cmd',
  },
  {
    type: 'CONTROL',
    code: 'AltRight',
    title: 'Alt',
  },
  {
    type: 'NAVIGATION',
    code: 'ArrowLeft',
    title: 'Left',
  },
  {
    type: 'NAVIGATION',
    code: 'ArrowUp',
    title: 'Up',
  },
  {
    type: 'NAVIGATION',
    code: 'ArrowDown',
    title: 'Down',
  },
  {
    type: 'NAVIGATION',
    code: 'ArrowRight',
    title: 'Right',
  },
];

exports.buttons = buttons;
