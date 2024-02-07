var express = require('express')
var app = express()
var mysql = require('mysql')
const cors = require('cors')
app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'password',
    database:'crud'
});
app.post("/create",(req,res)=>{
    const roll = req.body.roll
    const name = req.body.name
    db.query("INSERT INTO first(roll,name) VALUES (?,?)",[roll,name],(err,result)=>{
        if(err) {console.log(err);}
        else {console.log("inserted")}
    })
})
app.get("/details",(req,res)=>{
    db.query("SELECT * FROM first",(err,result)=>{
        if(err) {
        console.log(err)
    }
    else{
        console.log("got details")
        res.send(result)
    }
})
})
app.delete("/delete/:rollno",(req,res)=>{
    db.query("DELETE FROM first WHERE roll = ?",[req.params.rollno],(err,result)=>{
        if(err){console.log(err)}
        else{console.log("deleted")}
})})
app.put("/update",(req,res)=>{
    db.query("UPDATE first SET name = ? WHERE roll = ?",[req.body.name, req.body.rollno],(err,result)=>{
        if(err){console.log(err)}
        else{console.log("updated")}
    })
})
app.listen(4000,()=>{
    console.log("running on 4000")
})