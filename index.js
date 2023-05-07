const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

const user = [
    {id:"1", name:"hasib", email:"hasib@gmail.com"},
    {id:"2", name:"nayeem", email:"nayeem@gmail.com"},
    {id:"3", name:"dihan", email:"dihan@gmail.com"}
]

app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('user management server is running')
})

app.get('/user',(req, res) =>{
    res.send(user)
})

app.post("/user", (req, res) =>{
    console.log("post api console hitting")
    console.log(req.body)

    const newUser = req.body;
    newUser.id = user.length + 1;
    user.push(newUser);
    res.send(newUser);
})

app.listen(port, ()=>{
    console.log(`server is running on PORT : ${port}`)
})