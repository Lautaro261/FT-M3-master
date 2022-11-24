const express = require('express');
const morgan = require ('morgan');
const usersRouter = require('./usersRouter.js')
const postsRouter = require('./postsRouter');


const server = express();

server.use('/', (req, res, next)=>{
    console.log('estamos pasando por next');
    next();
});

server.use(morgan("dev"));

server.use('/users', usersRouter);

server.use('/post', postsRouter);




server.listen("3000", ()=>{
    console.log("EL SERVIDOR TODO OK 3000")
});