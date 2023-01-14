//year script
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

//canvas script
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "blue";
context.fillRect(5, 16, 184, 59);

//function no. 1 (show text by a click)
function showText() { 
    document.getElementById("magicBox").style.display = "block"; 
}

//Function no. 2 (add new row to the list)
function addRow() {
    var tableRow = document.getElementById("table");
    var row = tableRow.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
     cell1.innerHTML = "New";
     cell2.innerHTML = "New";
    }
//Function no. 3 (random effects after refresh)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function paintText() {
    var text = document.getElementsByClassName("f3");
    for (var i = 0; i <text.length; i++){
        text[i].style.color = getRandomColor();
    }
  }