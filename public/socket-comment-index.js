import { insertNewGender,removeGender } from "./index.js";

const socket = io()

socket.emit('get_all_genders', (genders) => {
    genders.forEach(item => {
        insertNewGender(item.name)
    });
})

function emitAddNewGender(name) {
    socket.emit("add_gender", name)
}

socket.on("add_gender_to_list", (name) => {
    insertNewGender(name)
})

socket.on('gender_exists', (name) => {
    alert(`Gender ${name} already in the list`)
})

socket.on("gender_removed", (name) => {
    removeGender(name)
})


export { emitAddNewGender }