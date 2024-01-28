const modal = document.getElementById('modal')
const body = document.getElementById('body')
const form = document.getElementById('callback-form')
const finishForm = document.getElementById('finish-form')


const toggleModal = () => {
    if (modal.classList.contains('open')) {
        modal.classList.remove('open')
        body.classList.remove('hidden')

        form.classList.add('active') 
        finishForm.classList.remove('active')
    } else {
        modal.classList.add('open')
        body.classList.add('hidden')
    }
}

const handleFormSubmit = () => {
    event.preventDefault();

    if (form.classList.contains('active') ) {
        form.classList.remove('active')    
        finishForm.classList.add('active')
    }     
}

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