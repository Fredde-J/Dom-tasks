function onButtinClick(event){
    let Fname= document.querySelector("#firstName");
    let Lname=document.querySelector("#lastName");
    let outPut=document.querySelector("#output")
outPut.innerHTML = "hello! " + Fname.value + " "+ Lname.value;
}

document.querySelector("#btn1").onclick = onButtinClick;

//--------------------------------------------------------------------------------------------------------------------------------

let movieTitle = document.querySelector("#movieInput")
let movieYear = document.querySelector("#yearInput")
let addMovieButton = document.querySelector("#movieButton")

addMovieButton.onclick = function(){
   let movie = new Movie(movieTitle, movieYear)
   console.log(movie)
}
//--------------------------------------------------------------------------------------------------------------------------------
let pageTitle = document.querySelector("#PageTitleInput")
let head = document.querySelector("#header")
pageTitle.onblur = function(){
head.innerHTML = pageTitle.value;
}

//--------------------------------------------------------------------------------------------------------------------------------

let num1 = document.querySelector("#num1Input")
let num2 = document.querySelector("#num2Input")
let switchNum = document.querySelector("#switchButton")

switchNum.onclick = function(){
    var newNumber1 = num1.value
    document.querySelector("#num1Input").value = num2.value;
    document.querySelector("#num2Input").value = newNumber1;
}
//--------------------------------------------------------------------------------------------------------------------------------
var fruitList = document.getElementById("list");
var button = document.querySelector("#reversebutton")
button.onclick = function(){
    var i = fruitList.childNodes.length;
    while (i--)
      fruitList.appendChild(fruitList.childNodes[i]);
}
