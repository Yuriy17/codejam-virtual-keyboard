import './assets/stylesheets/main.scss';
import App from './modules/App';
import './favicon.ico';

const VirtualKeyboard = new App();
VirtualKeyboard.init('ENGLISH');
VirtualKeyboard.render(document.body);
document.body.querySelector('main').insertAdjacentHTML('beforeend',
  `<br><p>Клавиатура создана в операционной системе Linux</p>
  <br><p>Для переключения языка комбинация: левыe alt + shift</p>`);
