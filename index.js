function somme(x,y){
    return x+y;
}

const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send(`Bonjour ${req.query.couleur}`);
})
app.listen(3000,()=>{
    console.log('Adress du serveur : http://localhost:3000')
});