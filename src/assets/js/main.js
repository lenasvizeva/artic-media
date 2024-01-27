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
