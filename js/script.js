"use strict";


const container = document.querySelector('.container');
import data from "./data.js";

console.log(data);


// function createKeyboard creates keyboard body and display

function createKeyboard() {
  const display = document.createElement('div');
  display.classList.add('display');
  container.append(display);
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard')
  container.append(keyboard)
  createKeyboardRow(data, keyboard)

}

createKeyboard()

function createKeyboardRow(array, parenElement) {
  array.forEach(el => {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard-row');
    parenElement.append(keyboardRow);

  });

}