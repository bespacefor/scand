function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});

const burger = document.querySelector('.burger');
const burgerButton = document.querySelector('.burger__button');
const burgerMenu = document.querySelector('.menu_burger');

burgerButton.addEventListener('click', function () {
    burger.classList.toggle('burger_active');
});
burgerMenu.addEventListener('click', function () {
    burger.classList.toggle('burger_active');
});
