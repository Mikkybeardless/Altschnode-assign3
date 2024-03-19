const {
    getBooks, 
    putBooks,
    patchBooks,
    postBooks,
    deleteBooks,
} = require("../controller/books.controller");

const {getAuthors,
  putAuthors,
  postAuthors,
  patchAuthors,
  deleteAuthors} = require("../controller/author.controller")
const authenticate = require("../authenticate");
const getBody = require("../getBody");

const handleBooks = async (req,res) => {
;
  const route = `${req.method} ${req.url}`
  
    switch (route) {
      case "GET /books":
        authenticate(req, res, getBooks);
        break;

      case "PUT /books":
        authenticate(req, res, putBooks);
        break;

      case "POST /books":
        authenticate(req, res, postBooks);
        break;
      case "PATCH /books":
        authenticate(req, res, patchBooks);
        break;
      case "DELETE /books":
        authenticate(req, res, deleteBooks);
        break;

      default:
        break;
    }
  }
;


const handleAuthors = async (req,res) => {

  const route = `${req.method} ${req.url}`
    switch (route) {
      case ("GET /authors"):
          authenticate(req,res,getAuthors);
          break;
      case ("PUT /authors"):
          authenticate(req,res,putAuthors);
          break;
      case ("POST /authors"):
          authenticate(req,res,postAuthors);
          break;
      case ("PATCH /authors"):
          authenticate(req,res,patchAuthors);
          break;
      case ("DELETE /authors"):
          authenticate(req,res,deleteAuthors);
          break;
    
      default:
          break;
    }
  }



module.exports = {handleBooks, handleAuthors}
