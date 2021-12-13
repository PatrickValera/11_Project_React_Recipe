const express =require('express')
const path = require('path');
const app=express()


const __dirname1=path.resolve()
var http = require("http");
// setInterval(function() {
//     http.get("http://patrickv.herokuapp.com");
// }, 300000); // every 5 minutes (300000)
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname1,'/frontend/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname1,'frontend','build','index.html'))
    })
}else{
    console.log('HELLO')
}

app.listen(process.env.PORT||5000,console.log('SERVER RUNNING'))