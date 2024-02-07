const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

//session management imports 
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

app = express();
app.use(express.json())

//session management app.uses
app.use(cors({
    origin :["http://localhost:3000"],
    method : ["GET","POST","DELETE","PUT"],
    credentials: true,
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended:true}))
app.use(session({
   key : 'userId',
   secret : 'Mysession',
   resave : false,
   saveUninitialized : false,
   cookie : { expires : 60*60*24}
}))
//

const saltRounds = 10

//db connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "crud",
});




//register
app.post("/register",(req,res)=>{
const username = req.body.username
const password = req.body.password
bcrypt.hash(password,saltRounds,(err,hash)=>{
    if(err){
        console.log(err)
    }
    db.query("INSERT INTO USERS VALUES (?,?);",[username,hash],(err,result)=>{
        if(err){
            console.log(err)
        }
    })
})
})
//session login
app.get("/login",(req,res)=>{
    if(req.session.user){
        res.send({logged:true,user:req.session.user})
    }
    else res.send({logged:false})
})

//login
app.post("/login",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT * FROM USERS WHERE NAME = ?;",username,(err,result)=>{
        if(err){
            res.send({message:err})
        }
        if (result.length > 0) {    
            console.log(result);
             bcrypt.compare(password,result[0].PASSWORD,(error,response)=>{
            if(response){
                //sucessfull login
                //session
                req.session.user = result
            res.send(result)}
            else {res.send({message:"username / password mismatch"})}
        })
     }
     else{
        res.send({message:"User doesn't exist"})
     }
});
})

app.listen(4001,()=>{
    console.log("Authentication server running on port : 4001")
})