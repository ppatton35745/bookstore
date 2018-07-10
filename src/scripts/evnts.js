const Books = require("./books");
const Dom = require("./dom");

const evnts = {
    createNewBook: function () {
        Books.create().then(
            Books.read().then(
                booksArr => {
                    Dom.buildBody(booksArr);
                }))
    },
    markAsRead: function () {

    },
    updateBook: function () {

    },
    deleteBook: function () {

    }
}

module.exports = evnts;