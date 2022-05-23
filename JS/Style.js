const nav = document.querySelector('.navbar')
window.addEventListener('scroll' , () => {
    if(window.scrollY > 339) {
        nav.classList.add('cree');
        nav.classList.remove('navbar');
    } else {
        nav.classList.add('navbar');
        nav.classList.remove('cree');
    }
});