const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Setup router for get & put all the books (/api/books)
router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create);


// Setup router for get, put & delete a book by id (/api/books/:id)
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;