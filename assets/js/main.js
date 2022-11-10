//Main javascript file
var currentSelection = "default"

function showProjects(){
  document.getElementById("project-options").classList.toggle("show");
}

function toggleProjects(selection){
  if (selection != currentSelection){
    console.log(selection)
    document.getElementById("project-button").innerHTML = document.getElementById(selection).innerHTML

    document.getElementById(selection).classList.toggle("hidden");
    document.getElementById(currentSelection).classList.toggle("hidden");

    currentSelection = selection;
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.tab-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
