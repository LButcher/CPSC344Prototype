/**
 * Created by Liam on 18/11/17.
 */


var option1Taken = false
var option2Taken = false
var option1 =null
var option2 =null

var info = {
    'sushi1' : {
        'name': 'Sushi Itoga',
        'rating': 4.5,
        'price': '$$',
        'distance (km)': 12
    },
    'sushi2' : {
        'name': 'Kishimoto Japanese Kitchen',
        'rating': 4.5,
        'price': '$$',
        'distance (km)': 15
    },
    'sushi3' : {
        'name': 'Shizen Ya',
        'rating': 4,
        'price': '$$',
        'distance (km)': 5
    },
    'cafe1' : {
        'name': 'The Only Cafe',
        'rating': 4.5,
        'price': '$',
        'distance (km)': 2
    },
    'cafe2' : {
        'name': 'Revolver',
        'rating': 4.5,
        'price': '$$',
        'distance (km)': 10
    },
    'cafe3' : {
        'name': 'Porto Cafe',
        'rating': 4,
        'price': '$',
        'distance (km)': 5
    }
}

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
        checkStatus()
    }
    else if(!option2Taken&&loc=='bottom') {
        document.getElementById("div2").innerHTML = "";
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        option2=data
        option2Taken=true
        checkStatus()
    }
}

function checkStatus(){
    if(option1!=null && option2!=null){
        document.getElementById('compareChoicesButton').removeAttribute('disabled')
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