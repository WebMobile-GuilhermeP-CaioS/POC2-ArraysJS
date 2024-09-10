var numeros = [101, 3, 16, 2, 14, 5, 56, 11, 145, 12, 7, 8, 92, 1, 23];

var numerosSort = numeros;
var numerosMap = numeros;
var numerosReduce = numeros;
var numerosFilter = numeros;
var numerosSpread = numeros;

/*var sortTAG = document.getElementById("sortText");
var mapTAG = document.getElementById("mapText");
var reduceTAG = document.getElementById("reduceText");
var filterTAG = document.getElementById("filterText");
var spreadTAG = document.getElementById("spreadText");*/

window.onload = function(){

    /*sortTAG.innerHTML = "";
    mapTAG.innerHTML = "";
    reduceTAG.innerHTML = "";
    filterTAG.innerHTML = "";
    spreadTAG.innerHTML = "";*/

    for(var i=0; i<numerosSort.length; i++){
        document.getElementById("sortText").innerHTML += `<div class='numeros'>
                                    <h2>${numerosSort[i]}</h2>
                                </div>`
    }
    
    for(var i=0; i<numerosMap.length; i++){
        document.getElementById("mapText").innerHTML += `<div class='numeros'>
                                    <h2>${numerosMap[i]}</h2>
                                </div>`
    }
    
    for(var i=0; i<numerosReduce.length; i++){
        document.getElementById("reduceText").innerHTML += `<div class='numeros'>
                                    <h2>${numerosReduce[i]}</h2>
                                </div>`
    }
    
    for(var i=0; i<numerosFilter.length; i++){
        document.getElementById("filterText").innerHTML += `<div class='numeros'>
                                    <h2>${numerosFilter[i]}</h2>
                                </div>`
    }
    
    for(var i=0; i<numerosSpread.length; i++){
        document.getElementById("spreadText").innerHTML += `<div class='numeros'>
                                    <h2>${numerosSpread[i]}</h2>
                                </div>`
    }
}

function metodoSort(){
    document.getElementById("sortText").innerHTML = "";

    numerosSort = numerosSort.sort((a, b) => a - b);

    for(var i=0; i<numerosSort.length; i++){
        document.getElementById("sortText").innerHTML += `<div class='numeros'>
                                    <h2>${numerosSort[i]}</h2>
                                </div>`
    }
}

function metodoMap(){
    document.getElementById("mapText").innerHTML = "";

    numerosMap = numerosMap.map(n => n * 2);

    for(var i=0; i<numerosMap.length; i++){
        document.getElementById("mapText").innerHTML += `<div class='numeros'>
                                    <h2>${numerosMap[i]}</h2>
                                </div>`
    }
}

function metodoReduce(){
    document.getElementById("reduceText").innerHTML = `<div class='numeros'>
                                                        <h2>${numerosReduce.reduce(sumNumeros)}</h2>
                                                        </div>` ;
}

function metodoFilter(){
    document.getElementById("filterText").innerHTML = "";

    numerosFilter = numerosFilter.filter(n => n > 20);

    for(var i=0; i<numerosFilter.length; i++){
        document.getElementById("filterText").innerHTML += `<div class='numeros'>
                                    <h2>${numerosFilter[i]}</h2>
                                </div>`
    }
}

function metodoSpread(){
    document.getElementById("spreadText").innerHTML = "";

    var numerosSpread2 = [-1,-2,-3, ...numerosSpread];

    for(var i=0; i<numerosSpread2.length; i++){
        document.getElementById("spreadText").innerHTML += `<div class='numeros'>
                                    <h2>${numerosSpread2[i]}</h2>
                                </div>`
    }
}

function sumNumeros(total, num) {
    return total + num;
  }