const kartu = document.querySelector('.card');
const tutup = document.querySelector('.close');
const tombol = document.querySelector('button');
const konten = document.querySelector('.container');

konten.addEventListener('click' , function (e) {
    if (e.target == tombol){

            let nama = prompt('nama anda');
            let nomerHP = prompt('nomer hp');
            // console.info(nama);
            // console.info(nomerHP)

            let cardnya = document.createElement('div');
            cardnya.classList.add('card');

            let main1 = document.createElement('div');
            let main1Item = document.createElement('div');
            main1Item.classList.add('me');
            main1.classList.add('main1');
            main1.append(main1Item);
            
                        let namePerson = document.createElement('h1');
                        namePerson.append(nama);
                        let contactPerson = document.createElement('p');
                        contactPerson.append(nomerHP);

            let main2 = document.createElement('div');
            main2.classList.add('main2');
        

            


            main2.append(namePerson);
            main2.append(contactPerson);
            cardnya.append(main1);
            cardnya.append(main2);
            konten.append(cardnya);


            let tombolHilang = document.createElement('span');
            tombolHilang.classList.add('close');

            let tombolX = document.createTextNode('X');
            tombolHilang.append(tombolX);

            cardnya.append(tombolHilang);

    }
});

konten.addEventListener('click', (e)=>{
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
    }
});


