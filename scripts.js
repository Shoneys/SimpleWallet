$(document).ready(function () {
    $('body').hide().fadeIn(1000);
});

function showCards() {
    if (document.getElementById('basecashback').checked) {
        console.log("lol");
        $("#cards").load("cards.html #ChaseAmazon");
    }
}
