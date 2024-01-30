import { commentsCollection } from "./config/dbConnect.js";

function getAllGenders() {
    const genders = commentsCollection.find().toArray()
    return genders
}

function findOneComment(name) {
    const comment = commentsCollection.findOne({
        name: name
    })
    return comment
}

function findOneAndUpdate(name, value) {
    const res = commentsCollection.updateOne({
        name: name
    }, {
        $set: {
            value: value
        }
    })
    return res
}

function addGender(name) {
    const res = commentsCollection.insertOne({
        name,
        value: ''
    })

    return res
}

function deleteGender(name) {
    const res = commentsCollection.deleteOne({
        name
    })
    return res
}



export { findOneComment, findOneAndUpdate, getAllGenders, addGender, deleteGender }