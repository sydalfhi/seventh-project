const lagu = document.querySelector('audio');
const bulat = document.querySelector('.bulat-play');
const play1 = document.querySelector('.play-1');
const paly2 = document.querySelector('.play-2');
const paused = document.querySelector('.paused');
const jalannya = document.querySelector('p.jalannya');
const valuerange = document.querySelector('.music .range');


play1.style.display = 'none';
paly2.style.display = 'none';

let durasisaatini = 0;
let penghitung = 0;
function mulai() {
    lagu.play();
}
function berhenti() {
    lagu.pause()
}
function ini() {
    setInterval(() => {
        if (durasisaatini < 10) {
            jalannya.innerHTML = `0:0${durasisaatini}`;
        }else if(durasisaatini >= 10 && durasisaatini < 60 ){
            jalannya.innerHTML = `0:${durasisaatini}`;
        }else if (durasisaatini >= 60 && durasisaatini < 70 ) {
            jalannya.innerHTML = `1:0${durasisaatini-60}`;
        }else if(durasisaatini >= 70 && durasisaatini < 120){
            jalannya.innerHTML = `1:${durasisaatini-60}`;
        }else if (durasisaatini >= 120 && durasisaatini < 130 ) {
            jalannya.innerHTML = `2:0${durasisaatini-120}`;
        }else if (durasisaatini >= 130 && durasisaatini <= 170) {
            jalannya.innerHTML = `2:${durasisaatini-120}`;
        }
        durasisaatini++;
    }, 1000 ,0);
}





bulat.addEventListener('click', ()=>{

    if (penghitung === 0) {
        ini();
        valuerange.classList.add('baka');
    }

if (penghitung %2 == 0) {

    paused.style.display= "none";
    play1.style.display = 'block';
    paly2.style.display = 'block';
    mulai();
}else{
    paused.style.display= "block";
    play1.style.display = 'none';
    paly2.style.display = 'none';
    berhenti()
    durasisaatini = durasisaatini;
}
penghitung++;

}); 




