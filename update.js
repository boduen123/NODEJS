const mysql= require('mysql');


const conn= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crd2"
})
conn.connect((err)=>{
    console.log("database connect");
    const sql="UPDATE student SET name='boduen' WHERE id=2";
    conn.query(sql,(err, result)=>{
        if(err) throw err;
        console.log(result.affectedRows + "record(s) update");
    })
})