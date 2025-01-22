const book = require("../models/book");
module.exports = {
    addBook: async (req, res) => {
        let bookReq = req.body;
        const newbook = await book.create(bookReq);
        res.json(newbook.toJSON());
    },

    getBooks: async (req, res) => {
        const books = await book.findAll();
        res.json(books.map(b => b.toJSON()))
    },

    getBook: async (req, res) => {
        console.log(req.params);
        const findBook = await book.findOne({ where: req.params });
        console.log(findBook.toJSON());
        res.json(findBook.toJSON());
    },

    deleteBook: async (req, res) => {
        const filasEliminadas = await book.destroy({where: req.params});
        res.json(filasEliminadas);
    }

};
