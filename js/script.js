'use strict';

import data from './data.js';

const body = document.body;


// create a class Keyboard
class Keyboard {
  constructor(body, data) {
    this.body = body;
    this.data = data;
    this.createKeyboardInner();
  }

  // Method creates Keyboard display and keyboard
  createKeyboardInner() {
    this.display = document.createElement('textarea');
    this.display.classList.add('display');
    this.body.append(this.display);

    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    this.body.append(this.keyboard);
  }


  // Method create keyboard rows


  // Method create Keyboard keys





}

new Keyboard(body, data).createKeyboardInner();
