const mysql= require('mysql');


const conn= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crd2"
})
conn.connect((err)=>{
    console.log("database connect");
    const sql="DELETE FROM student WHERE id=1";
    conn.query(sql,(err, result)=>{
        if(err) throw err;
        console.log("record deleted");
        
    });
})