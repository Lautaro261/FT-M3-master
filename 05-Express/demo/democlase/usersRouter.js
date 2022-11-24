const express = require ('express');


const usersRouter = express.Router();

usersRouter.get('/', (req, res)=>{
   const {name} = req.query;

   if(!name) {
    return res.send("te devuelvo todos los usuarios")
}else{ 
    return res.send(`Te devuelvo info ${name}`)
}
});

usersRouter.post('/', (req, res)=>{
    res.send('Estoy en el POST de USERS')
});

usersRouter.get('/:id', (req, res)=>{
    const { id }= req.params;
    console.log(req.params);
    res.send(`Estoy en el detalle del usuario ${id}`)
});

module.exports= usersRouter;