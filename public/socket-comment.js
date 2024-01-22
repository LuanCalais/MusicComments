import { updateTextArea } from "./comments.js"

const socket = io()

function emitTextAction(value) {
    socket.emit("text_action", value)
}

socket.on("text_action_client", (value) => {
    updateTextArea(value)
})

export { emitTextAction }