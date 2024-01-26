import { insertNewDocument } from "./index.js";

const socket = io()

socket.emit('get_all_genders', (genders) => {
    genders.forEach(item => {
        insertNewDocument(item.name)
    });
})