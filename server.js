const express = require("express")
const HomeRoute = require('./Routes/HomeRoute')

// server is ready
const server = express() 
server.listen(4000, () => {

})

server.use(express.static("Public"))



// sending Index.html for get response

server.get("/", (req, res) => {
    HomeRoute(req, res)
})