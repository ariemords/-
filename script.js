function showLogin() {
  document.getElementById("home").style.display = "none";
  document.getElementById("login").style.display = "block";
}

function enterSite() {
  document.getElementById("login").style.display = "none";
  document.getElementById("main").style.display = "block";
}
function showBorrow() {
  document.getElementById("main").style.display = "none";
  document.getElementById("borrowScreen").style.display = "block";
}

function showDonate() {
  document.getElementById("main").style.display = "none";
  document.getElementById("donateScreen").style.display = "block";
}

function backToMain() {
  document.getElementById("borrowScreen").style.display = "none";
  document.getElementById("donateScreen").style.display = "none";
  document.getElementById("main").style.display = "block";
}
