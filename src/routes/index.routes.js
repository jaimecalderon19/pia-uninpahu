const Router = require('express');
const path = require('path');
//const { log } = require('handlebars');
const router =Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../pag/index.html'))
})
router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../pag/login.html'))
})
router.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'../pag/register.html'))
})
router.get('/cargado',(req,res)=>{
    res.sendFile(path.join(__dirname,'../pag/cargado.html'))
})
router.get('/dashboard',(req,res)=>{
    res.sendFile(path.join(__dirname,'../pag/dashboard.html'))
})

module.exports = router;

