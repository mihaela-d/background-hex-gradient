var css = document.querySelector("h3");
var button = document.querySelector("button");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function defaultColor(){
	css.textContent = color1.value + " and " + color2.value;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + " , " + color2.value +")";
	css.textContent = color1.value + " and " + color2.value;
}

function randomize() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}


body.addEventListener("onload", defaultColor());
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener('click', function(){
	randomize();
});