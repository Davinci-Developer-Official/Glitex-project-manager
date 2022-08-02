const express = require('express');
const app = express();

const cors= require('cors');


app.listen(5500,async()=>{
    try {
        console.log("server is running on port 5500");


    } catch (error) {
       console.error(error); 
    }
})


app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use(express.json());


app.get('/',async(req,res)=>{
    try {
        res.send('fuck e')
        //res.sendFile(__dirname+'/pages/register.html');
    } catch (error) {
       console.error(error); 
    }
});
