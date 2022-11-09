var fs  = require("fs")
var http  = require("http")



http.createServer((request, response)=>{
    fs.readFile(`${__dirname}/images/${request.url}.jpg`, (err, data)=>{
        if(err){
            response.writeHead(400, {'Content-Type':'text-plain'});
            response.end('no papi')
        }else{
            response.writeHead(200, {'Content_type':'image'});
            response.end(data);
        }
    })
}).listen(3000, '127.0.0.1');   
