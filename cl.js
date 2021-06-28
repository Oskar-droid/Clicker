let haeder = document.getElementById('header');
let but = document.getElementById('but');

let counter = 0;
let upgrade0 = 1;

//Atchivement for 1000 click
but.addEventListener('click', function () {
               counter = counter + upgrade0;
               header.textContent = 'You have clicked: ' + counter;

               if (counter >= 1000) {
                              alert('Congratulations! You complete my clicker :)');
                              location.reload();
               } else {

               }
});

let arr = [
               'Welcome!',
               'Hello!',
               'Good Luck!',
               'Have a Nice Game!'
];

let random = Math.floor(Math.random() * 4); // "Floor" rounds number to smaller meaning

alert(arr[random]); //Random element of arr alert

let upgrade = document.getElementById('upgrade');


//Event that give you +1 click value and takes -10 clicks
firstUpgrade_text.addEventListener('click', function () {
               if (counter < 50) {
                              alert('You need to get 50 clicks!');
               } else if (counter > 50) {
                              counter -= 50;
                              upgrade0 = upgrade0 + 1;
               }

});

//Event that give you +5 click value and takes -50 clicks
secondUpgrade_text.addEventListener('click', function () {
               if (counter < 500) {
                              alert('You need to get 500 clicks!');
               } else if (counter > 500) {
                              counter -= 500;
                              upgrade0 = upgrade0 + 5;
               }
});

let shop = document.getElementById('openShop_text');
let back = document.getElementById('back_text');

//Function that shows shop
shop.addEventListener('click', function () {
               shop.classList.add('hidden');
               back.classList.remove('hidden');
               back.classList.add('marginBottom');
               upgrade_text.classList.remove('hidden');
               secondUpgrade_text.classList.add('hidden');
});

//Function that close shop
back.addEventListener('click', function () {
               shop.classList.remove('hidden');
               back.classList.add('hidden');
               back.classList.remove('marginBottom');
               upgrade_text.classList.add('hidden');
               firstUpgrade_text.classList.add('hidden');
               secondUpgrade_text.classList.add('hidden');
});

upgrade_text.addEventListener('click', function () {
               shop.classList.add('hidden');
               back.classList.remove('hidden');
               back.classList.add('marginBottom');
               upgrade_text.classList.add('hidden');
               firstUpgrade_text.classList.remove('hidden');
               secondUpgrade_text.classList.remove('hidden');
});

//"Enter" bug fix
document.addEventListener('keydown', function (event) {
            if (event.keyCode == 13) {
                    but.blur();
}
});

let popup_bg = document.getElementById('popup_bg');
let popup_message = document.getElementById('popup_message');
let error = document.getElementById('error');
let popupClose = document.getElementById('close');