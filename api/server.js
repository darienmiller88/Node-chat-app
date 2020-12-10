const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")
const socket = require("socket.io")
const app = express()
const PORT = process.env.PORT || 3000
let name = ""

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"), err => {
        if(err) {
            console.log(err)
        }
    })
})

app.get("/chat", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/chat.html"), err => {
        if(err) {
            console.log(err)
        }
    })
})

app.post("/", (req, res) => {
    name = req.body.name
    console.log(req.body.name)
    res.redirect("/chat")
})

app.use(express.static("client"))

const server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})

const io = socket(server)

io.sockets.on("connection", socket => {
    console.log(socket.id)
    socket.on("send-chat-message", (data) => {
        socket.broadcast.emit("chat-message", data)
    })

    socket.on("disconnect", (data) => {
        console.log(data)
    })
})