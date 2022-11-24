// botão para adicionar a quantidade de produto

const myInput = document.getElementById("my-input");
function stepper(btn) {
  let id = btn.getAttribute("id");
  let min = myInput.getAttribute("min");
  let max = myInput.getAttribute("max");
  let step = myInput.getAttribute("step");
  let val = myInput.getAttribute("value");
  let calcStep = (id == "increment") ? (step * 1) : (step * -1);
  let newValue = parseInt(val) + calcStep;

  if (newValue >= min && newValue <= max) {
    myInput.setAttribute("value", newValue);
  }

}


// avaliação do produto - estrelas

function Avaliar(estrela) {
  var url = window.location;
  url = url.toString()
  url = url.split("info.html");
  url = url[0];

  var s1 = document.getElementById("s1").src;
  var s2 = document.getElementById("s2").src;
  var s3 = document.getElementById("s3").src;
  var s4 = document.getElementById("s4").src;
  var s5 = document.getElementById("s5").src;

// estrela 1
if (estrela == 1) {
  if (s1 == url + "wp-icones/star0.svg") {
  document.getElementById("s5").src = "wp-icones/star1.svg";
  document.getElementById("s4").src = "wp-icones/star1.svg";
  document.getElementById("s3").src = "wp-icones/star1.svg";
  document.getElementById("s2").src = "wp-icones/star1.svg";
  document.getElementById("s1").src = "wp-icones/star1.svg";
  } else {
  document.getElementById("s5").src = "wp-icones/star1.svg";
  document.getElementById("s4").src = "wp-icones/star1.svg";
  document.getElementById("s3").src = "wp-icones/star1.svg";
  document.getElementById("s2").src = "wp-icones/star1.svg";
  document.getElementById("s1").src = "wp-icones/star0.svg";
}}
  
// estrela 2
if (estrela == 2) {
  if (s2 == url + "wp-icones/star0.svg") {
  document.getElementById("s5").src = "wp-icones/star1.svg";
  document.getElementById("s4").src = "wp-icones/star1.svg";
  document.getElementById("s3").src = "wp-icones/star1.svg";
  document.getElementById("s2").src = "wp-icones/star1.svg";
  document.getElementById("s1").src = "wp-icones/star0.svg";
  } else {
  document.getElementById("s5").src = "wp-icones/star1.svg";
  document.getElementById("s4").src = "wp-icones/star1.svg";
  document.getElementById("s3").src = "wp-icones/star1.svg";
  document.getElementById("s2").src = "wp-icones/star0.svg";
  document.getElementById("s1").src = "wp-icones/star0.svg";
}}

// estrela 3
if (estrela == 3) {
  if (s3 == url + "wp-icones/star0.svg") {
  document.getElementById("s5").src = "wp-icones/star1.svg";
  document.getElementById("s4").src = "wp-icones/star1.svg";
  document.getElementById("s3").src = "wp-icones/star1.svg";
  document.getElementById("s2").src = "wp-icones/star0.svg";
  document.getElementById("s1").src = "wp-icones/star0.svg";
  } else {
  document.getElementById("s5").src = "wp-icones/star1.svg";
  document.getElementById("s4").src = "wp-icones/star1.svg";
  document.getElementById("s3").src = "wp-icones/star0.svg";
  document.getElementById("s2").src = "wp-icones/star0.svg";
  document.getElementById("s1").src = "wp-icones/star0.svg";
}}

// estrela 4
if (estrela == 4) {
  if (s4 == url + "wp-icones/star0.svg") {
  document.getElementById("s5").src = "wp-icones/star1.svg";
  document.getElementById("s4").src = "wp-icones/star1.svg";
  document.getElementById("s3").src = "wp-icones/star0.svg";
  document.getElementById("s2").src = "wp-icones/star0.svg";
  document.getElementById("s1").src = "wp-icones/star0.svg";
  } else {
  document.getElementById("s5").src = "wp-icones/star1.svg";
  document.getElementById("s4").src = "wp-icones/star0.svg";
  document.getElementById("s3").src = "wp-icones/star0.svg";
  document.getElementById("s2").src = "wp-icones/star0.svg";
  document.getElementById("s1").src = "wp-icones/star0.svg";
}}
  
// estrela 5
if (estrela == 5) {
  if (s5 == url + "wp-icones/star0.svg") {
  document.getElementById("s5").src = "wp-icones/star1.svg";
  document.getElementById("s4").src = "wp-icones/star0.svg";
  document.getElementById("s3").src = "wp-icones/star0.svg";
  document.getElementById("s2").src = "wp-icones/star0.svg";
  document.getElementById("s1").src = "wp-icones/star0.svg";
  } else {
  document.getElementById("s5").src = "wp-icones/star0.svg";
  document.getElementById("s4").src = "wp-icones/star0.svg";
  document.getElementById("s3").src = "wp-icones/star0.svg";
  document.getElementById("s2").src = "wp-icones/star0.svg";
  document.getElementById("s1").src = "wp-icones/star0.svg";
}}

}



