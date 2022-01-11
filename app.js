const positions = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function play() {
  const computerNum = Math.floor(Math.random() * 9);
  if (positions[computerNum] === 0) {
    num = computerNum + 1;
    $("#" + num).html('<img class="x-image" src="images/circumference.png"/>');
    positions[computerNum] = 1;
  } else {
    play();
  }
}

$(".refresh").click(function () {
  for (var i = 0; i <= 8; i++) {
    $(".main-buttons")[i].innerHTML = "";
    positions[i] = 0;
  }
});

$(".main-buttons").click(function () {
  var check_position = Number(this.id) - 1;
  if (positions[check_position] === 0) {
    $("#" + this.id).html('<img class="x-image" src="images/close.png" alt="" />');
    positions[check_position] = 1;
    play();
  }
});
