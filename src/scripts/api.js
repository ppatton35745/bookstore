const $ = require("jquery");

const api = {
    books: {
        // READ
        read: function (userId) {
            return $.ajax(`http://localhost:3000/books?_expand=user&userId=${userId}&read=false`);
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
                    "pages": pages,
                    "read": "false"
                }
            })
        },

        // UPDATE
        update: function (bookId, userId, title, summary, pages, read) {

            return $.ajax({
                url: `http://localhost:3000/books/${bookId}`,
                method: "PUT",
                data: {
                    "userId": userId,
                    "title": title,
                    "summary": summary,
                    "pages": pages,
                    "read": read
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