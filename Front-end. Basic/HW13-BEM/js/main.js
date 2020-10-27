
// var tabs = document.getElementsByClassName("tab-sml");
var currentActive;
let header = document.getElementById("first");
var tabs = header.getElementsByClassName("tab-sml");

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
    currentActive = header.getElementsByClassName("active");
    currentActive[0].classList.remove("active");
    this.classList.add("active");
  });
}