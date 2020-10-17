
var tabs = document.getElementsByClassName("tab-sml");
var currentActive;
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
    currentActive = document.getElementsByClassName("active");
    currentActive[0].className = currentActive[0].className.replace(" active", "");
    this.className += " active";
  });
}