import { commentsCollection } from "./config/dbConnect.js";


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



export { findOneComment, findOneAndUpdate }