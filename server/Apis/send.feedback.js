const express = require('express');
const app = express();
const port = 5000;
const host = 'localhost';
const base = '127.0.0';
const {sendFeedbackToUser}= require('./data.json')
const Pool = require ('pg').Pool
const pool = require('./database.js')
const cors = require('cors');
const { request } = require('http');
const path = require('path')
app.listen(port,()=>console.log(`server running on :http://${base}:${port} host:${host} `));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.post('/sendFeedback',async()=>{
    try {
        (req,res)=>{
            const [reciepient,reciepientemail,responsetext,senderemail]=req.body;
            pool.query();
            console.log(req.body);
        }
    } catch (error) {
        
    }
});