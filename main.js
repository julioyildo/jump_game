//CLASS
const $button = document.querySelector('.button');
const $reverseBtn = document.querySelector('.reverse');

let i = 0;
let count = 0;
let len;
let bool = false;
class Jump {
  constructor() {
    this.$elements = {
      body: document.querySelector('.list')
    };
    this.$body = document.querySelector('.list');
    this.$cursor = document.querySelector('.cursor');
    this.$jumpDom = document.querySelector('.jump');
    this.$errorDom = document.querySelector('.error');
    this.elementsIds = {
      table: [],
      domEls: []
    };
    this.elsViewed = [];
    this.getRandomTable(-2, 4);
    this.addDomEl();
    this.initEvents();
  }

  initEvents() {
    $button.addEventListener('click', () => {
      this.setJump();
    });

    $reverseBtn.addEventListener('click', () => {
      this.setReverse(bool);
    });
  }

  /*
    @params : tab {Array}
    Move the dom Cursor
  */
  addDomEl(tab = this.elementsIds.table) {
    let $el;

    tab.forEach(val => {
      $el = document.createElement('li');
      $el.className = 'el center-column';
      $el.innerHTML = val;
      this.$body.appendChild($el);

      this.elementsIds.domEls.push($el);
    });
  }

  /*
    @params : currentEl {DOM}
    Move the dom Cursor
  */
  moveCursor($currentEl) {
    const pos = $currentEl.offsetLeft - this.$cursor.offsetLeft;
    this.$cursor.style.transform = `translateX(${pos}px)`;
  }
  /*
    @params : count {Number}
    Display the count number
  */
  setJumpDom(count) {
    this.$jumpDom.innerHTML = count;
  }

  /*
    @params: index {Number}
    @return : {Boolean}
    Check current index is in the array
  */
  setError(index) {
    return index < len && index >= 0 ? true : false;
  }

  /*
    @params: index {Number}
    @return : {Boolean}
    Check if current index has been viewed
  */
  getViewedIndex(index) {
    return this.elsViewed.indexOf(index) == -1 ? true : false;
  }

  /*
    @params: el {DOM}
    Set wiewed DOM elements bkg color
  */
  setViewedColor($el) {
    $el.style.backgroundColor = '#84CCFC';
    $el.style.color = 'white';
  }

  /*
    @params: min, max {Number}
    Get table with random values
  */
  getRandomTable(min, max) {
    let index;
    for (index = 0; index <= 10; index++) {
      this.elementsIds.table.push(this.getRandomNumber(min, max));
    }
    len = this.elementsIds.table.length;
  }

   /*
    @params: min, max {Number}
    @return: num {number}
    Get Random number
  */
  getRandomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num === 0 ? this.getRandomNumber(min, max) : num;
  }

  /*
    Change the direction of jump
  */
  setReverse() {
    i = !bool ? len - 1 : 0;
    bool = !bool ? true : false;
    count = 0;
    this.moveCursor(this.elementsIds.domEls[i]);
    // console.log(bool);
    // console.log(i);
  }

   /*
    @params: tab, tabDom (tables)
    Function that makes jump
  */
  setJump(tab = this.elementsIds.table, tabDom = this.elementsIds.domEls) {
    try {
      if (this.getViewedIndex(i + tab[i])) {
        this.elsViewed.push(i);
        this.setViewedColor(tabDom[i]);
        count = count + Math.abs(tab[i]);

        i = i + tab[i];
        console.log(i);
        if (this.setError(i)) {
          this.moveCursor(tabDom[i]);
        } else {
          this.$errorDom.innerHTML = 'i is out of array';
        }
      } else {
        this.$errorDom.innerHTML = 'Stoped because infinit loop. ☹️ ♾ ⛔️';
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.setJumpDom(count);
    }
  }
} //End class

window.addEventListener('DOMContentLoaded', () => {
  var jump = new Jump();
  console.log(jump.setError(-3));
});
