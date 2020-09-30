let btn = document.querySelector('.btn');

btn.addEventListener('click', randomColor)

function randomColor () {

    let letters = '0123456789ABCDEF'
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    document.querySelector('.block').style.backgroundColor = color;
    document.querySelector('.color').style.color = color;
    document.querySelector('.color').innerHTML = color;

}
