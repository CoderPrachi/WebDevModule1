let name = prompt("Enter your name ");

let wc = "Welcome "+name;
document.querySelector('#h1id').innerHTML=wc;

let blue = document.querySelector("#btnBlue");
let gray = document.querySelector("#btnGray");
let green = document.querySelector("#btnGreen");
let red = document.querySelector("#btnRed");
let yellow = document.querySelector("#btnYellow");
let sky = document.querySelector("#btnSky");
let white = document.querySelector("#btnWhite");
let dark = document.querySelector("#btnDark");
let contentText = document.querySelector(".content_text");




blue.addEventListener("click", bluecolor);
gray.addEventListener("click", graycolor);
green.addEventListener("click", greencolor);
red.addEventListener("click", redcolor);
yellow.addEventListener("click", yellowcolor);
sky.addEventListener("click", skycolor);
white.addEventListener("click", whitecolor);
dark.addEventListener("click", darkcolor);

function bluecolor(){
    contentText.style.backgroundColor = "blue";
    contentText.style.color = "black";
}

function graycolor(){
    contentText.style.backgroundColor = "gray";
    contentText.style.color = "blue";
}

function greencolor(){
    contentText.style.backgroundColor = "green";
    contentText.style.color = "red";
}

function redcolor(){
    contentText.style.backgroundColor = "red";
    contentText.style.color = "black";
}

function yellowcolor(){
    contentText.style.backgroundColor = "yellow";
    contentText.style.color = "black";
}

function skycolor(){
    contentText.style.backgroundColor = "skyblue";
    contentText.style.color = "black";
}

function whitecolor(){
    contentText.style.backgroundColor = "white";
    contentText.style.color = "red";
}

function darkcolor(){
    contentText.style.backgroundColor = "black";
    contentText.style.color = "white";
}

//6-9-20

let paragraph = document.getElementById("org_text");

let textArea = document.querySelector("#text_area");

textArea.addEventListener("change",changeText);

 function changeText(){
  let containt = textArea.value;
  paragraph.textContent = containt;
 }


 textArea.addEventListener("click",changeText2);

 function changeText2(){
  let containt = textArea.value;
  paragraph.textContent = containt;
 }

//textArea.value="Prachi";