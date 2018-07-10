const Books = require("./books");
const Dom = require("./dom");

const currentUserId = sessionStorage.getItem("currentUserId");

const evnts = {
    addNewBook: function () {
        $("#addNewBookButton").hide();
        $("#newTitleInput").show().focus();
        $("#newSummaryInput").show();
        $("#newPagesInput").show();
        $("#saveNewButton").show();
        $("#cancelNewButton").show();
    },
    saveNewBook: function () {
        Books.create(currentUserId,$("#newTitleInput").val(),$("#newSummaryInput").val(),$("#newPagesInput").val()).then(
            Books.read(currentUserId).then(
                booksArr => {
                    Dom.buildDom(booksArr);
                }))
    },
    cancelNewBook: function () {
        $("#addNewBookButton").show();
        $("#newTitleInput").blur().hide();
        $("#newSummaryInput").hide();
        $("#newPagesInput").hide();
        $("#saveNewButton").hide();
        $("#cancelNewButton").hide();
    },

// const card = $("<div>").attr("bookId",book["id"]);
// const title = $("<h2>").text(book["title"]).addClass("title");
// const titleEdit = $("<input>").addClass("titleEdit").hide();
// const summary = $("<p>").text(book["summary"]).addClass("summary");
// const summaryEdit = $("<input>").addClass("summaryEdit").hide();
// const pages = $("<p>").text(book["pages"]).addClass("pages");
// const pagesEdit = $("<input>").addClass("pagesEdit").hide();
// const markAsReadBox = $("<input>").attr("type","checkbox").addClass("markAsReadBox").on("click",Evnts.markAsRead(card));
// const editButton = $("<button>").text("Edit").addClass("editButton").on("click",Evnts.editBook(card));
// const deleteButton = $("<button>").text("Delete").addClass("deleteButton").on("click",Evnts.deleteBook(card));
// const saveButton = $("<button>").text("Save").addClass("saveEditButton").on("click",Evnts.saveBookEdits(card)).hide();
// const cancelButton = $("<button>").text("Cancel").addClass("cancelEditButton").on("click",Evnts.cancelBookEdits(card)).hide();

// update: function (bookId, userId, title, summary, pages, read)
    markAsRead: function (card) {
        const bookId = card["bookId"];
        const title = card.children(".title").text();
        const summary = card.children(".summary").text();
        const pages = card.children(".pages").text();

        Books.update(bookId, currentUserId, title, summary, pages, "true").then(
            Books.read(currentUserId).then(
                booksArr => {
                    Dom.buildDom(booksArr);
                }))
    },
    editBook: function (card) {

        const title = card.children(".title");
        const summary = card.children(".summary");
        const pages = card.children(".pages");
        const markAsReadBox = card.children(".markAsReadBox");
        const titleEdit = card.children(".titleEdit");
        const summaryEdit = card.children(".summaryEdit");
        const pagesEdit = card.children(".pagesEdit");

        title.hide();
        summary.hide();
        pages.hide();
        markAsReadBox.hide();
        card.children(".editButton").hide();
        card.children(".deleteButton").hide();

        titleEdit.val(title.text()).show();
        summaryEdit.val(summary.text()).show();
        pagesEdit.val(pages.text()).show();
        card.children(".saveEditButton").show();
        card.children(".cancelEditButton").show();

    },
    saveBookEdits: function (card) {
        const bookId = card["bookId"];
        const title = card.children(".titleEdit").val();
        const summary = card.children(".summaryEdit").val();
        const pages = card.children(".pagesEdit").val();

        Books.update(bookId, currentUserId, title, summary, pages, "false").then(
            Books.read(currentUserId).then(
                booksArr => {
                    Dom.buildDom(booksArr);
                }))
    },
    cancelBookEdits: function (card) {

        const title = card.children(".title");
        const summary = card.children(".summary");
        const pages = card.children(".pages");
        const markAsReadBox = card.children(".markAsReadBox");
        const titleEdit = card.children(".titleEdit");
        const summaryEdit = card.children(".summaryEdit");
        const pagesEdit = card.children(".pagesEdit");

        title.show();
        summary.show();
        pages.show();
        markAsReadBox.show();
        card.children(".editButton").show();
        card.children(".deleteButton").show();

        titleEdit.hide();
        summaryEdit.hide();
        pagesEdit.hide();
        card.children(".saveEditButton").hide();
        card.children(".cancelEditButton").hide();
    },
    deleteBook: function (card) {
        const bookId = card["bookId"];
        Books.delete(bookId);
    }
}

module.exports = evnts;