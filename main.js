// tady je místo pro náš program

// document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 */
let a = 6
let b = 6



function secti() {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log('Gratulace, právě si spustila tuto funkci!');
  let ctverecek = document.querySelector('.ctverecek');
  ctverecek.style.width = '500px';
  ctverecek.innerHTML = 'Gratulace, právě si spustila tuto funkci!';

}


function changecolor() {
let ctverecek = document.querySelector('.ctverecek');
ctverecek.style.backgroundColor = '#228B22';
}



  function result(selector) {
    document.querySelector(selector).innerHTML = secti();
  }