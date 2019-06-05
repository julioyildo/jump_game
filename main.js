let i = 0;
let count = 0;
let len;
let bool = false;
let jump = 0;

class Jump {
  constructor(table_length) {
    this.$elements = {
      body: document.querySelector('.list')
    };
    this.$body = document.querySelector('.list');
    this.$cursor = document.querySelector('.cursor');
    this.$countDom = document.querySelector('.count');
    this.$jumpDom = document.querySelector('.jump');
    this.$errorDom = document.querySelector('.error');
    this.$button = document.querySelector('.button');
    this.$reverseBtn = document.querySelector('.reverse');

    this.elementsIds = {
      table: [],
      domEls: []
    };
    this.table_length = table_length
    this.elsViewed = [];
    this.getRandomTable(-2, 4);
    this.addDomEl();
    this.initEvents();

  }

  /*
    @params: min, max {Number}
    Get table with random values
  */
  getRandomTable(min, max, tabLen = this.table_length) {
    let index;
    for (index = 0; index <= tabLen; index++) {
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
    @params : tab {Array}
    Move the dom Cursor
  */
  addDomEl(tab = this.elementsIds.table) {
    let el;

    tab.forEach(val => {
      el = document.createElement('li');
      el.className = 'el center-column';
      el.innerHTML = val;
      this.$body.appendChild(el);
      this.elementsIds.domEls.push(el);
    });
  }

  /*
    @params : (no)
    @return: (no)
    init buttons click event
  */
  initEvents() {
    this.$button.addEventListener('click', () => {
      this.setJump();
    });

    this.$reverseBtn.addEventListener('click', () => {
      this.setReverse(bool);
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
    Display the count number in the HTML
  */
  setJumpDom(count, jump) {
    this.$countDom.innerHTML = count;
    this.$jumpDom.innerHTML = jump;
  }

  /*
    @params: index {Number}
    @return : {Boolean}
    Check if current index is still in the array
  */
  setError(index) {
    return index < len && index >= 0 ? true : false;
  }

  /*
    @params: index {Number}
    @return : {Boolean}
    Check if the new current index has been viewed
  */
  getViewedIndex(index) {
    return this.elsViewed.indexOf(index) == -1 ? true : false;
  }

  /*
    @params: el {DOM}
    Set wiewed DOM elements background color
  */
  setViewedColor($el) {
    $el.style.backgroundColor = '#84CCFC';
    $el.style.color = 'white';
  }

  /*
    Change the direction of jump
  */
  setReverse() {
    i = !bool ? len - 1 : 0;
    bool = !bool ? true : false;
    this.count = 0;
    this.moveCursor(this.elementsIds.domEls[i]);
  }

  /*
    @params: tab, tabDom (tables)
    Main function that performs the jump
  */
  setJump(tab = this.elementsIds.table, tabDom = this.elementsIds.domEls) {
    try {
      if (this.getViewedIndex(i + tab[i])) {
        this.elsViewed.push(i);
        this.setViewedColor(tabDom[i]);
        jump++;
        count = count + Math.abs(tab[i]);
        i = i + tab[i];

        if (this.setError(i)) {
          this.moveCursor(tabDom[i]);
        } else {
          this.$errorDom.innerHTML = 'i is out of array 📤 ';
        }
      } else {
        this.$errorDom.innerHTML = 'Stoped because infinit loop. ☹️ ♾ ⛔️';
      }
    } catch (err) {
      console.log(err);

    } finally {
      this.setJumpDom(count, jump);
    }
  }
} //End class


window.addEventListener('DOMContentLoaded', () => {
  var jump = new Jump(10);
  // console.log(jump.setError(-3));
});
