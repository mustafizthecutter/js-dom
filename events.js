function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('button-id');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

const greenButton = document.getElementById('greenid');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';

}