const findUser = require('./db.filteruser');

const authenticate = (req,res,next) => {
  
    const {username,password} = req.headers;
    const user = findUser(username);

    if (!user){
      res.statusCode = 401;
      res.end("Invalid username or password");
      return;
        
      }
    if(user.username !== username || user.password !== password){
        res.statusCode = 401;
        res.end("Wrong password");
        return;
      } 
      
      next(req,res);
}


module.exports = authenticate;