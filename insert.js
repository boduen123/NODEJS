const mysql= require('mysql');


const conn= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crd2"
})
conn.connect((err)=>{
    console.log("database connect");
    const sql="INSERT INTO student(id,name,email)VALUES(2,'KEVIN','KEVIN@GMAIL.COM')";
    conn.query(sql,function(err){
        if(err) throw err;
        console.log("data inserted");
    })
})