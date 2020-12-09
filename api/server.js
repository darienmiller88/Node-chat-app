const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3000

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

app.use(express.static("client"))

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})