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

}

createKeyboard()