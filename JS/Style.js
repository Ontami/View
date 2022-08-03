const nav = document.querySelector('.et-hero-tabs-container')
window.addEventListener('scroll' , () => {
    if(window.scrollY > 100) {
        nav.classList.add('et-hero-tabs-container2');
        nav.classList.remove('et-hero-tabs-container');
    } else {
        nav.classList.add('et-hero-tabs-container');
        nav.classList.remove('et-hero-tabs-container2');
    }
});
