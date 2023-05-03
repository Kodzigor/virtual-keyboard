'use strict';

import data from './data.js';

const body = document.body;


// create a class Keyboard
class Keyboard {
  constructor(body, data) {
    this.body = body;
    this.data = data;
    this.createKeyboardInner();
    this.createKeyboardKeys(this.data, this.keyboard);
    this.capsLockHandler();
    this.changeLanguageHandler('ControlLeft', 'AltLeft')
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


  // Method creates Keyboard keys
  createKeyboardKeys(data, parentElement) {
    data.forEach((element) => {
      let row = document.createElement('div');
      row.classList.add('keyboard-row');

      element.forEach(subEl => {
        let key = document.createElement('div');
        key.classList.add('keyboard-key', subEl.class[0], subEl.class[1]);

        if(key.classList.contains('special')) {
          console.log('Hi');
          let spanSpecial = document.createElement('span');
          spanSpecial.classList.add('eng');
          spanSpecial.textContent = subEl.eng;
          key.append(spanSpecial)
        } else {
          if(subEl.eng) {
          let spanEng = document.createElement('span');
          spanEng.classList.add('eng', 'hidden')

          subEl.eng.forEach((el, i) => {
            let span = document.createElement('span');
            span.textContent = subEl.eng[i]
            spanEng.append(span)
          })
          key.append(spanEng)
        }

        if(subEl.ukr) {
          let spanUkr = document.createElement('span');
          spanUkr.classList.add('ukr')

          subEl.eng.forEach((el, i) => {
            let span = document.createElement('span');
            span.textContent = subEl.ukr[i]
            spanUkr.append(span)
          })
          key.append(spanUkr)
        }
      }
        row.append(key)
      })

      parentElement.append(row)
    });
  }

  // Method handles Caps Lock key

  capsLockHandler() {
      let spans = document.querySelectorAll('.character > span > span');
      let capsKey = document.querySelector('.CapsLock');
      let abc = 'qwertyuiopasdfghjklzxcvbnmйцукенгшщзхїфівапролджєячсмитьбюQWERTYUIOPASDFGHJKLZXCVBNMЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ'.split('');

      capsKey.addEventListener('click', (e) => {
              if(e.target.parentElement.classList.contains('CapsLock') && !capsKey.classList.contains('active')) {
                  capsKey.classList.add('active')
                  spans.forEach(span => {
                      if(abc.includes(span.textContent)) {
                          span.textContent = span.textContent.toUpperCase()
                      }
                  })
              } else {
                  capsKey.classList.remove('active')
                  spans.forEach(span => {
                      if(abc.includes(span.textContent)) {
                          span.textContent = span.textContent.toLowerCase()
                      }
                  })
              }
          })
  }

  // Method to handle Keyboard layout change

  changeLanguageHandler(...combination) {
        let pressedKeys = new Set();
        let chars = document.querySelectorAll('.character');
        let nums = document.querySelectorAll('.number');

        document.addEventListener('keydown', (e) => {
            pressedKeys.add(e.code);

            for (let code of combination) {
                if(!pressedKeys.has(code)) {
                    return
                }
            }

            pressedKeys.clear();
            chars.forEach(char => {
                Array.from(char.children).forEach(child => {
                    child.classList.toggle('hidden')
                })
            })
            nums.forEach(num => {
                Array.from(num.children).forEach(child => {
                    child.classList.toggle('hidden')
                })
            })
        })

        document.addEventListener('keyup', (e) => {
            pressedKeys.delete(e.code)
        })
    }

}

new Keyboard(body, data);
