// var testPlayer = new Player("X");
//
// testPlayer.mark(); // returns "X"
//
//
// var board = new Board();
// var testSpace = board.find(1, 2); // board.find(1,2) returns a Space object
//
// testSpace.x-coordinate(); // returns 1
// testSpace.y-coordinate(); // returns 2
//
// testSpace.mark(testPlayer);
// testSpace.markedBy(); // returns testPlayer or "X"
//
// board.gameOver(); // returns a boolean


// user logic

$(document).ready(function() {
  $("form.game").keydown(function(event) {
    event.preventDefault();
    var inputNW =$("input#NW").val();
    var key = e.keyCode;
    if (key === 13) {
      if (inputNW === ""){
        alert("Please Enter X or O")
      } else {
        $("form.game").submit();
      }
      return false;
    }
  console.log(inputNW);
  });

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
});
