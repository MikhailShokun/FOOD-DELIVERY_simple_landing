const addToShopping = document.querySelectorAll(".pizza__addToShopping");


for (let i of addToShopping) {
    i.addEventListener("click", function() {
        i.querySelector('img').src = 'img/ellipse_white.png';
    });
}