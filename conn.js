const mysql= require('mysql');


const conn= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crd2"
})
conn.connect((err)=>{
    console.log("database connect");
})