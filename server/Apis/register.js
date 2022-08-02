const express = require('express');
const app = express();
const cors = require('cors');
const port = 3500 || 3200;
app.listen(3500,async()=>{
    try{
        if(port==3500) console.log(`server running on port: ${port}`);
        else console.log(`server running on port: ${port} `);
    }catch(err){
        console.error(err);
    }
});

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try {
        res.send('siiet')
    } catch (error) {
       console.error(error) 
    }
})