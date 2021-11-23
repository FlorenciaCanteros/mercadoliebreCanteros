const express = require('express')
const app = express()

app.use (express.static("public"));

app.listen (process.env.PORT ||3000,()=>{console.log("servidor funcionando")});

console.log(__dirname);

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/views/home.html')}); 

    app.get('/login.html', (req,res)=>{
        res.sendFile(__dirname + '/views/login.html');
    });
    
    app.get('/register.html', (req,res)=>{
        res.sendFile(__dirname + '/views/register.html');
    });
    
    
