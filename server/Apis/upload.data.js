const express = require('express');
const app = express();

const cors= require('cors');

const port = 5500 || 5000;

app.listen(port,async()=>{
    try {
        console.log(`server is running on port: ${port} `);


    } catch (error) {
       console.error(error); 
    }
})

 const data =[
    {
        filename:'Thomas Mithamo cv',
        file:"advbsbyba.odt",
        sender:"Thomas Mithamo",
        email:"thomasmithamo@gmail.com",
        date:"22/04/2012"

    },
    {
        filename:"Dennis murimi",
        file: "siviet.png",
        sender:"Dennis Murimi",
        email:"dennismurimi@gmail.com",
        date:"24/06/2013"
    }
]


app.use(express.urlencoded({extended:false}));
app.use(cors());


app.use(express.json());


app.get('/data',async(req,res)=>{
    try {
       res.status(200).send(data);
        
        res.send('fuck sieet')
        //res.sendFile(__dirname+'/pages/register.html');
    } catch (error) {
       console.error(error); 
    }
});

app.post('/upload',(req,res)=>{
    try {
        //const{authorization}= req.body  
        //if(authorization && authorization == 'glitex'){
            const info = req.body;
            data.push(info);
            res.status(200).send(`data sent`);
            console.log(res.headers);
            console.log(info)
        //}
        
    } catch (error) {
        console.error(error);
    }
})

