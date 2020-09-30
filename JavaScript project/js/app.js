let cards = document.querySelectorAll('.card-item');

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);

}


function startRotate (e) {

    let cardItem = this.querySelector('.card-content')
    let halfHeight = cardItem.offsetHeight / 2;
    cardItem.style.transform = 'rotateX(' + - (e.offsetY - halfHeight) / 20 +'deg) rotateY('+ (e.offsetX - halfHeight) / 20 +'deg)';
}

function stopRotate (e) {
    let cardItem = this.querySelector('.card-content')
    cardItem.style.transform = 'rotate(0)';
}
