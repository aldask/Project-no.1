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
    document.getElementById("magicBox").style.display = "block";; 
} 

