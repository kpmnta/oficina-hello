let input = document.querySelector('input')
let names = document.querySelector('h2')
let button = document.querySelector('button')

function cliquei() {
    event.preventDefault()
    names.innerHTML = input.value
}


