const api = require("./api");
const BooksApi = api.books;
const Dom = require("./dom");

const currentUserId = sessionStorage.getItem("currentUserId");

const books = {
    // READ
    read: (userId) => {
        BooksApi.read(userId).then(booksArr => {
            Dom.buildDom(booksArr)
        });
    },

    // CREATE
    create: (userId, title, summary, pages) => {
        BooksApi.create(userId, title, summary, pages).then(() => {
            books.read(currentUserId);
        });
    },

    // UPDATE
    update: (bookId, userId, title, summary, pages, read) => {
        BooksApi.update(bookId, userId, title, summary, pages, read).then(() => {
            books.read(currentUserId);
        });
    },

    // DELETE
    delete: (bookId) => {
        BooksApi.delete(bookId).then(() => {
            books.read(currentUserId);
        });
    }
}

module.exports = books;