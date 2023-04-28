'use strict';

import data from './data.js';

const body = document.body;


// create a class Keyboard
class Keyboard {
  constructor(body, data) {
    this.body = body;
    this.data = data;
    // this.findAllKeys()
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

    this.keyboard.addEventListener('click', (e) => {
      this.target = e.target;
      this.content
      // if(this.target.children.children)
      for (const el of Array.from(this.target.children)) {
        for (const subEl of Array.from(el.children)) {
          if(!subEl.classList.contains('hidden')) {
            console.log(subEl.textContent);
            this.content = subEl.textContent
          }
        }
      }

      this.display.textContent += this.content;
      // console.log(Array.from(this.target.children));
    })
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

    this.keys = document.querySelectorAll('.keyboard-key')
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

  // findAllKeys(e) {
  //     this.target = e;
  //     console.log(this.target.classList);
  // }
}

new Keyboard(body, data).createKeyboardInner();
