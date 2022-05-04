var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
});

modalX.addEventListener("click", function () {});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (modal.classList.contains("show-modal")) {
      //console.log("good bye!");
    }
  }
});

var closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
};

//Bonus

//var openModal = function () {
//modal.classList.add("show-modal");
//button.innerText = "You've got this!!!";
//};
