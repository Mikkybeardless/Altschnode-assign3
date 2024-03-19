// create
function postAuthors(req,res){
   
res.setHeader("Content-Type","text/plain");
res.end(`hello from ${req.method} Authors`)

  }
  
// read
function getAuthors (req,res){
      
    const authors= [ {name : "Dan Lock"}, { name:"Slivia Keneth"}, { name: "Igashi Michael"}, {name: "Francine Rivers"}];
    res.setHeader("Content-Type","text/plain");
    res.write(JSON.stringify(authors));
    res.end()
}

// update
function putAuthors(req,res){

  res.setHeader("Content-Type","text/plain");
  res.end(`hello from ${req.method} Authors`)
 
}



// delete
function deleteAuthors(req,res){


  res.setHeader("Content-Type","text/plain");
  res.end(`hello from ${req.method} Authors`)
}

// patch
function patchAuthors(req,res){
  res.setHeader("Content-Type","text/plain");
  res.end(`hello from ${req.method} Authors `)
}

module.exports = {
    getAuthors,
    putAuthors,
    postAuthors,
    patchAuthors,
    deleteAuthors}