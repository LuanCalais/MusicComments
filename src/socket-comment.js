import io from "./server.js";

const comments = [
    {
        name: "Indie",
        value: ""
    },
    {
        name: "Rock",
        value: ""
    },
    {
        name: "Pop",
        value: ""
    },
    {
        name: "Country",
        value: ""
    },
]

function findComment(name) {
    return comments.find(item => item.name === name)
}

// When some client emit a event called "connection" the server will listen and done something 
io.on("connection", (socket) => {
    console.log('A user has connected')

    // this is activate when some enter in the selected gender 
    socket.on("gender_select", (name, callBackValue) => {

        // join - Create a room
        // join - Get the client and group him in a room with the gender type name
        socket.join(name)

        const comment = findComment(name)

        //Return value as callBack when server recognize the event
        if (comment) callBackValue(comment.value)
    })

    // Get the socket emit by client 
    socket.on("text_action", ({ text, name }) => {

        const comment = findComment(name)

        if (comment) {
            comment.value = text

            // *** Set the information to the correct room and clients there
            socket.to(name).emit("text_action_client", text)
        }


        // *** Emits examples ***

        // *** Emit to all the ones who are listening but the emitter 
        // socket.broadcast.emit("text_action_client", text)

        // *** Emit of the event include the client connected with the socket
        // io.to(name).emit("text_action_client", text)

        // *** Emit with a array of rooms 
        // socket.to([name, 'Indie']).emit("text_action_client", text)


        // *** Emit a event to the rooms with one exception 
        // socket.to(["Indie", "Country"]).except("Rock").emit("text_action_client", text);

    })

    socket.on("disconnect", (reason) => {
        console.log(`Client ${socket.id} disconnected. The reason is: ${reason}`)
    })
})