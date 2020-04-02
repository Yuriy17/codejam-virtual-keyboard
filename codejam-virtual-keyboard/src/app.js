import './assets/stylesheets/main.scss';
import App from './modules/App';

const VirtualKeyboard = new App();
VirtualKeyboard.init('ENGLISH');
VirtualKeyboard.render(document.body);
