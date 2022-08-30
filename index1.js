const { response } = require("express");
const express = require("express");

console.log("hello , i'm  Priyadharshini");

const server = express();   

server.use(express.json())   

var users = [{id : 0, name: "Ravi"},{id : 01, name : "dharshini"},{id : 2, name : "priya"}];

server.get("/hello",(req,res)=> {
    res.send("Hello welcomee!!");
});

//PATH PARAM 
server.get("/hello/:name", (req, res) => {
    res.send("Hi there, glad to meet you " + req.params.name);
});

//QUERY PARAM
server.get("/hi", (req, res) => {
    res.send("Hello there, glad to meet you " + req.query.name);
});

//register item
server.post("/register/users", (req, res) => {
    // console.log(req.body);
    users.push(req.body);
    res.send("user register succesfully")
});

//add more users
server.post("/add/users", (req, res) => {
    // console.log(req.body);
    users.push(req.body);
    res.send("user register succesfully")
});

//update
server.put('/update/users',  (req, res) => {
    
    var id = req.params.id;
    users.forEach(u =>{
        if (u.id == id) {
            name1 = req.body.name;
            //email = req.body.email;
           // return users;
            res.send(u);
        }
        res.send("updated");
    })
// res.send({});
});

//fetch users
server.get("/fetch/user", (req, res) => {
    res.send(users)
});

server.get("/fetch/user/:id", (req, res) => {
    var id = req.params.id;
    users.forEach(u => {
        if (u.id == id) {
            res.send(u);
        }
})
res.send({});
});

//delete
server.delete("/delete/user", (req, res) => {
    for(let user in users){
        if(users[user].name=="priya"){
            //delete users[user];
            users.slice(req.body);
        }
    }
    res.send(users);
});

     

//filter
server.get("/filter/user/name",(req,res) =>{

    id=2;
    users = users.filter(item => item.id !== id);
    res.send(users);
})

server.listen(4000, () => {
    console.log("server running on port :4000");
});
