//VARIABLES
const button = document.querySelector('.button');
const table = [1, 2, 3, -1, 3, 1, 1, -10, 1, 1, 1, 3, 1, 2, 1, 1, -2, 1];
let i = 0;
let count = 0;
const len = table.length;

//CLASS
class Jump {
  constructor(table) {
    this.body = document.querySelector('.list');
    this.cursor = document.querySelector('.cursor');
    this.jumpDom = document.querySelector('.jump');
    this.errorDom = document.querySelector('.error');
    this.elementsIds = {
      table: [...table],
      domEls: []
    };
    this.elsViewed = [];
    this.addDomEl();
  }

  addDomEl(tab = this.elementsIds.table) {
    let el;

    tab.forEach(val => {
      el = document.createElement('li');
      el.className = 'el';
      el.innerHTML = val;
      this.body.appendChild(el);

      this.elementsIds.domEls.push(el);
    });
  }

  moveCursor(currentEl) {
    const pos = currentEl.offsetLeft - this.cursor.offsetLeft;
    this.cursor.style.transform = `translateX(${pos}px)`;
  }

  setJumpDom(count) {
    this.jumpDom.innerHTML = count;
  }

  setError(index) {
    return index < len && index >= 0 ? true : false;
  }

  getViewedIndex(index) {
    return this.elsViewed.indexOf(index) == -1 ? true : false;
  }

  setViewedColor(el) {
    el.style.backgroundColor = "#84CCFC"
    el.style.color = "white"
  }

  setJump(tab = this.elementsIds.table, tabDom = this.elementsIds.domEls) {
    try {
      // if (i < len && i >= 0) {

      if (this.getViewedIndex(i + tab[i])) {
        this.elsViewed.push(i);
        this.setViewedColor(tabDom[i])
        count = count + Math.abs(tab[i]);
        
        i = i + tab[i];
        console.log(i);
        if (this.setError(i)) {
          this.moveCursor(tabDom[i]);
          
        } else {
          this.errorDom.innerHTML = 'i is out of array';
        }
      } else {
        this.errorDom.innerHTML = 'Stoped because infinit loop. ☹️ ♾ ⛔️';
      }
      // }
    } catch (err) {
      console.log(err);
    } finally {
      this.setJumpDom(count);
    }
  }
} //End class

// Instance
var jump = new Jump(table);

// Add btn event
button.addEventListener('click', () => {
  jump.setJump();
});

console.log(jump.setError(-3));
