'use strict';

const   iphone12Btn = document.querySelector('.iphone12Btn'),
        iphone13Btn = document.querySelector('.iphone13Btn'),
        iphone14Btn = document.querySelector('.iphone14Btn'),
        dropdownMenu = document.querySelector('.dropdown-menu'),
        dropdownItem = dropdownMenu.querySelectorAll('li');

console.log(dropdownMenu);

const cartCountNumber = document.querySelector('.cartCount');


let counterCart = 0;


iphone12Btn.addEventListener('click', function() {
    console.log('work');
    counterCart++;
    cartCountNumber.textContent = counterCart;
    dropdownItem.forEach(function(item) {
        if (item.textContent === 'корзина пуста') {
            item.remove();
        }
    });
    dropdownMenu.innerHTML += '<li><a class="dropdown-item" >APPLE iPhone 12</a></li>';
});

iphone13Btn.addEventListener('click', function() {
    console.log('work');
    counterCart++;
    cartCountNumber.textContent = counterCart;
    dropdownItem.forEach(function(item) {
        if (item.textContent === 'корзина пуста') {
            item.remove();
        }
    });
    dropdownMenu.innerHTML += '<li><a class="dropdown-item" >APPLE iPhone 13</a></li>';
});

iphone14Btn.addEventListener('click', function() {
    console.log('work');
    counterCart++;
    cartCountNumber.textContent = counterCart;
    dropdownItem.forEach(function(item) {
        if (item.textContent === 'корзина пуста') {
            item.remove();
        }
    });
    dropdownMenu.innerHTML += '<li><a class="dropdown-item" >APPLE iPhone 14 Pro</a></li>';
});