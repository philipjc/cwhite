import '../styles/main.scss';

// import routes from './routes';
import Header from './Header';

class Site {
  constructor() {
    this.header = new Header();
    this.main()
  }

  main() {

  }
}

const site = new Site();


(() => {

  const formOpen = document.querySelector('.form-open');
  const formClose = document.querySelector('.form-close');
  const form = document.querySelector('.contact-form');

  const toggleForm = () => {
    form.classList.toggle('hidden');
    formOpen.removeEventListener('click', toggleForm);
    formClose.removeEventListener('click', toggleForm);
  }

  formOpen.addEventListener('click', () => {
      toggleForm();
  });

  formClose.addEventListener('click', () => {
      toggleForm();
  });

})();
