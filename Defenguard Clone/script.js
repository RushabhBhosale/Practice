let slide = document.querySelectorAll('.slide');
var currrent = 0;

function cls() {
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
}

function next() {
    cls();
    if(currrent === slide.length-1)  currrent = -1;
    currrent++;

    slide[currrent].style.display = 'block';

}

function prev() {
    cls();
    if(currrent === 0)  currrent = slide.length;
    currrent--;

    slide[currrent].style.display = 'block';

}

function start() {
    cls();
    slide[currrent].style.display = 'block';
}

start();