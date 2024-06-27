const express = require('express');
const ruta = require('path');
const app = express();

const port = process.env.PORT || 3001;
app.listen(3000,()=>{
    console.log("servidor encendido");
});

app.get('/',(req,res)=>{
    res.send("Bienvenido al sitio");
});
app.get('/contacto',(req,res)=>{
    res.sendFile(ruta.join(__dirname,'/views/index.html'));
});
app.get('/',(req,res)=>{
    res.sendFile(ruta.join(__dirname,'/views/home.html'));
});
app.get('/404',(req,res)=>{
    res.send("Error página no encontrada");
});