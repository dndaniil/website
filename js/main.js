"use strict"

const modalClose = document.querySelector('.modal-close')
const modalWin = document.querySelector('#open-modal')

modalClose.addEventListener('click', (e) => {
    e.preventDefault()

    modalWin.classList.toggle('modal-window--open')
})

const openButton = document.querySelector('.form__button')
openButton.addEventListener('click', (e) => {
    e.preventDefault()

    const form = document.querySelectorAll('form > *')
    const formElements = [...form].slice(0, -1);
    let flag = true;
    

    formElements.forEach(element => {
        if (!(element.value.trim())) {
            flag = false;
        }
    })

    const modalText = document.querySelector('.modal__text')
    if (flag) {
        modalText.textContent = 'Сообщение было отправлено!'
        modalWin.classList.toggle('modal-window--open')
    } else {
        
        modalText.textContent = 'Заполните все поля!'
        modalWin.classList.toggle('modal-window--open')
    }
})








 