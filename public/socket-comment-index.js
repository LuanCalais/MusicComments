import { insertNewDocument } from "./index.js";

const socket = io()

socket.emit('get_all_genders', (genders) => {
    genders.forEach(item => {
        insertNewDocument(item.name)
    });
})

function emitAddNewGender(name) {
    socket.emit("add_gender", name)
}

socket.on("add_gender_to_list", (name) => {
    insertNewDocument(name)
})


export { emitAddNewGender }