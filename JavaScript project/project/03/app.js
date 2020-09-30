let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    let card = cards[i]
    card.addEventListener('mousemove', startRotate)
    card.addEventListener('mouseout', stopRotate)
}

function startRotate (event) {
    let cardItem = this.querySelector('.card-item')
    halfHeight = cardItem.offsetHeight / 2;
    cardItem.style.transform = 'rotateX('+ - (event.offsetY - halfHeight) / 20 +'deg) rotateY('+ (event.offsetX - halfHeight) / 20 +'deg)'
}

function stopRotate () {
    let cardItem = this.querySelector('.card-item')
    cardItem.style.transform = 'rotateX(0)'
}