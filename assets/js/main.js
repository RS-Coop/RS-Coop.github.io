//Main javascript file
var currentGrid = "default"

function toggleCards(id) {
  if (id != currentGrid) {
    document.getElementById(currentGrid).classList.remove("current-project");
    document.getElementById(id).classList.add("current-project");

    document.getElementById(currentGrid+"-grid").style.display = "none";
    document.getElementById(id+"-grid").style.display = "grid";

    title = id
    if (id == "default") {
      title = "New and Noteworthy";
    }
    document.getElementById("gallery-title").innerHTML = title;

    currentGrid = id;
  }
}
