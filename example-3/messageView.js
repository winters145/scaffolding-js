class MessageView {
  constructor() {
    this.mainCountainerEl = document.querySelector('#main-container');
    this.showButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.inputEl = document.querySelector('#message-input')

    this.showButtonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
    
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    this.messageEl = document.createElement('div')
    this.messageEl.setAttribute('id', 'message');
    console.log(this.inputEl.value)
    console.log(this.messageEl.value)
    this.messageEl.innerText = this.inputEl.value.toString()
    this.mainCountainerEl.append(this.messageEl);
  }

  hideMessage() {
    this.messageEl.remove();
  };
}

module.exports = MessageView;
