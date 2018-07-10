const api = require("./api");
const BooksApi = api.books;


const books = {
    // READ
    read: function (userId) {
        return BooksApi.read(userId);
    },

    // CREATE
    create: function (userId, title, summary, pages) {
        return BooksApi.create(userId, title, summary, pages);
    },

    // UPDATE
    update: function (bookId, userId, title, summary, pages) {
        return BooksApi.update(bookId, userId, title, summary, pages);
    },

    // DELETE
    delete: function (bookId) {
        return BooksApi.delete(bookId);
    }
}

module.exports = books;