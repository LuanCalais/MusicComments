import { emitTextAction, genderSelect } from "./socket-comment.js"

const params = new URLSearchParams(window.location.search)
const name = params.get("name")

document.getElementById('comment-title').innerHTML = name || 'Invalid title'

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

export { updateTextArea }