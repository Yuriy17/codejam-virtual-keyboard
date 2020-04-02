import './assets/stylesheets/main.scss';
import App from './modules/App';
import './favicon.ico';

const VirtualKeyboard = new App();
VirtualKeyboard.init('ENGLISH');
VirtualKeyboard.render(document.body);
