import express from "express";
import url from "url"
import path from "path"
import http from "http"
import { Server } from "socket.io";

const app = express()
const port = process.env.port || 8000

// Absolute path we are 
const currentPath = url.fileURLToPath(import.meta.url)
console.log(currentPath)
// Get the public director 
const publicDir = path.join(currentPath, "../..", "public")

// Indicates to express use de public directory
app.use(express.static(publicDir))

// Create http server
const httpServer = http.createServer(app)

httpServer.listen(port, () => {
    console.log(`server listen in port ${port}`)
})

const io = new Server(httpServer)

// When some client emit a event called "connection" the server will listen and done something 
io.on("connection", () => {
    console.log('A user has connected')
})