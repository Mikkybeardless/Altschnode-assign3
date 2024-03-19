
//  Book functions
  //  create books
function postBooks(req,res){
  
res.setHeader("Content-Type","text/plain");
 res.end(`hello from ${req.method} Books`)

}

  // read all books
function getBooks(req,res){

    const books = JSON.stringify([ {name : "Unlock It"}, { name:"Peter Pan"}, { name: "Oliver Twist"}, {name: "Safe Haven"}]);
    res.setHeader("Content-Type","application/json");
    res.write((books));
    res.end()
  }
  
  // update books
  function putBooks(req,res){
  
    res.setHeader("Content-Type","text/plain");
    res.end(`hello from ${req.method} Books `)
  }
  
   // delete books

  function deleteBooks(req,res){ 
    res.setHeader("Content-Type","text/plain");
    res.end(`hello from ${req.method} Books `)
  }

  function patchBooks(req,res){
    
    res.setHeader("Content-Type","text/plain");
    res.end(`hello from ${req.method} Books `)
  }
  
  
  
  
  // Author controllers

  
  
  module.exports = {
      getBooks, 
      putBooks,
      patchBooks,
      postBooks,
      deleteBooks,
  }