//VARIABLES
const button = document.querySelector('.button');
const table = [1, 1, -1];
let i = 0;
let count = 0;

//CLASS
class Test{
 
  constructor(table) {
    this.body = document.querySelector('.list');
    this.cursor = document.querySelector('.cursor');
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
    console.dir(this.cursor.style.transform);
  }


  // Method to loop in tab
  setJump(tab = this.elementsIds.table, tabDom=this.elementsIds.domEls ) {
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

            this.moveCursor(tabDom[i])
            //console.log(`count: ${count}`)
          }
        } else {
          //console.log(` i = ${i}, val = ${tab[i]}`)
          count += tab[i];
          i += tab[i];

          this.moveCursor(tabDom[i])
          //console.log(`count: ${count}`)
        }
      } else {
        throw 'i is negatif';
        //break
      }
    } catch (err) {
      console.log(err);
    } 
    // finally {
    //   return 'number of jumps counted  = ' + count;
    // }
  }
} //End class

var test = new Test(table);
test.addDomEl();

button.addEventListener('click', () => {
  test.setJump();
});
