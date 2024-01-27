// const Glide = require ('glide')

const toggleMenu = () => {
    let menu = document.getElementById('menu')
    let body = document.getElementById('body')

    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
        body.classList.remove('hidden')
    } else {
        menu.classList.add('active')
        body.classList.add('hidden')
    }
}

// window.addEventListener('load', function(){
//     new Glide('.slider').mount({})
// })



$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    useTransform: false,
    speed: 300,
    dots: true,
    arrows: false
})