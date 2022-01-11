document.querySelector(".refresh").addEventListener("click", function () {
  for (var i = 0; i <= 8; i++) {
    document.querySelectorAll(".main-buttons")[i].innerHTML = "";
  }
});

// sleep(500).then(() => {
//   document.querySelector("#three").innerHTML =
//     '<img class="x-image" src="images/circumference.png" alt="" />';
// });

for (var i = 0; i <= 8; i++) {
  document
    .querySelectorAll(".main-buttons")
    [i].addEventListener("click", function () {
      const clike = this.id;
      //   alert(this.id)
      document.getElementById(this.id).innerHTML =
        '<img class="x-image" src="images/close.png" alt="" />';
    });
}

// document.querySelectorAll(".refresh")[0].addEventListener("click", function () {

//   //
//   alert("hello");
// });
