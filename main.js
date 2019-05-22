//VARIABLES
const button = document.querySelector('.button');
const table = [1, 2, -1, 2, 3,1,1,1,1,];
let i = 0;
let count = 0;

//CLASS
class Test {
  constructor(table) {
    this.body = document.querySelector('.list');
    this.cursor = document.querySelector('.cursor');
    this.jumpDom = document.querySelector('.jump')
    this.errorDom = document.querySelector('.error')
    this.elementsIds = {
      table: [...table],
      domEls: []
    };
  }

  // Add Dom elements
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


  setJumpDom(count){
    this.jumpDom.innerHTML = count

  }

  // Method to loop in tab
  setJump(tab = this.elementsIds.table, tabDom = this.elementsIds.domEls) {
    const len = tab.length;

    try {
      if (i < len && i >= 0) {
        if (tab[i] < 0) {
          if (tab[i + tab[i]] === Math.abs(tab[i])) {
            throw 'stoped because infinit loop';
          } else {
            //console.log(` i = ${i}, val = ${tab[i]}`)
            count -= tab[i];
            i += tab[i];

            this.moveCursor(tabDom[i]);
          }
        } else {
          count += tab[i];
          i += tab[i];

          this.moveCursor(tabDom[i]);
        }
      } else {
        throw 'i is negatif';
      }
    } catch (err) {
      this.errorDom.innerHTML = err
    } finally {
      this.setJumpDom(count)
    }
  }
} //End class

var test = new Test(table);
test.addDomEl();

button.addEventListener('click', () => {
  test.setJump();
});
