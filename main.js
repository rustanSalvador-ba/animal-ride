
import { createRequire } from 'module'
import path from 'path';
//import swal from 'sweetalert';

const require = createRequire(import.meta.url);
const __dirname = path.resolve();
const express = require("express");
const app = express();

// serve your css as static
app.use(express.static(__dirname));
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
})
app.listen(8080, () => {
});

app.get("/animal-ride", (req, res) => {
  res.sendFile(__dirname+"/main.html");
});

app.get("/ranking", (req, res) => {
  res.sendFile(__dirname+"/ranking.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname+"/register.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname+"/login.html");
});