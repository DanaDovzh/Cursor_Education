
var tabs = document.getElementsByClassName("tab-sml");
var currentActive;
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
    currentActive = document.getElementsByClassName("active");
    currentActive[0].classList.remove("active");
    this.classList.add("active");
  });
}