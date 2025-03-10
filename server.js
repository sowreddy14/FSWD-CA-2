const express = require('express')
const app = express()
port = 3000
app.use(express.json())
app.get("/run",(req,res)=>{
    if(req.query.title){
        return res.json(message:"Title cannot be empty")
    }
    if(req.query.description){
        return res.json(message:"Description caannot be empty")
    }
    const date = date.find(u=>u.currentDate===req.query.date)
    if(date){
        return res.json(message:"valid due date",data=currentDate)
    }
    else{
        return res.json(message:"Due date should be a valid future date")
    }
})
app.listen(port,()=>{console.log(`server running at port:${port}`)})