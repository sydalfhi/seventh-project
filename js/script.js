
/* 
    * =====================================
todo         CREAT BY SYAID ALFARISHI
?             AUG    27-28     2022
* =====================================
*/


// ?================================================================================================
                // todo                          CLASS

                class Song{
                    constructor(){
                        this.judul = ['KITA REMAJA','MAHIKA','BAD BOY',"LEFT AND RIGHT","Light Switch","White Tee"];
                        // ? 
                        this.durasiAll = [170,166,191,128,168,188];
                        // ? 
                        this.durasiTulisan = ["02:50","02:46","03:11","02:08","02:48","03:08"];
                        // ? 
                        this.namaMusik = ["Hivi-remaja.mp3","mahika.mp3","badboy.mp3","left_and_right.mp3","light_switch.mp3","White_tee.mp3"];
                        // ? 
                        this.gambarLagu = ["2.jpg","1.jpg","3.jpg","4.jpg","5.jpg","hero.jpg"];
                        // ? 
                        this.namaArtis = ["Artis Tidak Dikenal","Artis Tidak Dikenal","Artis Tidak Dikenal","Charlie Puth, Jungkook","Charlie Puth","Artis Tidak Dikenal"];
                    }
                }
// ?================================================================================================



const musik = document.querySelector('audio');
const bulat = document.querySelector('.bulat-play');
const play1 = document.querySelector('.play-1');
const paly2 = document.querySelector('.play-2');
const paused = document.querySelector('.paused')
const selanjutnya = document.querySelector('.segi2');
const sebelumnya = document.querySelector('.segi1');
const tampilanDurasi = document.querySelector('.tampilanDurasi');
const akhir = document.querySelector('.finis')
const judulLagu = document.querySelector('.judulLagu');
const gambar = document.querySelector('img.gambar');
const arrow = document.querySelector('.card img.panah');
const kembaliKeMusik = document.querySelector('.kartu img.panah');
const artis = document.querySelector('.artis');
const konten = document.querySelector('.content ');
const daftarMusik = document.querySelector('.kartu');
const pemutarmusik = document.querySelector('.card');
let jumlahLagu = konten.children.length;
const tombol = document.querySelector('.fitur button');
let nilai = 0;
let key = 0;
let navLagu = 1;

let min = sec = '0'+ 0 ;

play1.style.display = 'none';
paly2.style.display = 'none';
let mainkan;
const syaid = new Song();




// *=====================================================================================================
                // * FUNCTION

// ?  put value
// ! function untuk mendapatkan durasi lagu saat berjalan
function putValue() {
    const durasinow = document.querySelector('.jalannya');
    durasinow.innerText = `${min}:${sec}`;
}
// ? end put value
// ? mulai
// ! function untuk memainkan/menjalankan lagu
 function mulai(){
    musik.play();
    play1.style.display = 'block';
    paly2.style.display = 'block';
    paused.style.display = 'none'
       mainkan = setInterval(() => {
        
        tampilanDurasi.value = nilai;
        if(tampilanDurasi.value != syaid.durasiAll[navLagu]){
            nilai++;
        }else if(tampilanDurasi.value == syaid.durasiAll[navLagu]){
            clearInterval(mainkan)
            berhenti();
            nilai = 0;
            sec = "0" + 0;
            min = "0" + 0;
            tampilanDurasi.value = 0;
        }
        sec++;
        sec = sec < 10 ? `0${sec}` : sec;
        if (sec == 60) {
            sec = "0" + 0;
            min++
           min =  min < 10 ? `0${min}` : min;
           
        }
        putValue();
    }, 1000);
}
// ? end mulai
// ? berhenti
 function berhenti() {
    // ! function untuk menghentikan lagu
    musik.pause()
    clearInterval(mainkan);
    putValue();
    play1.style.display = 'none';
    paly2.style.display = 'none';
    paused.style.display = 'block'   
}
// ? end berhenti
// ? penggantian
// ! function untuk mengganti lagu
 function penggantian() {
    judulLagu.innerHTML = syaid.judul[navLagu];
    musik.src = `song/${syaid.namaMusik[navLagu]}`;
    akhir.innerHTML = syaid.durasiTulisan[navLagu];
    tampilanDurasi.max = syaid.durasiAll[navLagu];
    gambar.src = `gambar/${syaid.gambarLagu[navLagu]}`;
    artis.innerHTML = syaid.namaArtis[navLagu];
    tampilanDurasi.value =  0 ;   
    nilai = 0;
    sec = "0" + 0;
    min = "0" + 0;
}
// ? end penggantian

// ? hitam
// ! dark pada dark mode

 function hitam() {
    theme = 'DARK'
    document.body.style.backgroundColor = "#0b0b0b";
    document.body.style.color = "#e0e0e0";
    pemutarmusik.style.backgroundColor = "#0a0a0a";
    daftarMusik.style.backgroundColor = "#0a0a0a";
    daftarMusik.style.color = "#e0e0e0";
};
// ? end hitam
// ? white
// ! putih pada dark mode
 function putih() {
    theme = 'LIGHT';
    daftarMusik.style.color = "#3a3a3a";
    document.body.style.backgroundColor = "#e0e0e0";
    document.body.style.color = "#3a3a3a";
    pemutarmusik.style.backgroundColor = "#e0e0e0";
    daftarMusik.style.backgroundColor = "#e0e0e0";
};
// ? end white
// *=====================================================================================================

// ! fungsi tombol spasi
window.addEventListener("keyup",(e)=>{
    if (e.keyCode == 32) {  
        if (key % 2 == 0) {
            mulai();
        }else{
            berhenti() ;
        }
        key++;
    }
});
// ! end fungsi tombol spasi


//  *===============
let counter = 1;
bulat.addEventListener('click',()=>{
    if (counter % 2== 1) {
        mulai();
    }else{
        berhenti()
    }
    counter++;
});


bulat.addEventListener('dblclick',()=>{
})
//  *=================


// ? ======================
selanjutnya.addEventListener('click',()=>{
    
    navLagu++;
    if ( syaid.judul[navLagu] == undefined) {
        navLagu = 0;
    }
    berhenti();
    penggantian();
});

sebelumnya.addEventListener("click",()=>{
    --navLagu;
    if (syaid.judul[navLagu] == undefined) {
        navLagu = jumlahLagu - 1;
    }
    berhenti();
    penggantian();
});

// ? ======================



//  * =========================

let cart = Array.from(konten.children)

cart.forEach((e,indexnya) => {
    e.addEventListener("click",()=>{
        navLagu = indexnya;
        penggantian();
        berhenti();

        if (window.innerWidth < 854) {
        
            daftarMusik.style.display = "none";
            pemutarmusik.style.display = "block";
        }

    });
});

//  * =========================


//  ? =========================

arrow.addEventListener("click",()=>{
    daftarMusik.style.display = "flex";
    pemutarmusik.style.display = "none";
    
});


kembaliKeMusik.addEventListener('click',()=>{
    daftarMusik.style.display = "none";
    pemutarmusik.style.display = "block";
})

//  ? =========================


// ! ===================================
let theme = 'LPGHT'
tombol.addEventListener("click",()=>{
    if (theme == "LIGHT") {
            hitam()   ;
            tombol.innerHTML = "LIGHT"
        }else{
            putih();
            tombol.innerHTML = "DARK"
    }
});

// ! ===================================