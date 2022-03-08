class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    this.paragraphEl = document.createElement("p");
    this.paragraphEl.innerText = "This paragraph has been dynamically added by JavaScript!";
    this.mainContainerEl.append(this.paragraphEl);
  }

}

module.exports = View;
