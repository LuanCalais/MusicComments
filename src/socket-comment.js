import io from "./server.js";

// When some client emit a event called "connection" the server will listen and done something 
io.on("connection", (socket) => {
    console.log('A user has connected')

    socket.on("gender_select", (name) => {
        // join - Create a room
        // join - Get the client and group him in a room with the gender type name
        socket.join(name)
    })

    // Get the socket emit by client 
    socket.on("text_action", (value) => {
        // Emit to all the ones who are listening but the emitter 
        socket.broadcast.emit("text_action_client", value)
    })

    socket.on("disconnect", (reason) => {
        console.log(`Client ${socket.id} disconnected. The reason is: ${reason}`)
    })
})