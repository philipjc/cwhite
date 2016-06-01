import '../styles/main.scss';

// import routes from './routes';
import Header from './Header';
import sideForm from './sideForm';

class Site {
  constructor() {
    this.header = new Header();
    this.sideForm = new sideForm();
    // this.main()
  }

  // main() {

  // }
}

const site = new Site();
