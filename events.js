var output = document.getElementById("output-target");
var sections = document.getElementsByClassName("article-section");
var myHeader = document.getElementById("page-title");
var textInput = document.getElementById("keypress-input");
var addColor = document.getElementById("add-color");
var guineaPig = document.getElementById("guinea-pig");
var makeBig = document.getElementById("make-large");
var addBorder = document.getElementById("add-border");
var makeRound = document.getElementById("add-rounding");

for (var i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", ((event) => 
	output.innerHTML =  "You clicked the "+ event.target.innerHTML + " Section!"
		)
	)
};

myHeader.addEventListener("mouseover" , ((event)=>output.innerHTML = "You moved your mouse over the header."));
myHeader.addEventListener("mouseout" , ((event)=> output.innerHTML = "You left me!"));
textInput.addEventListener("keyup" , ((event)=> output.innerHTML = textInput.value));
addColor.addEventListener("click", ((event)=> guineaPig.style.color="blue"));
makeBig.addEventListener("click", ((event)=> guineaPig.style.fontSize="2em"));
addBorder.addEventListener("click", ((event)=> guineaPig.style.border="solid 1px"));
makeRound.addEventListener("click", ((event)=> guineaPig.style.borderRadius="5px"));
document.getElementsByClassName("article-section")[0].style.fontWeight = "700";
document.getElementsByClassName("article-section")[4].style.fontWeight="700";
document.getElementsByClassName("article-section")[4].style.fontStyle="italic";
document.getElementsByClassName('btn')[0].style.display="block";
document.getElementsByClassName('btn')[1].style.display="block";
document.getElementsByClassName('btn')[2].style.display="block";
document.getElementsByClassName('btn')[3].style.display="block";

