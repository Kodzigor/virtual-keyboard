'use strict';

import data from './data.js';

const body = document.body;
const props = {
  lang: 'ukr',
  caps: false,
  langs: [
    {
    lang: 'ukr',
    isCurrent: false
  },
    {
    lang: 'eng',
    isCurrent: true
  }
  ]
};


// create a class Keyboard
class Keyboard {
  constructor(body, data, props) {
    this.body = body;
    this.data = data;
    this.props = props;
    this.createKeyboardInner();
    this.setKeyboardLang();
    this.createKeyboardKeys(this.data, this.keyboard, this.currentLang.lang);
    // this.capsLockHandler();
    // this.changeLanguageHandler('ControlLeft', 'AltLeft');
    // this.handleClicksToKeyboard()
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

    // Method sets Keyboard language
  setKeyboardLang() {
    console.log(this.props.langs);
    this.currentLang = this.props.langs.find(lang => {
      if(lang.isCurrent) {
        return lang.lang
      }
    });
  }


  // Method creates Keyboard keys
  createKeyboardKeys(data, parentElement, lang) {
    data.forEach((element) => {
      let row = document.createElement('div');
      row.classList.add('keyboard-row');

      element.forEach(subEl => {
        let key = document.createElement('div');
        // let specialClass = subEl.specialClass || '';
        key.classList.add('keyboard-key', subEl.addClass)
        let overlay = document.createElement('div');
        overlay.classList.add('keyboard-key--overlay');
        key.append(overlay);

        key.innerHTML += `
        <span class="${subEl.specialClass}">
            <span class="case-down">${subEl[lang].caseDown}</span>
            <span class="case-up hidden">${subEl[lang].caseUp}</span>
            <span class="case-caps hidden">${subEl[lang].caseCaps}</span>
            <span class="case-capsShift hidden">${subEl[lang].caseCapsShift}</span>
          </span>
        `;

        row.append(key)
      })

      parentElement.append(row)
    });
  }

  // Method handles Caps Lock key

  // capsLockHandler() {
  //     let spans = document.querySelectorAll('.character > span > span');
  //     let capsKey = document.querySelector('.CapsLock');
  //     let abc = 'qwertyuiopasdfghjklzxcvbnmйцукенгшщзхїфівапролджєячсмитьбюQWERTYUIOPASDFGHJKLZXCVBNMЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ'.split('');

  //     capsKey.addEventListener('click', (e) => {
  //             if(e.target.parentElement.classList.contains('CapsLock') && !capsKey.classList.contains('active')) {
  //                 capsKey.classList.add('active')
  //                 spans.forEach(span => {
  //                     if(abc.includes(span.textContent)) {
  //                         span.textContent = span.textContent.toUpperCase()
  //                     }
  //                 })
  //             } else {
  //                 capsKey.classList.remove('active')
  //                 spans.forEach(span => {
  //                     if(abc.includes(span.textContent)) {
  //                         span.textContent = span.textContent.toLowerCase()
  //                     }
  //                 })
  //             }
  //         })
  // }

  // Method to handle Keyboard layout change

  // changeLanguageHandler(...combination) {
  //       let pressedKeys = new Set();
  //       let chars = document.querySelectorAll('.character');
  //       let nums = document.querySelectorAll('.number');

  //       document.addEventListener('keydown', (e) => {
  //           pressedKeys.add(e.code);

  //           for (let code of combination) {
  //               if(!pressedKeys.has(code)) {
  //                   return
  //               }
  //           }

  //           pressedKeys.clear();
  //           chars.forEach(char => {
  //               Array.from(char.children).forEach(child => {
  //                   child.classList.toggle('hidden')
  //               })
  //           })
  //           nums.forEach(num => {
  //               Array.from(num.children).forEach(child => {
  //                   child.classList.toggle('hidden')
  //               })
  //           })
  //       })

  //       document.addEventListener('keyup', (e) => {
  //           pressedKeys.delete(e.code)
  //       })
  //   }

  // Method handles clicks to Keboard keys

//   handleClicksToKeyboard() {

//     this.keyboard.addEventListener('mousedown', (e) => {
//         if( !e.target.parentElement.classList.contains('CapsLock')) {
//             e.target.parentElement.classList.add('active')
//         }
//     })

//     this.keyboard.addEventListener('mouseup', (e) => {
//         if( !e.target.parentElement.classList.contains('CapsLock')) {
//             e.target.parentElement.classList.remove('active')
//         }
//     })
//     this.keyboard.addEventListener('click', (e) => {
//         if( !e.target.parentElement.classList.contains('CapsLock')) {
//             e.target.parentElement.classList.add('active')
//             setTimeout(() => {
//                 e.target.parentElement.classList.remove('active')
//             }, 100)
//         }
//     })
// }

}

new Keyboard(body, data, props);
