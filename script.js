const h2 = document.createElement("h2");
h2.textContent = "Feel free to take a look around.";
document.querySelector("body").appendChild(h2);

function changeColor() {
    document.getElementById("list").style.backgroundColor = "purple"
} 
function setOldBackground() {
    document.getElementById("list").style.backgroundColor = ""
}