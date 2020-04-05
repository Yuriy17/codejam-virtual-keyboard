import './assets/stylesheets/main.scss';
import App from './modules/App';
import './favicon.ico';

const VirtualKeyboard = new App();
VirtualKeyboard.init('ENGLISH');
VirtualKeyboard.render(document.body);
VirtualKeyboard.activate();
document.body.querySelector('main').insertAdjacentHTML('beforeend',
  `<br><p>Клавиатура создана в операционной системе Linux</p>
  <br><p>Для переключения языка комбинация: alt + shift 
  или кнопка <i class="material-icons">language</i> на клавиатуре</p>`);
