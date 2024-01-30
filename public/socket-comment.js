import { updateTextArea , handleWithDeletedGender} from "./comments.js"

const socket = io()

function genderSelect(name) {
    socket.emit("gender_select", name, (value) => {
        updateTextArea(value)
    })
}

function emitTextAction(data) {
    socket.emit("text_action", data)
}

function emitGenderDelete(name) {
    socket.emit('delete_gender', name)
}

socket.on("text_action_client", (value) => {
    updateTextArea(value)
})

socket.on("disconnected", (reason) => {
    console.log(`Server ${socket.id} disconnected. The reason is: ${reason}`)
})

socket.on("gender_removed", (name) => {
    handleWithDeletedGender(name)
})

export { emitTextAction, genderSelect, emitGenderDelete }