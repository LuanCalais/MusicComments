import { emitTextAction } from "./socket-comment.js"

const textInput = document.getElementById("text-edit")

textInput.addEventListener("keyup", () => {
    emitTextAction(textInput.value)
})

function updateTextArea(value) {
    textInput.value = value
}

export { updateTextArea }