let arrayDollars;
let arrayCents;

function calculate() {

    checkNodes();

    const sum = document.getElementById("sum").value;
    const price = document.getElementById("price").value;

    let rest = sum - price;
    document.getElementById("rest").innerHTML = Number(rest).toFixed(2);

    dollarsCalc(rest);
    centsCalc(rest);
}

function checkNodes() {
    const parent = document.getElementById("dollars");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    const parent2 = document.getElementById("cents");
    while (parent2.firstChild) {
        parent2.firstChild.remove();
    }
}

function dollarsCalc(rest) {
    arrayDollars = [];
    let i = true;
    let dollars = parseInt(rest);

    while(i !== false) {
        if(dollars >= 100) {
            arrayDollars.push(100);
            dollars = dollars - 100;
        }
        if(dollars < 100 && dollars >=50) {
            arrayDollars.push(50);
            dollars = dollars - 50;
        }
        if(dollars < 50 && dollars >=20 ){
            arrayDollars.push(20);
            dollars = dollars - 20;
        }
        if(dollars < 25 && dollars >=10 ){
            arrayDollars.push(10);
            dollars = dollars - 10;
        }
        if(dollars < 10 && dollars >=5 ){
            arrayDollars.push(5);
            dollars = dollars - 5;
        }
        if(dollars < 5 && dollars >=2 ){
            arrayDollars.push(2);
            dollars = dollars - 2;
        }
        if(dollars < 5 && dollars >=1 ){
            arrayDollars.push(1);
            dollars = dollars - 1;
        }
        if(dollars <=0){
            i = false;
            setDollarsNodes();
        }
    }
}
function centsCalc(rest) {
    arrayCents = [];
    console.log(rest%1);
    let cents = rest%1 * 100;
    cents = parseInt(cents);
    let j = true;

    while(j !== false) {

        if(cents >= 50) {
            arrayCents.push(50);
            cents = cents - 50;
        }
        if(cents < 50 && cents >=25 ){
            arrayCents.push(25);
            cents = cents - 25;
        }
        if(cents < 25 && cents >=10 ){
            arrayCents.push(10);
            cents = cents - 10;
        }
        if(cents < 10 && cents >=5 ){
            arrayCents.push(5);
            cents = cents - 5;
        }
        if(cents < 5 && cents >= 1 ){
            arrayCents.push(1);
            cents = cents - 1;
        }
        if(cents <=0){
            j = false;
            setCentsNodes();
        }
    }
}

function setDollarsNodes() {
    var objTo = document.getElementById('dollars');
    for (var y = 0; y < arrayDollars.length; y++){
        var divtest = document.createElement("span");
        divtest.innerHTML = arrayDollars[y];
        objTo.appendChild(divtest);
    }
}
function setCentsNodes() {
    var objTo = document.getElementById('cents');
    for (var y = 0; y < arrayCents.length; y++){
        var divtest = document.createElement("span");
        divtest.innerHTML = arrayCents[y];
        objTo.appendChild(divtest);
    }
}