function Board(totalArray) {
  this.totalArray = totalArray;
}

Board.prototype.winner= function() {
console.log("inside the function");
    if (this.totalArray[0]===this.totalArray[1] && this.totalArray[1]===this.totalArray[2]) {
    return alert("Winner!");
  } else if (this.totalArray[6] === this.totalArray[4] && this.totalArray[4]=== this.totalArray[2]) {
    return alert("Winner!");
  } else if (this.totalArray[3] === this.totalArray[4] && this.totalArray[4]=== this.totalArray[5]){
    return alert("Winner!");
  } else if (this.totalArray[6] === this.totalArray[7] && this.totalArray[7]=== this.totalArray[8]){
    return alert("Winner!");
  } else if (this.totalArray[0] === this.totalArray[3] && this.totalArray[3]=== this.totalArray[6]){
    return alert("Winner!");
  } else if (this.totalArray[1] === this.totalArray[4] && this.totalArray[4]=== this.totalArray[7]){
    return alert("Winner!");
  } else if (this.totalArray[2] === this.totalArray[5] && this.totalArray[5]=== this.totalArray[8]){
    return alert("Winner!");
  } else if (this.totalArray[0] === this.totalArray[4] && this.totalArray[4]=== this.totalArray[8]){
    return alert("Winner!");
  }

}

// user logic

$(document).ready(function() {
  $("form.game").submit(function(event){
    event.preventDefault();

    var inputNW = $("input#NW").val();
    var inputN = $("input#N").val();
    var inputNE = $("input#NE").val();
    var inputW = $('input#W').val();
    var inputCenter = $('input#Center').val();
    var inputE = $('input#E').val();
    var inputSW = $('input#SW').val();
    var inputS = $('input#S').val();
    var inputSE = $('input#SE').val();
    var boardArray = [inputNW,inputN,inputNE,inputW,inputCenter,inputE,inputSW,inputS,inputSE];
    var newBoard =  new Board(boardArray);

//     if (newBoard.boardArray[0] === newBoard.boardArray[1] === newboard.boardArray[2]) {
//       alert("winner");
// }
    console.log(newBoard.winner());
  });
});


// var testPlayer = new Player("X");
//
// testPlayer.mark(); // returns "X"
//
//
// var board = new Board();
//
// var testSpace = board.find(1, 2); // board.find(1,2) returns a Space object
//
// testSpace.x-coordinate(); // returns 1
// testSpace.y-coordinate(); // returns 2
//
// testSpace.mark(testPlayer);
// testSpace.markedBy(); // returns testPlayer or "X"
//
// board.gameOver(); // returns a boolean


//
// $(document).ready(function() {
// $("form.game").keydown(function(event) {
//   event.preventDefault();
//   var inputNW =$("input#NW").val();
//   var key = event.keyCode;
//   if (key === 13) {
//     if (inputNW === ""){
//       alert("Please Enter X or O")
//     } else {
//       $("form.game").submit();
//     }
//     return false;
//   }
// console.log(inputNW);
//   });
// });
// $('form#NW').keypress(function(event) {
//   event.preventDefault();
//       if (event.keyCode == 13) {
//           alert('Entered');
//       }
//
// });
// $('form#NW').on('keypress', function (event) {
//   event.preventDefault();
//        if(event.which === 13){
//           //Disable textbox to prevent multiple submit
//           $(this).attr("disabled", "disabled");
//           var inputNW= $("input#NW").val();
//           //Do Stuff, submit, etc..
//        } else {
//          return false
//        }
//        console.log(inputNW);
// });
