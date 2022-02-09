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

const makeGray = document.getElementById('make-gray');
makeGray.addEventListener('click', colorGray)
function colorGray() {
    document.body.style.backgroundColor = ('gray');
}

const blue = document.getElementById('lightblue');
blue.addEventListener('click', function lightgray() {
    document.body.style.backgroundColor = "magenta";
})

document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'khaki';
})
