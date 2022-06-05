function startTheParty() {
    document.querySelector('.current-page').style.fontWeight = 'bold';
    document.querySelector('.current-page').style.fontStyle = 'italic';
    document.querySelector('.current-page').style.color = 'hsl('+(hue+180)+', 80%, 70%)';
    hue++;
    if(hue > 359) {hue = 0};
}

document.querySelector(".end").disabled = 1;
let hue = 0;
let interval = [];
let startPartyButton = document.querySelector('.start');
let endPartyButton = document.querySelector('.end');

startPartyButton.onclick = function() {
    interval = setInterval(startTheParty,0.1);
    document.querySelector(".start").disabled = 1;
    document.querySelector(".end").disabled = 0;
};

endPartyButton.onclick = function() {
    document.querySelector('.current-page').style.fontWeight = 'normal';
    document.querySelector('.current-page').style.fontStyle = 'normal';
    document.querySelector('.current-page').style.color = 'white';
    document.body.style.color = 'white';
    clearInterval(interval);
    document.querySelector(".start").disabled = 0;
    document.querySelector(".end").disabled = 1;
};
