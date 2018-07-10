const $ = require("jquery");
const api = {
    books: {
        // READ
        read: function () {
            return $.ajax("http://localhost:3000/books?_expand=user");
        },
        // CREATE
        create: function (userId, title, summary, pages) {
            return $.ajax({
                url: "http://localhost:3000/books",
                method: "POST",
                data: {
                    "userId": userId,
                    "title": title,
                    "summary": summary,
                    "pages": pages
                }
            })
        },

        // UPDATE
        update: function (bookId, userId, title, summary, pages) {

            return $.ajax({
                url: `http://localhost:3000/books/${bookId}`,
                method: "PUT",
                data: {
                    "userId": userId,
                    "title": title,
                    "summary": summary,
                    "pages": pages
                }
            })
        },
        // DELETE
        delete: function (bookId) {

            return $.ajax({
                url: `http://localhost:3000/books/${bookId}`,
                method: "DELETE"
            })
        }
    }
}

module.exports = api;