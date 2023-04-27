'use strict';

import data from './data.js';

const body = document.body;

// function createKeyboard creates keyboard body and display

function createKeyboard() {
  // const display = document.createElement('div');
  // display.classList.add('display');
  // body.append(display);
  // const keyboard = document.createElement('div');
  // keyboard.classList.add('keyboard')
  // body.append(keyboard)

  // createKeyboardRow(data, keyboard)

  const keyboardRows = document.querySelectorAll('.keyboard-row');

  for (let i = 0; i < data.length; i++) {
    createKeyboardKeys(data[i], keyboardRows[i]);
  }
}

// createKeyboard()

class Keyboard {
  constructor(body, data) {
    this.body = body;
    this.data = data;
  }

  createKeyboardInner() {
    this.display = document.createElement('div');
    this.display.classList.add('display');
    this.body.append(this.display);

    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');
    this.body.append(this.keyboard);

    // We create each keyboard row
    this.createKeyboardRows(this.data, this.keyboard);
  }

  // Method create keyboard rows
  createKeyboardRows(data, parentElement) {
    this.parenElement = parentElement;
    data.forEach(el => {
      this.keyboardRow = document.createElement('div');
      this.keyboardRow.classList.add('keyboard-row');
      this.parenElement.append(this.keyboardRow);
    });
  }
}

new Keyboard(body, data).createKeyboardInner();

class Key {
  constructor({ keyObject }) {
    {this.name, this.addClass, this.caseCapsEng, this.caseCapsShiftEng, this.caseDownEng, this.caseUpEng, this.caseCapsUkr, this.caseCapsShiftUkr, this.caseDownUkr, this.caseUpUkr} = keyObject;
    this.createKey();
  }

  createKey() {
    this.key = document.createElement('div');
    this.key.innerHTML = `
      <div class="keyboard-key ${this.addClass}">
          <span class="eng hidden">
            <span class="case-down hidden">${this.caseDownEng}</span>
            <span class="case-up hidden">${this.caseUpEng}</span>
            <span class="case-caps hidden">${this.caseCapsEng}</span>
            <span class="case-capsShift hidden">${this.caseCapsShiftEng}</span>
          </span>
          <span class="ukr">
            <span class="case-down">${this.caseDownUkr}</span>
            <span class="case-up hidden">${this.caseUpUkr}</span>
            <span class="case-caps hidden">${this.caseCapsShiftUkr}</span>
            <span class="case-capsShift hidden">${this.caseCapsShiftUkr}</span>
          </span>
        </div>
      `

  }
}

// function create keyboard rows for keyboard

function createKeyboardRow(array, parenElement) {
  array.forEach(el => {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard-row');
    parenElement.append(keyboardRow);
    // createKeyboardKeys(data, keyboardRow)
  });
}

// function create each key for keyboard

function createKeyboardKeys(array, parentRow) {
  for (const subEl of array) {
    const key = document.createElement('div');
    key.innerHTML = `
      <div class="keyboard-key ${subEl.addClass}">
          <span class="eng hidden">
            <span class="case-down hidden">${subEl.eng.caseDown}</span>
            <span class="case-up hidden">${subEl.eng.caseUp}</span>
            <span class="case-caps hidden">${subEl.eng.caseCaps}</span>
            <span class="case-capsShift hidden">${subEl.eng.caseCapsShift}</span>
          </span>
          <span class="ukr">
            <span class="case-down">${subEl.ukr.caseDown}</span>
            <span class="case-up hidden">${subEl.ukr.caseUp}</span>
            <span class="case-caps hidden">${subEl.ukr.caseCaps}</span>
            <span class="case-capsShift hidden">${subEl.ukr.caseCapsShift}</span>
          </span>
        </div>
      `;
    parentRow.append(key);
  }
}
