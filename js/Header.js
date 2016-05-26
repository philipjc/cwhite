
export default class Header {

  constructor() {

    this.scrolled = false;
    this.windowY = 0;

    //Elements
    this.headerElement = document.querySelector('.header');
    this.mainContainerElement = document.querySelector('.container');

    // Binds
    this.onWindowScoll = this.onWindowScoll.bind(this);
    this.addHeaderScrolled = this.addHeaderScrolled.bind(this);
    this.removeHeaderScrolled = this.removeHeaderScrolled.bind(this);

    // Listeners
    this.addEventListeners();
  }

  addEventListeners() {
    window.addEventListener('scroll', this.onWindowScoll);
  }

  addHeaderScrolled() {
    this.headerElement.classList.add('header--scrolled');
    this.mainContainerElement.classList.add('top-margin');
  }

  removeHeaderScrolled() {
    this.headerElement.classList.remove('header--scrolled');
    this.mainContainerElement.classList.remove('top-margin');
  }

  onWindowScoll() {
    this.windowY = window.scrollY;

    if (this.windowY > 120) {
      this.addHeaderScrolled();
    }
    else {
      this.removeHeaderScrolled();
    }
  }

}
