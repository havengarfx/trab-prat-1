console.log("trab-prat-1");

var rangeRed = document.querySelector("#rangeRed");
var rangeReadRed = document.querySelector("#rangeReadRed");
rangeReadRed.value = rangeRed.value;

var rangeGreen = document.querySelector("#rangeGreen");
var rangeReadGreen = document.querySelector("#rangeReadGreen");
rangeReadGreen.value = rangeGreen.value;

var rangeBlue = document.querySelector("#rangeBlue");
var rangeReadBlue = document.querySelector("#rangeReadBlue");
rangeReadBlue.value = rangeBlue.value;


var rgb = "rgb"+"("+rangeReadRed.value+","+rangeReadGreen.value+","+rangeReadBlue.value+")";
console.log(rgb);

var squareBackcolor = document.querySelector(".classe4");
squareBackcolor.style.background = rgb;
