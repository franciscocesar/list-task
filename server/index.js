const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")
 
const db = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"28102001e",
    database:"todoApp"
})


app.use(cors())
app.use(express.json())

app.post("/add", (req,res) =>{
   const { tarefa } = req.body


   let SQL = "INSERT INTO todo (tarefa) VALUES ( ? )"

   db.query(SQL, [tarefa], (err,result) => {
       if(err) console.log(err);
       else res.send(result)
   })

   
})

app.post("/search", (req, res) => {
    const { tarefa } = req.body;
    
    let mysql =
      "SELECT * from todo WHERE tarefa = ?";
    db.query(mysql, [tarefa], (err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  });

app.get("/getTask", (req, res) => {
    let SQL = "SELECT * from todo";

    db.query(SQL, (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let mysql = "DELETE FROM todo WHERE idtodo = ?";
    db.query(mysql, [id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3030, () => {
    console.log("rodando servidor")

})