import { updateTextArea } from "./comments.js"

const socket = io()

function genderSelect(name) {
    socket.emit("gender_select", name)
}

function emitTextAction(value) {
    socket.emit("text_action", value)
}

socket.on("text_action_client", (value) => {
    updateTextArea(value)
})

socket.on("disconnected", (reason) => {
    console.log(`Server ${socket.id} disconnected. The reason is: ${reason}`)
})

export { emitTextAction, genderSelect }