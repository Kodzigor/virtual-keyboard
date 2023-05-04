'use strict';

import data from './data.js';

const body = document.body;
const props = {
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
    this.handleCapsLock();
    this.handleShiftKey();
    this.swithcKeyboardLanguage('ControlLeft', 'AltLeft');
    this.handleKeyboardKeysClick();
    this.showContent();
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
        // console.log(key);

        row.append(key)
      })

      parentElement.append(row)
    });
  }

  // Method handles Caps Lock key
  handleCapsLock() {
    this.capsLock = document.querySelector('.CapsLock');
    this.keys = document.querySelectorAll('.char');

      this.capsLock.addEventListener('click', () => {
        if(!this.props.caps) {
          this.keys.forEach(key => {
          Array.from(key.children).forEach(el => {

          el.classList.add('hidden');
            if(el.classList.contains('case-caps')) {
              el.classList.remove('hidden');
              this.props.caps = true;
              this.capsLock.classList.add('active');
              }
            })
          })
        } else {
          this.keys.forEach(key => {
          Array.from(key.children).forEach(el => {

          el.classList.add('hidden');
            if(el.classList.contains('case-down')) {
              el.classList.remove('hidden');
              this.props.caps = false;
              this.capsLock.classList.remove('active');
              }
            })
          })

        }
    })

    document.addEventListener('keydown', (e) => {
      if(e.code === 'CapsLock') {
        if(!this.props.caps) {
          this.keys.forEach(key => {
          Array.from(key.children).forEach(el => {
            el.classList.add('hidden');
              if(el.classList.contains('case-caps')) {
                el.classList.remove('hidden');
                this.props.caps = true;
                this.capsLock.classList.add('active');
                }
            })
          })
        } else {
          this.keys.forEach(key => {
          Array.from(key.children).forEach(el => {
            el.classList.add('hidden');
              if(el.classList.contains('case-down')) {
                el.classList.remove('hidden');
                this.props.caps = false;
                this.capsLock.classList.remove('active');

                }
            })
          })
        }
      }
    })
  }

  // Method handles with Shift keys
  handleShiftKey() {
    this.shiftKeys = document.querySelectorAll('.ShiftLeft, .ShiftRight');

    this.shiftKeys.forEach(shift => {
      shift.addEventListener('mousedown', () => {
        if(!this.props.caps) {
          this.keys.forEach(key => {
          Array.from(key.children).forEach(el => {
            el.classList.add('hidden');
              if(el.classList.contains('case-up')) {
                el.classList.remove('hidden');
                shift.classList.add('active');
                }
            })
          })
        } else if(this.props.caps) {
          this.keys.forEach(key => {
          Array.from(key.children).forEach(el => {
            el.classList.add('hidden');
              if(el.classList.contains('case-capsShift')) {
                el.classList.remove('hidden');
                shift.classList.add('active');
                }
            })
          })
        }
      })

      shift.addEventListener('mouseup', () => {
        if(!this.props.caps) {
          this.keys.forEach(key => {
          Array.from(key.children).forEach(el => {
            el.classList.add('hidden');
              if(el.classList.contains('case-down')) {
                el.classList.remove('hidden');
                shift.classList.remove('active');
                }
            })
          })
        } else if(this.props.caps) {
          this.keys.forEach(key => {
          Array.from(key.children).forEach(el => {
            el.classList.add('hidden');
              if(el.classList.contains('case-caps')) {
                el.classList.remove('hidden');
                shift.classList.remove('active');
                }
            })
          })
        }
      })
    })

    document.addEventListener('keydown', (e) => {
      this.shiftKeys.forEach(shift => {
        if(shift.classList.contains(e.code)) {
          if(!this.props.caps) {
            this.keys.forEach(key => {
            Array.from(key.children).forEach(el => {
              el.classList.add('hidden');
              if(el.classList.contains('case-up')) {
                el.classList.remove('hidden');
                shift.classList.add('active');
                }
              })
            })
          } else if(this.props.caps) {
          this.keys.forEach(key => {
          Array.from(key.children).forEach(el => {
            el.classList.add('hidden');
              if(el.classList.contains('case-capsShift')) {
                el.classList.remove('hidden');
                shift.classList.add('active');
                }
              })
            })
          }
        }
      })
    })
    document.addEventListener('keyup', (e) => {
      this.shiftKeys.forEach(shift => {
        if(shift.classList.contains(e.code)) {
          if(!this.props.caps) {
          this.keys.forEach(key => {
          Array.from(key.children).forEach(el => {
            el.classList.add('hidden');
              if(el.classList.contains('case-down')) {
                el.classList.remove('hidden');
                shift.classList.remove('active');
              }
            })
          })
        } else if(this.props.caps) {
          this.keys.forEach(key => {
          Array.from(key.children).forEach(el => {
            el.classList.add('hidden');
              if(el.classList.contains('case-caps')) {
                el.classList.remove('hidden');
                shift.classList.remove('active');
                }
              })
            })
          }
        }
      })
    })
  }

  // Method to switch Keyboard languages
  swithcKeyboardLanguage(...combination) {
    let pressedKeys = new Set();

    document.addEventListener('keydown', (e) => {
      pressedKeys.add(e.code);

      for (let code of combination) {
        if(!pressedKeys.has(code)) {
          return
        }
      }
      pressedKeys.clear();
      this.props.langs.forEach(lang => {
        if(lang.isCurrent) {
          lang.isCurrent = false
        } else {
          lang.isCurrent = true
        }
      })
      this.keyboard.innerHTML = '';
      this.setKeyboardLang()
      this.createKeyboardKeys(this.data, this.keyboard, this.currentLang.lang);
      this.handleCapsLock();
      this.handleShiftKey();
      this.handleKeyboardKeysClick();
    })

    document.addEventListener('keyup', (e) => {
            pressedKeys.delete(e.code)
        })
  }

  // Method handles clicks to Keyboard

  handleKeyboardKeysClick() {
    this.keyboard.addEventListener('mousedown', (e) => {
      if(!e.target.parentElement.classList.contains('CapsLock')) {
         e.target.parentElement.classList.add('active')
      }
    })
    this.keyboard.addEventListener('mouseup', (e) => {
      if( !e.target.parentElement.classList.contains('CapsLock')) {
          e.target.parentElement.classList.remove('active')
      }
    })

    this.allKeys = document.querySelectorAll('.keyboard-key');

    document.addEventListener('keydown', (e) => {
      if(e.code !== 'CapsLock' && e.code !== 'ShiftLeft' && e.code !== 'ShiftRight') {
        Array.from(this.allKeys).find(el => {
        if(el.classList.contains(e.code) ) {
          el.classList.add('active')
        }
        })
      }
    })
    document.addEventListener('keyup', (e) => {
      if(e.code !== 'CapsLock' && e.code !== 'ShiftLeft' && e.code !== 'ShiftRight') {
        Array.from(this.allKeys).find(el => {
        if(el.classList.contains(e.code)) {
          el.classList.remove('active')
        }
      })
      }
    })
  }

  // Method to display content at the Keyboard Display
  showContent() {
    this.keyboard.addEventListener('click', (e) => {
      console.log(e.target.parentElement.innerText);
      if(e.target.nextElementSibling.classList.contains('char')) {
        this.display.textContent += e.target.parentElement.innerText;
      } else if(e.target.parentElement.classList.contains('Space')) {
        this.display.textContent += ' ';
      } else if(e.target.parentElement.classList.contains('Backspace')) {
        this.display.textContent = this.display.textContent.slice(0, this.display.textContent.length - 1);
      }
    })

    console.log(this.keys);

    document.addEventListener('keydown', (e) => {
      console.log(e.code);
      Array.from(this.keys).find(el => {
        if(el.parentElement.classList.contains(e.code)) {
          this.display.textContent += el.parentElement.innerText;
        }
      })


    })
  }
}

new Keyboard(body, data, props);
