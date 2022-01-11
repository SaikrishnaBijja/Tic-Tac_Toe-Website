const positions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let score = 1;
clicks = 0;

function checkFilled() {
  positions.forEach(function (items) {
    if (items === 0) {
      return false;
    }
  });
}

function refresh() {
  for (var i = 0; i <= 8; i++) {
    $(".main-buttons")[i].innerHTML = "";
    positions[i] = 0;
  }
  $(".result").html("");
}

function checkResult() {
  if (checkFilled !== false) {
    if (checkWin(2)) {
      $(".result").html("Computer Won").css("color", "#F05454");
    } else if (checkWin(1)) {
      $(".result").html("You Won").css("color", "#95CD41");
      $(".score").html("Score: " + String(score - 1));
      score = score + 1;
    }
  }
}
function insert() {
  if (clicks === 8) {
    $(".result").html("Draw").css("color", "#D9D7F1");
  } else {
    var checkPosition = Number(this.id) - 1;
    if (positions[checkPosition] === 0) {
      checkResult();
      $("#" + this.id).html('<img class="x-image" src="images/close.png" alt="" />');
      positions[checkPosition] = 1;
      checkResult();
      computerPlay();
    }
    checkResult();
    click++
  }
}

function checkWin(player) {
  if (positions[0] == player && positions[1] == player && positions[2] == player) {
    return true;
  } else if (positions[3] == player && positions[4] == player && positions[5] == player) {
    return true;
  } else if (positions[6] == player && positions[7] == player && positions[8] == player) {
    return true;
  } else if (positions[0] == player && positions[3] == player && positions[6] == player) {
    return true;
  } else if (positions[1] == player && positions[4] == player && positions[7] == player) {
    return true;
  } else if (positions[2] == player && positions[5] == player && positions[8] == player) {
    return true;
  } else if (positions[2] == player && positions[5] == player && positions[8] == player) {
    return true;
  } else if (positions[2] == player && positions[4] == player && positions[6] == player) {
    return true;
  } else if (positions[0] == player && positions[4] == player && positions[8] == player) {
    return true;
  } else {
    return false;
  }
}

function computerPlay() {
  const computerNum = Math.floor(Math.random() * 9);
  if (positions[computerNum] === 0) {
    num = computerNum + 1;
    $("#" + num).html('<img class="x-image" src="images/circumference.png"/>');
    positions[computerNum] = 2;
  } else {
    computerPlay();
  }
}

$(".refresh").click(refresh);

$(".main-buttons").click(insert);
