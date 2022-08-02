const Pool = require ('pg').Pool;
const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"glit",
    password:"mithamo",
    port:5432
});




module.exports=pool;
