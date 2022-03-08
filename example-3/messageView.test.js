/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
  });
  it('hides the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const showButtonEl = document.querySelector('#show-message-button');
    showButtonEl.click();

    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});