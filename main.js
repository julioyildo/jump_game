class Test {

    constructor(table) {
      this.body = document.querySelector('.list');
      this.cursor = document.querySelector('.cursor');
      this.elementsIds = {
        table: [...table],
        domEls: []
      }
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
  
      })
    }
  
  
  
  
    moveCursor(currentEl) {
      const pos = currentEl.offsetLeft - this.cursor.offsetLeft
      this.cursor.style.transform = `translateX(${pos}px)`
      console.dir(this.cursor.style.transform)
    }
  
    onClick() {
      console.log('onClick')
    }
  
  
    // Method to loop in tab
    loop_table(tab = this.elementsIds.table) {
      let i = 0;
      const len = tab.length;
      let count = 0;
  
      try {
       
        while (i < tab.length) {
  
  
         
            if (i >= 0) {
              if (tab[i] < 0) {
                if (tab[i + tab[i]] === Math.abs(tab[i])) {
                  throw 'stoped because infinit loop';
                  //break
                } else {
                  //console.log(` i = ${i}, val = ${tab[i]}`)
                  count -= tab[i]
                  i += tab[i]
  
                  //console.log(`count: ${count}`)
                }
              } else {
                //console.log(` i = ${i}, val = ${tab[i]}`)
                count += tab[i];
                i += tab[i];
  
                this.moveCursor(this.elementsIds.domEls[i])
                //console.log(`count: ${count}`)
              }
            } else {
              throw 'i is negatif';
              //break
            }
         
        }
      
      } catch (err) {
        console.log(err)
      } finally {
        return 'number of jumps counted  = ' + count;
      }
  
    } // end loop_table()
  
  
  } //End class
  
  
  const table = [1, 1, 1];
  
  var test = new Test(table);
  test.addDomEl();
  test.loop_table();
  
  const button = document.querySelector('.test');
  
  console.log('button : ', button)
  
  button.addEventListener('click', () => {
      test.onClick()
  })
  