let btn = document.querySelector('.btn'),
    menu = document.querySelector('.menu');

btn.onclick = () => {
    btn.classList.toggle('btn_active');
    menu.classList.toggle('menu_active')
}
