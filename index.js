let boxs = document.querySelectorAll(".box");
let winner = document.querySelector('.winner');


let click = 0;

function clickOn(e) {

  console.log(click)


  if(!this.innerHTML) {
    click += 1;
    if(click % 2 == 0 ) {
      this.innerHTML = "o"
    } else {
      this.innerHTML = "x"
    }

  }


}


function addMove(e) {
  let id = this.id;
  let xo = this.innerHTML;

console.log(this.innerHTML);
  for (let prop in mapBoard) {
    if(id === prop && mapBoard[prop] !== id) {

      mapBoard[prop] = xo;
    }

  }
  console.log(mapBoard)
}


let mapBoard =
  {
   "o0":null, "o1":null, "o2":null,
   "l0":null, "l1":null, "l2":null,
   "t0":null, "t1":null, "t2":null
  }


  //really need to re factor this!!!!


  function checkBoard() {
    console.log(click);
    if(mapBoard.o1 === 'x' && mapBoard.l1 === 'x' && mapBoard.t1 === 'x') {
      winner.classList.remove('hidden')
      winner.innerHTML = mapBoard.o1 + ' ' +  "Wins!"
    } else if(mapBoard.o2 === 'x' && mapBoard.l2 === 'x' && mapBoard.t2 === 'x') {
          winner.classList.remove('hidden');
          winner.innerHTML = mapBoard.o2 + ' ' +  "Wins!"
    } else if(mapBoard.o0 === 'x' && mapBoard.l0 === 'x' && mapBoard.t0 === 'x'){
        winner.classList.remove('hidden');
        winner.innerHTML = mapBoard.o0 + ' ' +  "Wins!"
    } else  if(mapBoard.o1 === 'o' && mapBoard.l1 === 'o' && mapBoard.t1 === 'o') {
        winner.classList.remove('hidden');
        winner.innerHTML = mapBoard.o1 + ' ' +  "Wins!"
    } else if(mapBoard.o2 === 'o' && mapBoard.l2 === 'o' && mapBoard.t2 === 'o') {
        winner.classList.remove('hidden');
        winner.innerHTML = mapBoard.o2 + ' ' +  "Wins!"
    } else if(mapBoard.o0 === 'o' && mapBoard.l0 === 'o' && mapBoard.t0 === 'o'){
        winner.classList.remove('hidden');
        winner.innerHTML = mapBoard.o0 + ' ' +  "Wins!"
    } else  if(mapBoard.o0 === 'o' && mapBoard.o1 === 'o' && mapBoard.o2 === 'o') {
        winner.classList.remove('hidden');
        winner.innerHTML = mapBoard.o0 + ' ' +  "Wins!"
    } else if(mapBoard.l0 === 'o' && mapBoard.l1 === 'o' && mapBoard.l2 === 'o') {
        winner.classList.remove('hidden');
        winner.innerHTML = mapBoard.l0 + ' ' +  "Wins!"
    } else if(mapBoard.t0 === 'o' && mapBoard.t1 === 'o' && mapBoard.t2 === 'o'){
        winner.classList.remove('hidden');
        winner.innerHTML = mapBoard.t0 + ' ' +  "Wins!"
    } else  if(mapBoard.o0 === 'x' && mapBoard.o1 === 'x' && mapBoard.o2 === 'x') {
      winner.classList.remove('hidden')
      winner.innerHTML = mapBoard.o0 + ' ' +  "Wins!"
    } else if(mapBoard.l0 === 'x' && mapBoard.l1 === 'x' && mapBoard.l2 === 'x') {
        winner.classList.remove('hidden');
        winner.innerHTML = mapBoard.l0 + ' ' +  "Wins!"
    } else if(mapBoard.t0 === 'x' && mapBoard.t1 === 'x' && mapBoard.t2 === 'x'){
        winner.classList.remove('hidden');
        winner.innerHTML = mapBoard.t0 + ' ' +  "Wins!"
    } else  if(mapBoard.o0 === 'o' && mapBoard.l1 === 'o' && mapBoard.t2 === 'o') {
        winner.classList.remove('hidden');
        winner.innerHTML = mapBoard.o0 + ' ' +  "Wins!"
    } else if(mapBoard.t0 === 'o' && mapBoard.l1 === 'o' && mapBoard.o2 === 'o') {
        winner.classList.remove('hidden');
        winner.innerHTML = mapBoard.t0 + ' ' +  "Wins!"
    } else  if(mapBoard.o0 === 'x' && mapBoard.l1 === 'x' && mapBoard.t2 === 'x') {
        winner.classList.remove('hidden');
        winner.innerHTML = mapBoard.o0 + ' ' +  "Wins!"
    } else if(mapBoard.t0 === 'x' && mapBoard.l1 === 'x' && mapBoard.o2 === 'x') {
        winner.classList.remove('hidden');
        winner.innerHTML = mapBoard.t0 + ' ' +  "Wins!"
    } else if (click == 9 ){
      winner.classList.remove('hidden');
      winner.innerHTML = "Draw!"
    }

  }




boxs.forEach(function(a) {

    a.addEventListener('click', clickOn);
    a.addEventListener('click', addMove);
    a.addEventListener('click', checkBoard);




});