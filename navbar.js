let y = document.getElementById("toggle");

function toggle() {
  y.style.display = "flex";
  document.getElementById("btn").style.display = "none";
  document.getElementById("cancel").style.display = "flex";
}

function X() {
  y.style.display = "none";
  document.getElementById("btn").style.display = "flex";
  document.getElementById("cancel").style.display = "none";
}
document.getElementById("btn").addEventListener("click", toggle);
document.getElementById("cancel").addEventListener("click", X);
