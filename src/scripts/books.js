const api = require("./api");
const BooksApi = api.books;
const Dom = require("./dom");


const books = {
    // READ
    read: function (userId) {
        BooksApi.read(userId).then(bookrArr => {Dom.buildDom(booksArr)});
    },

    // CREATE
    create: function (userId, title, summary, pages) {
        return BooksApi.create(userId, title, summary, pages);
    },

    // UPDATE
    update: function (bookId, userId, title, summary, pages, read) {
        return BooksApi.update(bookId, userId, title, summary, pages, read);
    },

    // DELETE
    delete: function (bookId) {
        return BooksApi.delete(bookId);
    }
}

module.exports = books;