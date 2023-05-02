'use strict';

import data from './data.js';

const body = document.body;


// create a class Keyboard
class Keyboard {
  constructor(body, data) {
    this.body = body;
    this.data = data;
  }

  // Method create Keyboard components
  createKeyboardInner() {
    this.display = document.createElement('textarea');
    this.display.classList.add('display');
    this.body.append(this.display);

    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    this.body.append(this.keyboard);



    // We create each keyboard row
    this.createKeyboardRows(this.data, this.keyboard);


    this.keys = Array.from(document.querySelectorAll('.keyboard-key'));
    // this.keys.find(key => key.classList.contains('Backquote') ? console.log(key) : null)

    this.handePhisicalKeyboardKeysPress(this.keys);
  }

  // Method create keyboard rows
  createKeyboardRows(data, parentElement) {
    this.parenElement = parentElement;
    this.keyboardRow;
    data.forEach(el => {
      this.keyboardRow = document.createElement('div');
      this.keyboardRow.classList.add('keyboard-row');
      this.parenElement.append(this.keyboardRow);

    });

    this.rows = document.querySelectorAll('.keyboard-row')
    for (let i = 0; i < data.length; i++) {
      this.createKeyboardKeys(this.data[i], this.rows[i]);
    }


  }

  // Method create Keyboard keys
  createKeyboardKeys(data, parentElement) {
    this.parenElement = parentElement;
    this.key;

      for (const subEl of data) {
      this.key = document.createElement('div');
      this.key.innerHTML = `
      <div class="keyboard-key ${subEl.addClass}">
          <span class="eng hidden">
            <span class="case-down hidden">${subEl.caseDownEng}</span>
            <span class="case-up hidden">${subEl.caseUpEng}</span>
            <span class="case-caps hidden">${subEl.caseCapsEng}</span>
            <span class="case-capsShift hidden">${subEl.caseCapsShiftEng}</span>
          </span>
          <span class="ukr">
            <span class="case-down">${subEl.caseDownUkr}</span>
            <span class="case-up hidden">${subEl.caseUpUkr}</span>
            <span class="case-caps hidden">${subEl.caseCapsShiftUkr}</span>
            <span class="case-capsShift hidden">${subEl.caseCapsShiftUkr}</span>
          </span>
        </div>
      `
      this.parenElement.append(this.key);
    }
  }

  showUpperCaseKeys() {



  }

  handePhisicalKeyboardKeysPress(keysArray) {
    this.keysArray = keysArray;
    this.keysPressed = new Set()
    this.pressed = new Set();

    document.addEventListener('keydown', (e) => {
      this.pressed.add(e.code);
      for (const item of this.pressed) {
        this.keysArray.map(el => {
          el.classList.contains(item) ? this.keysPressed.add(el) : null ;
        })
      }
      this.keysPressed.forEach(el => el.classList.add('active'))
    })

    document.addEventListener('keyup', (e) => {
      this.keysArray.forEach(key => key.classList.remove('active'))

      for (const el of this.keysPressed) {
        el.classList.contains(e.code) ? (this.targetKeyPressed = el) && (this.keyPressed = el.code) : null
      }
      this.keysPressed.clear()
      this.pressed.clear()

      console.log(this.pressed);

    })
  }
}

new Keyboard(body, data).createKeyboardInner();
