
class sideElement {

  constructor(width, height) {

    this.width = width;
    this.height = height;
    this.inview = false;

    this.formOpenElement = document.querySelector('.form-open');
    this.formCloseElement = document.querySelector('.form-close');
    this.formContainerElement = document.querySelector('.contact-form');

    this.onToggleElement = this.onToggleElement.bind(this);
  }

  addEventListener() {
    this.formOpenElement.addEventListener('click', this.onToggleElement);
  }

  onToggleElement() {
    this.formContainerElement.classList.toggle('contact-form--open');
  }

}

export default sideElement;
