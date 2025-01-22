const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
router.post("/add", bookController.addBook);
router.get("/getBooks", bookController.getBooks)
router.get("/book/:ISBN", bookController.getBook)
router.delete("/book/:ISBN", bookController.deleteBook)

module.exports = router;