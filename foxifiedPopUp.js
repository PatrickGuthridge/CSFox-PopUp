var popUpBox;
var nightlyWarning;
var devWarning;
var button;
var instructionImage;
var frontBlurb;
function show(e){
    e.style.display = "unset";
    e.style.opacity = 1;
}
function hide(e){
    e.style.opacity = 0;
}
function init(){
    popUpBox = document.querySelector("#csfxPopUp");
    nightlyWarning = document.querySelector("#nightlyText");
    devWarning = document.querySelector("#devText");
    button = document.querySelector("#nxt");
    instructionImage = [
        document.querySelector("#inst0"),
        document.querySelector("#inst1"),
        document.querySelector("#inst2")
    ];
    instructionText = [
        document.querySelector(".it0"),
        document.querySelector(".it1"),
        document.querySelector(".it2")
    ];
    frontBlurb = document.querySelector("#frontText");
}
function popUp(context){
    show(popUpBox);
    setTimeout(function(){
        switch(context){
            case "nightly":
                show(nightlyWarning);
                break;
            case "dev":
                show(devWarning);
                break;
            case "beta" || "release" || "esr":
                break;
        }
    }, 4050);
    button.addEventListener("click",function(){
        popUpBox.classList.add("full");
        hide(button);
        hide(nightlyWarning);
        hide(devWarning);
        frontBlurb.classList.add("ftDown");
        setTimeout(function(){
            show(instructionImage[0]);
            show(instructionText[0]);
        },750)
        setTimeout(function(){
            show(instructionImage[1]);
            show(instructionText[1]);
        },1000)
        setTimeout(function(){
            show(instructionImage[2]);
            show(instructionText[2]);
        },1250)

    });
}
function newTab(url){
    var tab = window.open(url, '_blank');
    tab.focus();
}
document.addEventListener("DOMContentLoaded", init);