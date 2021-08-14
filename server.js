const express = require("express")
const HomeRoute = require('./Routes/HomeRoute')
const Database = require("./Modules/database")

const user = new Database() 
// server is ready
const server = express() 
server.listen(4000, () => {

})

server.use(express.static("Public")) 
server.use(
    express.urlencoded ( {
         extended: true,
 })); 
 server.use(express.json());

// sending Index.html for get response 
server.get("/", (req, res) => {
    HomeRoute(req, res)
})

server.get("/users", async (req, res) => { 
    let users = await user.readFile() 
    users  =  JSON.stringify({
        data: users,
    }) 
    res.send(users)
})

server.post("/add_user", async (req, res) => {
    let newStudent = await user.addUser(req.body.name, req.body.number, req.body.course, req.body.source, req.body.paid)

    res.send(newStudent)
})

server.get("/courses", async (req, res) => { 
    let users = await user.readFile()   
    users  =  JSON.stringify({
        data: users,
    }) 
    res.send(users)
})




 


 