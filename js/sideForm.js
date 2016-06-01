
export default class sideForm {

  constructor() {

    this.inview = false;

    this.formOpenElement = document.querySelector('.form-open');
    this.formCloseElement = document.querySelector('.form-close');
    this.formContainerElement = document.querySelector('.contact-form');

    this.onToggleElement = this.onToggleElement.bind(this);
    this.addEventListeners();
  }

  addEventListeners() {
    this.formOpenElement.addEventListener('click', this.onToggleElement);
    this.formCloseElement.addEventListener('click', this.onToggleElement);
  }

  onToggleElement(evt) {
    this.formContainerElement.classList.toggle('hidden');
    this.inview = !this.inview;
  }

}
