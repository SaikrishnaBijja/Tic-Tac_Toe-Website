//  initial positions on game board
const positions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// to verify the game still on
var is_on = true;
// to keep track of score
var score = 0;
// these image were inserted when player clicks a position on board
const xImage = '<img class="image" src="images/close.png"/>';
const circleImage = '<img class="image" src="images/circumference.png"/>';

// to check the all position filled or not
// return true if all positions filled
function checkFilled() {
  // checks  a given value present in an array
  // if it presents returns true
  return positions.includes(0);
}
// this function called when player presses refresh button
// it sets all game to initial state
function refresh() {
  for (var i = 0; i <= 8; i++) {
    $(".play-button")[i].innerHTML = "";
    positions[i] = 0;
  }
  $(".result").html("");
  is_on = true;
  
}
// this function checks for win or lose or draw
function checkResult() {
  // if not all positions were filled on game board then its continues
  if (checkFilled() === true) {
    // checking for  computer won the game
    // by calling checkWin function
    if (checkWin(2)) {
      // if computer won then updating the prompting the results
      $(".result").html("Computer Won").css("color", "#F05454");
      // it stops making more moves after game is won
      is_on = false;
    }
    // checking for  computer won the game
    else if (checkWin(1)) {
      score = score + 1;
      $(".result").html("You Won").css("color", "#95CD41");
      $(".score").html("Score: " + String(Math.floor(score/2)));
      is_on = false;
    }
  } else {
    // if neither of them won and all positions all filled
    // then it is a draw
    $(".result").html("Draw").css("color", "#95CD41");
  }
}
// this function inserts the image on position selected
// by player
function insert() {
  // checks for no one as won yet and for draw
  if (is_on === true) {
    // to stored the id of the position selected by player
    var checkPosition = Number(this.id) - 1;
    // checks for the selected position filled or not
    if (positions[checkPosition] === 0) {
      // checks for no one as won yet and for draw
      checkResult();
      // inserts the image on selected position
      $("#" + this.id).html(xImage);
      // updating that inserted position filled
      positions[checkPosition] = 1;
      // checks for no one as won yet and for draw
      checkResult();
      // calling the computerPlay
      // to select and place image on board
      computerPlay();
    }
    checkResult();
  }
}
// this function checks if any one player
// that placed three straight coins on board
function checkWin(player) {
  // it checks for horizontal lines
  for (var x = 0; x <= 9; x = x + 3) {
    if (positions[x] == player && positions[x + 1] == player && positions[x + 2] == player) {
      return true;
    }
  }
  // it checks for vertical lines
  for (var y = 0; y <= 2; y++) {
    if (positions[y] == player && positions[y + 3] == player && positions[y + 6] == player) {
      return true;
    }
  }
  // it checks for diagonal lines
  if (positions[2] == player && positions[4] == player && positions[6] == player) {
    return true;
  } else if (positions[0] == player && positions[4] == player && positions[8] == player) {
    return true;
  }
  // if none of these were then return false
  else {
    return false;
  }
}
// this function selects compute positions
function computerPlay() {
  // generating random number between 0 to 8
  const computerNum = Math.floor(Math.random() * 9);
  // checking for generated number is filled or not
  if (positions[computerNum] === 0) {
    // if not filled then inserts image in position on board
    $("#" + (computerNum + 1)).html(circleImage);
    // updating that inserted position filled
    positions[computerNum] = 2;
  } else {
    // if filled calling the same function
    // until correct position selected
    computerPlay();
  }
}

// listens for click on refresh buttons
// on click executes the refresh function
$(".refresh").click(refresh);

// listens for click on insert buttons
// on click executes the insert function
$(".play-button").click(insert);
