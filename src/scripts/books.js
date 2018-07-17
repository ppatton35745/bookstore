const api = require("./api");
const BooksApi = api.books;
const Dom = require("./dom");

const books = {
  // READ
  read: userId => {
    BooksApi.read(userId).then(booksArr => {
      Dom.buildDom(booksArr, userId);
    });
  },

  // CREATE
  create: (userId, title, summary, pages) => {
    BooksApi.create(userId, title, summary, pages).then(() => {
      books.read(userId);
    });
  },

  // UPDATE
  update: (bookId, userId, title, summary, pages, read) => {
    BooksApi.update(bookId, userId, title, summary, pages, read).then(() => {
      books.read(userId);
    });
  },

  // DELETE
  delete: (bookId, userId) => {
    BooksApi.delete(bookId).then(() => {
      books.read(userId);
    });
  }
};

module.exports = books;
