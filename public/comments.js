import { emitTextAction, genderSelect, emitGenderDelete } from "./socket-comment.js"

const params = new URLSearchParams(window.location.search)
const name = params.get("name")

document.getElementById('comment-title').innerHTML = name || 'Invalid title'

document.getElementById('delete-comment').addEventListener('click', deleteComment)


genderSelect(name)

const textInput = document.getElementById("text-edit")

textInput.addEventListener("keyup", () => {
    emitTextAction({
        text: textInput.value,
        name: name
    })
})

function updateTextArea(value) {
    textInput.value = value
}

function deleteComment() {
    emitGenderDelete(name)
}

function handleWithDeletedGender(deletedName) {
    if (deletedName !== name) return
    alert(`Gender ${deletedName} has been removed`)
    window.location.href = "/"
}

export { updateTextArea, handleWithDeletedGender }