"use strict";

const container = document.querySelector('.container');
import data from "./data.js";



// function createKeyboard creates keyboard body and display

function createKeyboard() {
  const display = document.createElement('div');
  display.classList.add('display');
  container.append(display);
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard')
  container.append(keyboard)
  createKeyboardRow(data, keyboard)

  const keyboardRows = document.querySelectorAll('.keyboard-row');

  for (let i = 0; i < data.length; i++) {
    createKeyboardKeys(data[i], keyboardRows[i])
  }
}

createKeyboard()


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

      const key = document.createElement('div')
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
      `
      parentRow.append(key)
    }
  }

