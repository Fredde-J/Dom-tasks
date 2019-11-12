function onButtinClick(event){
    let Fname= document.querySelector("#firstName");
    let Lname=document.querySelector("#lastName");
    let outPut=document.querySelector("#output")
outPut.innerHTML = "hello! " + Fname.value + " "+ Lname.value;
}

document.querySelector("#btn1").onclick = onButtinClick;