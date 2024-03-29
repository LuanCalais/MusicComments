import { emitAddNewGender } from "./socket-comment-index.js"

const genders = document.getElementById('gender-list')
const form = document.getElementById('form-add-gender')
const input = document.getElementById('input-gender')

form.addEventListener("submit", (e) => {
    e.preventDefault()
    emitAddNewGender(input.value)
    input.value = ""
})

function insertNewGender(name) {
    genders.innerHTML += `
    <a href="comment.html?name=${name}" class="list-group-item list-group-item-action" id="${name}">
       ${name}
    </a>
    `
}

function removeGender(name){
    const gender = document.getElementById(name)
    genders.removeChild(gender)
}

export { insertNewGender, removeGender }
