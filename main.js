const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scroolY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

let swiperProducts = new Swipper(".products-container",{
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: true,
    loop: true,


    navigation: {
        nextEl: ".swipper-button-next",
        prevEl: ".swipper-button-prev",
    },
});