$(document).ready(function () {
    $('body').hide().fadeIn(1000);
});

var all = ".bcb, .ccb";

function showCards() { // add what else is checked as parameters
    $("div").filter(all).hide(); //hides all to start

    const checkQuery = [];

    //shows basecashback
    if (document.getElementById('basecashback').checked) {
        checkQuery.push("BCB");
    }
    //shows calendarcashback
    if (document.getElementById('calendarcashback').checked) {
        checkQuery.push("CCB");
    }
    if (document.getElementById('priceprotection').checked) {
        checkQuery.push("PriP");
    }
    for (let x = 0; x < checkQuery.length; x++) {
        getJSON();
    }
    reshowAll();
}



function getJSON() {
    fetch("./Cards.json")
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            console.log(data.Cards);
        })
}

function makeDict(theJSON) {
    var cards = {};

    for (var i = 0, emp; i < theJSON.length; i++) {
        emp = result.cards[i];
        employees[emp.id] = emp;
    }

    console.log(employees[56].name); // logs "Harry"
    console.log(employees[56].department); // logs "marketing"
}



function reshowAll() {
    //reshows all if no boxes are checked
    if (document.getElementById('calendarcashback').checked == false && document.getElementById('basecashback').checked == false && document.getElementById('priceprotection').checked == false) {
        $("div").filter(".bcb, .ccb").show();
    }
}
