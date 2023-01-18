function hamburgermenuknopje() {
  var x = document.getElementById('main_menu_01');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}