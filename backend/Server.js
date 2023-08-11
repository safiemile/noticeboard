import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import multer from 'multer'
import path  from 'path'
const app = express();
app.use(cors());
app.use(express.json());
// Make Image accessible
app.use(express.static('public'));
//ends here
const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})
//create APIs here... 


// show student API
app.get('/student', (req, res) => {
   const sql = "SELECT * FROM student";
    db.query(sql, (err, data) =>{
        if(err) return res.json("error");
        return res.json(data);
    })
})
//Ends here

//Insert Student API
app.post('/create', (req ,res) =>{
    const sql = "INSERT INTO student (`Name`, `Email`) VALUES(?)";
    const values=[
        req.body.name,
        req.body.email
    ]
    db.query(sql,[values], (err, data) =>{
        if(err) return res.json("error");
        return  res.json(data);
    })
})


//Ends Here

//Update API
app.put('/update/:id', (req, res)=>{
    const sql="UPDATE `student` SET `Name`= ?,`Email` = ? WHERE `student`.`Id` = ?";
    const values=[
        req.body.name,
        req.body.email
    ]
    const id=req.params.id;
    db.query(sql, [...values, id], (err, data) =>{
        if(err) return res.json("error");
        return res.json(data);
    })
})
//Ends

//Delete API
app.delete('/remove/:id',(req, res) =>{
    const sql=" DELETE from `student` WHERE `student`.`Id` = ?"; 
    const id=req.params.id;
    db.query(sql, [id], (err, data) =>{
        if(err) return res.json("error");
        return res.json(data);
    })
})
//ends here
//file uplaod management
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
       // let ext = path.extname(file.orginalname);
        cb(null, file.fieldname + "_" + Date.now() + ".jpg")
    }
})
const upload = multer({
    storage: storage
})
// Ends here
//Upload image API
app.post('/upload', upload.single('image'), (req, res) =>{
    console.log(req.file.filename);
    
    const image = req.file.filename;
    const  sql = "INSERT INTO `images` (`name`) VALUES(?)";
    db.query(sql, [image],(err ,result) =>{
        if(err) return res.json("error");
        return res.json("Success");
    })
})
// Diplay Image API
app.get('/displayimage', (req, res) => {
    const sql = "SELECT * FROM `images`";
    db.query(sql, (err, result) =>{
        if(err) return res.json("error");
        return res.json(result);
    })
})

//Ends here
//Ends here
app.listen(8081,() => {
    console.log("Listening");
})