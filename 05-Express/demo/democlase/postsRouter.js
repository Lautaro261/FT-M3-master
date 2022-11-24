const express = require('express');

const postsRouter = express.Router();

postsRouter.get('/', (req, res)=>{
    res.send('Estoy en el GET de posts papi rico')
});


module.exports= postsRouter;