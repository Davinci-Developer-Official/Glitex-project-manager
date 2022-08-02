const express = require('express');
const app = express();
const port = 5000;
const host = 'localhost';
const base = '127.0.0';

const Pool = require ('pg').Pool
const pool = require('./database.js')
const cors = require('cors');
const { request } = require('http');
const path = require('path')
app.listen(port,()=>console.log(`server running on :http://${base}:${port} host:${host} `));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/recieve',(req,res)=>{
    res.json({data:"will get user info"});
})