const http = require('http');
require("dotenv").config()
const {handleBooks, handleAuthors} = require("./src/routes/routes");
const port = process.env.PORT;
const getBody = require("./src/getBody");




const server = http.createServer(async (req,res)=> {
    try {
         const body = await getBody(req);
         req.body =  body;
        // handle books endpoint
        handleBooks(req,res);
  
      //  handle authors endpoint
        handleAuthors(req,res); 
        
    } catch (error) {
        res.statusCode = 500;
        res.end(error.message)
    }
})

server.listen(port, ()=>{
    console.log('server is active at http://localhost:' + port)
    
})