class MessageView {
  constructor() {
    this.mainCountainerEl = document.querySelector('#main-container');
    this.showButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

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
    this.messageEl.id = "message"
    this.messageEl.innerText = "This is a message displayed by JavaScript"
    this.mainCountainerEl.append(this.messageEl);
  }

  hideMessage() {
    this.messageEl.remove();
  };
}

module.exports = MessageView;