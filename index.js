let boxs = document.querySelectorAll(".box");


let click = 0;

function clickOn(e) {


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


  function checkBoard() {
    console.log('check');

    if(mapBoard.o0 === mapBoard.l0 && mapBoard.l0 === mapBoard.t0 ) {
      console.log( mapBoard.o0, " wins")
    } else if(mapBoard.o1 === mapBoard.l1 && mapBoard.l1 === mapBoard.t1 ) {
      console.log( mapBoard.o1, " wins")
    } else if(mapBoard.o2 === mapBoard.l2 && mapBoard.l2 === mapBoard.t2 ) {
      console.log( mapBoard.o2, " wins")
    }


  }




boxs.forEach(function(a) {

    a.addEventListener('click', clickOn);
    a.addEventListener('click', addMove);
    if( click > 3 ) {
      a.addEventListener('click', checkBoard);
    }



});