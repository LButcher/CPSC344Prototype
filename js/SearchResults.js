/**
 * Created by Liam on 18/11/17.
 */


var option1Taken = false
var option2Taken = false
var option1 =null
var option2 =null

var searchTerm = window.sessionStorage.getItem("searchTerm")


//From w3 Schools
function allowDrop(ev) {
    //console.log(ev)
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev,loc) {
    if(!option1Taken&&loc=='top') {
        document.getElementById("div1").innerHTML = "";
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        option1=data
        option1Taken=true
    }
    else if(!option2Taken&&loc=='bottom') {
        document.getElementById("div2").innerHTML = "";
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        option2=data
        option2Taken=true
    }
}

function loadPage(){
    loadResults(searchTerm)
}

function loadResults(type){
    if(type=='sushi'){
        document.getElementById("resultsLocCafe").style.display='none'
        document.getElementById("resultsLocSushi").style.display='block'
        window.sessionStorage.setItem("searchTerm",'sushi')
    }
    else{
        document.getElementById("resultsLocSushi").style.display='none'
        document.getElementById("resultsLocCafe").style.display='block'
        window.sessionStorage.setItem("searchTerm",'cafe')
    }
}

function compareChoices(){
    console.log(option1)
    console.log(option2)
}