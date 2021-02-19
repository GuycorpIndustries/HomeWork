let selectedBtn = false;

// Grabs the Button that was "clicked" within the Element that has the "ID" of btn
document.querySelector("#btn").addEventListener("click", (e) => {
  console.log(e.target);
  // Add an active Class to the Button Clicked
  if (!selectedBtn && e.target.classList.contains("btn")) {
    e.target.classList.add("active");
    selectedBtn = true;
  } else {
    e.target.classList.remove("active");
    selectedBtn = false;
  }
});

// buttonClicked();
const btns = document.querySelector(".btn");

function menuClick() {
  document.getElementById("menu3-btn").classList.toggle("menuClicked");
  document.getElementById("header3").classList.toggle("menuClicked");
}

const menuBtn = document.querySelector(".navBar2-menu");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("openNav");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("openNav");
    menuOpen = false;
  }
});