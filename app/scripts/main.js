window.addEventListener("load", start);

function start() {
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

  var rgb =
    "rgb" +
    "(" +
    rangeReadRed.value +
    "," +
    rangeReadGreen.value +
    "," +
    rangeReadBlue.value +
    ")";
  console.log(rgb);

  var squareBackcolor = document.querySelector("#divsquare");
  squareBackcolor.style.background = rgb;

  rangeRed.addEventListener("input", changeRange);
  rangeGreen.addEventListener("input", changeRange);
  rangeBlue.addEventListener("input", changeRange);

  function changeRange() {
    rangeReadRed.value = rangeRed.value;
    rangeReadGreen.value = rangeGreen.value;
    rangeReadBlue.value = rangeBlue.value;
    var rgb =
      "rgb" +
      "(" +
      rangeReadRed.value +
      "," +
      rangeReadGreen.value +
      "," +
      rangeReadBlue.value +
      ")";
    squareBackcolor.style.background = rgb;
  }
}
