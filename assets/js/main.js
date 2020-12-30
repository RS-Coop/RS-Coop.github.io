//Main javascript file
var currentGrid = "default"

function toggleCards(id){
  if (id != currentGrid){
    document.getElementById(currentGrid+"-tab").classList.add("closed");
    document.getElementById(id+"-tab").classList.remove("closed");

    document.getElementById(currentGrid+"-grid").style.display = "none";
    document.getElementById(id+"-grid").style.display = "grid";

    currentGrid = id;
  }
} 
